(function initializeBuildersLoungeAuth() {
  "use strict";

  const API_BASE = /^(127\.0\.0\.1|localhost)$/.test(window.location.hostname)
    ? "http://127.0.0.1:8787"
    : "https://reportmode-request-board.report-request-board.workers.dev";

  const MESSAGES = {
    login_required: "Google 로그인이 필요합니다.",
    google_login_not_configured: "Google 로그인 설정이 아직 완료되지 않았습니다.",
    invalid_google_token: "로그인 시간이 만료되었습니다. 다시 로그인해 주세요.",
    insufficient_builds: "빌드가 부족합니다. 게시판에 글을 작성하면 1빌드가 적립됩니다.",
    tool_disabled: "관리자가 세계명화 이미지 생성을 아직 활성화하지 않았습니다.",
    tool_not_configured: "관리자 API 설정이 아직 완료되지 않았습니다.",
    provider_request_failed: "연결된 이미지 API 요청에 실패했습니다. 관리자 설정과 사용량을 확인해 주세요.",
    empty_provider_response: "이미지 API가 빈 결과를 반환했습니다."
  };

  const state = {
    credential: "",
    clientId: "",
    loginReady: false,
    user: null,
    tool: null,
    error: ""
  };

  function readableError(code, fallback) {
    return MESSAGES[String(code || "")] || fallback || "요청을 처리하지 못했습니다.";
  }

  function selectedTool(tools) {
    return Array.isArray(tools) ? tools.find((tool) => tool && tool.id === "masterpiece") || null : null;
  }

  function accountElements() {
    return {
      summary: document.getElementById("lounge-account-summary"),
      badge: document.getElementById("lounge-build-badge"),
      googleSlot: document.getElementById("lounge-google-signin"),
      logout: document.getElementById("lounge-logout"),
      status: document.getElementById("lounge-provider-status")
    };
  }

  function renderAccount() {
    const ui = accountElements();
    if (!ui.summary) return;
    const cost = Number(state.tool?.cost || 0);
    if (state.user) {
      ui.summary.textContent = `${state.user.name || "빌더"} · ${Number(state.user.balance || 0).toLocaleString("ko-KR")}빌드`;
      ui.badge.textContent = state.tool?.enabled ? `1회 ${cost}빌드` : "API 준비 중";
      ui.googleSlot.replaceChildren();
      ui.logout.classList.remove("is-hidden");
      ui.status.textContent = state.error || "API 키는 서버에만 보관되며 이 브라우저로 전달되지 않습니다.";
      return;
    }
    ui.summary.textContent = state.loginReady ? "Google 로그인 후 이미지 생성" : "Google 로그인 설정 대기 중";
    ui.badge.textContent = state.tool?.enabled ? `1회 ${cost}빌드` : "API 준비 중";
    ui.logout.classList.add("is-hidden");
    ui.status.textContent = state.error || (state.loginReady
      ? "게시판 글 1건을 등록하면 1빌드가 적립됩니다."
      : "관리자가 Google OAuth 클라이언트 ID를 설정하면 로그인할 수 있습니다.");
    if (state.loginReady) void renderGoogleButton(ui.googleSlot).catch((error) => {
      state.error = error.message;
      ui.status.textContent = state.error;
    });
  }

  async function request(path, options = {}) {
    const headers = new Headers(options.headers || {});
    if (options.body && !headers.has("Content-Type")) headers.set("Content-Type", "application/json");
    if (state.credential) headers.set("Authorization", `Bearer ${state.credential}`);
    let response;
    try {
      response = await fetch(API_BASE + path, { cache: "no-store", ...options, headers });
    } catch {
      const error = new Error("생성 서버와 연결이 끊어졌습니다. 잠시 후 다시 시도하거나, 관리자 설정에서 연결 방식을 OpenRouter로 저장해 주세요.");
      error.code = "network_error";
      throw error;
    }
    const body = await response.json().catch(() => ({}));
    if (!response.ok) {
      if (response.status === 401) logout(false);
      const error = new Error(readableError(body?.error, body?.message));
      error.code = body?.error || "request_failed";
      error.status = response.status;
      throw error;
    }
    return body;
  }

  async function acceptCredential(credential) {
    state.credential = String(credential || "");
    if (!state.credential) throw new Error(MESSAGES.login_required);
    try {
      const body = await request("/lounge/me");
      state.user = body.user || null;
      state.tool = selectedTool(body.tools) || state.tool;
      state.error = "";
      renderAccount();
    } catch (error) {
      state.credential = "";
      state.user = null;
      state.error = error.message;
      renderAccount();
      throw error;
    }
  }

  function waitForGoogle(attempt = 0) {
    if (window.google?.accounts?.id) return Promise.resolve(window.google.accounts.id);
    if (attempt >= 80) return Promise.reject(new Error("Google 로그인 모듈을 불러오지 못했습니다."));
    return new Promise((resolve) => window.setTimeout(resolve, 100)).then(() => waitForGoogle(attempt + 1));
  }

  async function renderGoogleButton(container) {
    if (!state.clientId || !container) return;
    const googleIdentity = await waitForGoogle();
    googleIdentity.initialize({
      client_id: state.clientId,
      callback: (response) => void acceptCredential(response?.credential).catch(() => undefined),
      auto_select: false
    });
    container.replaceChildren();
    googleIdentity.renderButton(container, {
      theme: "outline",
      size: "large",
      shape: "pill",
      text: "signin_with",
      logo_alignment: "left",
      locale: "ko",
      width: Math.min(300, Math.max(220, container.clientWidth || 260))
    });
  }

  function requestParentSession() {
    if (window.parent !== window) {
      window.parent.postMessage({ type: "builders-lounge:request-auth" }, window.location.origin);
    }
  }

  function bindParentBridge() {
    window.addEventListener("message", (event) => {
      if (event.origin !== window.location.origin || event.source !== window.parent) return;
      if (event.data?.type !== "builders-lounge:auth") return;
      const credential = String(event.data.credential || "");
      if (credential) void acceptCredential(credential).catch(() => undefined);
    });
    requestParentSession();
  }

  function logout(showMessage = true) {
    state.credential = "";
    state.user = null;
    state.error = showMessage ? "로그아웃되었습니다." : "";
    try { window.google?.accounts?.id?.disableAutoSelect?.(); } catch { /* 로컬 계정만 로그아웃합니다. */ }
    renderAccount();
  }

  async function generateImage({ prompt, aspectRatio, qualityDirective }) {
    if (!state.user || !state.credential) throw new Error(MESSAGES.login_required);
    if (!state.tool?.enabled) throw new Error(MESSAGES.tool_disabled);
    const requestId = crypto.randomUUID();
    const fullPrompt = [String(prompt || "").trim(), `Aspect ratio: ${String(aspectRatio || "3:4")}`, String(qualityDirective || "").trim()].filter(Boolean).join("\n\n");
    const body = await request("/lounge/tools/masterpiece/generate", {
      method: "POST",
      headers: { "X-Request-Id": requestId },
      body: JSON.stringify({ requestId, input: { prompt: fullPrompt } })
    });
    const balance = Number(body.balance || 0);
    state.user = { ...state.user, balance };
    renderAccount();
    if (window.parent !== window) {
      window.parent.postMessage({ type: "builders-lounge:balance", balance }, window.location.origin);
    }
    const imageDataUrl = String(body.result?.imageDataUrl || "");
    if (!imageDataUrl) throw new Error(MESSAGES.empty_provider_response);
    return {
      imageDataUrl,
      model: state.tool?.model || "관리자 설정 모델",
      endpoint: "builders-lounge",
      balance
    };
  }

  async function initialize() {
    bindParentBridge();
    document.getElementById("lounge-logout")?.addEventListener("click", () => logout());
    try {
      const body = await request("/lounge/config");
      state.clientId = String(body.googleClientId || "");
      state.loginReady = Boolean(body.loginReady);
      state.tool = selectedTool(body.tools);
      state.error = "";
    } catch (error) {
      state.error = error.message;
    }
    renderAccount();
    requestParentSession();
  }

  window.BuildersLoungeAuth = Object.freeze({ generateImage, logout, getState: () => ({ ...state }) });
  window.addEventListener("DOMContentLoaded", () => void initialize());
})();
