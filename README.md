# 세계명화 프롬프트 스튜디오

명화·캐릭터·배경을 고른 뒤 이미지 생성용 프롬프트를 만드는 정적 웹앱입니다.

## 이용 흐름

1. 명화, 캐릭터, 배경, 비율을 선택합니다.
2. 프롬프트는 브라우저에서 무료로 조합합니다.
3. Google 로그인 후 Builders Lounge 빌드 포인트로 이미지를 생성합니다.

사용자는 API 키를 입력하지 않습니다. 이미지 API 공급자·주소·모델·키·1회 빌드 가격은 Builders Lounge 관리자 화면에서 설정합니다. Builders Lounge 안에서 열면 부모 화면과 로그인·잔액을 공유합니다.

## 개발

```bash
npm run check
npm run dev
```

로컬 주소는 `http://localhost:3000`입니다. GitHub Actions는 `public/` 폴더를 GitHub Pages에 배포합니다.

주요 파일:

- `public/index.html`: 화면
- `public/app.js`: 프롬프트 조합과 이미지 표시
- `public/lounge-auth.js`: Google 로그인·빌드 포인트·중앙 API 연결
- `public/masterpieces-data.js`: 로컬 작품 목록
