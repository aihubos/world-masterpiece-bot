const MASTERPIECE_CATEGORIES = [
  { id: "all", label: "전체" },
  { id: "classic", label: "르네상스/고전" },
  { id: "impression", label: "인상주의" },
  { id: "modern", label: "모더니즘" },
  { id: "pop", label: "팝아트/그래픽" }
];

const MASTERPIECES =
  Array.isArray(window.__MASTERPIECES_LOCAL__) && window.__MASTERPIECES_LOCAL__.length > 0
    ? window.__MASTERPIECES_LOCAL__
    : [
  {
    id: "mona-lisa",
    titleKo: "모나리자",
    titleEn: "Mona Lisa",
    artistKo: "레오나르도 다 빈치",
    artistEn: "Leonardo da Vinci",
    category: "classic",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg/640px-Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg"
  },
  {
    id: "school-of-athens",
    titleKo: "아테네 학당",
    titleEn: "The School of Athens",
    artistKo: "라파엘로",
    artistEn: "Raphael",
    category: "classic",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Sanzio_01.jpg/800px-Sanzio_01.jpg"
  },
  {
    id: "creation-of-adam",
    titleKo: "아담의 창조",
    titleEn: "The Creation of Adam",
    artistKo: "미켈란젤로",
    artistEn: "Michelangelo",
    category: "classic",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Michelangelo_-_Creation_of_Adam_%28cropped%29.jpg/800px-Michelangelo_-_Creation_of_Adam_%28cropped%29.jpg"
  },
  {
    id: "birth-of-venus",
    titleKo: "비너스의 탄생",
    titleEn: "The Birth of Venus",
    artistKo: "산드로 보티첼리",
    artistEn: "Sandro Botticelli",
    category: "classic",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Birth_of_Venus_Botticelli.jpg/800px-Birth_of_Venus_Botticelli.jpg"
  },
  {
    id: "last-supper",
    titleKo: "최후의 만찬",
    titleEn: "The Last Supper",
    artistKo: "레오나르도 다 빈치",
    artistEn: "Leonardo da Vinci",
    category: "classic",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Leonardo_da_Vinci_-_Last_Supper_high_res.jpg/900px-Leonardo_da_Vinci_-_Last_Supper_high_res.jpg"
  },
  {
    id: "girl-pearl",
    titleKo: "진주 귀걸이를 한 소녀",
    titleEn: "Girl with a Pearl Earring",
    artistKo: "요하네스 페르메이르",
    artistEn: "Johannes Vermeer",
    category: "classic",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Meisje_met_de_parel.jpg/640px-Meisje_met_de_parel.jpg"
  },
  {
    id: "arnolfini-portrait",
    titleKo: "아르놀피니 부부의 초상",
    titleEn: "The Arnolfini Portrait",
    artistKo: "얀 반 에이크",
    artistEn: "Jan van Eyck",
    category: "classic",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Van_Eyck_-_Arnolfini_Portrait.jpg/640px-Van_Eyck_-_Arnolfini_Portrait.jpg"
  },
  {
    id: "las-meninas",
    titleKo: "시녀들",
    titleEn: "Las Meninas",
    artistKo: "디에고 벨라스케스",
    artistEn: "Diego Velazquez",
    category: "classic",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Las_Meninas_01.jpg/800px-Las_Meninas_01.jpg"
  },
  {
    id: "night-watch",
    titleKo: "야경",
    titleEn: "The Night Watch",
    artistKo: "렘브란트",
    artistEn: "Rembrandt",
    category: "classic",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/The_Night_Watch_-_HD.jpg/800px-The_Night_Watch_-_HD.jpg"
  },
  {
    id: "liberty-leading-people",
    titleKo: "민중을 이끄는 자유의 여신",
    titleEn: "Liberty Leading the People",
    artistKo: "외젠 들라크루아",
    artistEn: "Eugene Delacroix",
    category: "classic",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Eug%C3%A8ne_Delacroix_-_La_libert%C3%A9_guidant_le_peuple.jpg/800px-Eug%C3%A8ne_Delacroix_-_La_libert%C3%A9_guidant_le_peuple.jpg"
  },
  {
    id: "wanderer-sea-fog",
    titleKo: "안개 바다 위의 방랑자",
    titleEn: "Wanderer above the Sea of Fog",
    artistKo: "카스파르 다비드 프리드리히",
    artistEn: "Caspar David Friedrich",
    category: "classic",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Caspar_David_Friedrich_-_Wanderer_above_the_sea_of_fog.jpg/640px-Caspar_David_Friedrich_-_Wanderer_above_the_sea_of_fog.jpg"
  },
  {
    id: "hay-wain",
    titleKo: "건초마차",
    titleEn: "The Hay Wain",
    artistKo: "존 컨스터블",
    artistEn: "John Constable",
    category: "classic",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/John_Constable_-_The_Hay_Wain_%281821%29.jpg/800px-John_Constable_-_The_Hay_Wain_%281821%29.jpg"
  },
  {
    id: "starry-night",
    titleKo: "별이 빛나는 밤",
    titleEn: "The Starry Night",
    artistKo: "빈센트 반 고흐",
    artistEn: "Vincent van Gogh",
    category: "impression",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/The_Starry_Night.jpg/640px-The_Starry_Night.jpg"
  },
  {
    id: "sunflowers",
    titleKo: "해바라기",
    titleEn: "Sunflowers",
    artistKo: "빈센트 반 고흐",
    artistEn: "Vincent van Gogh",
    category: "impression",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Van_Gogh_-_Vase_with_Fifteen_Sunflowers.jpg/640px-Van_Gogh_-_Vase_with_Fifteen_Sunflowers.jpg"
  },
  {
    id: "impression-sunrise",
    titleKo: "인상, 해돋이",
    titleEn: "Impression, Sunrise",
    artistKo: "클로드 모네",
    artistEn: "Claude Monet",
    category: "impression",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Claude_Monet%2C_Impression%2C_soleil_levant.jpg/800px-Claude_Monet%2C_Impression%2C_soleil_levant.jpg"
  },
  {
    id: "water-lilies",
    titleKo: "수련",
    titleEn: "Water Lilies",
    artistKo: "클로드 모네",
    artistEn: "Claude Monet",
    category: "impression",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Claude_Monet_-_Water_Lilies_-_Google_Art_Project.jpg/800px-Claude_Monet_-_Water_Lilies_-_Google_Art_Project.jpg"
  },
  {
    id: "olympia",
    titleKo: "올랭피아",
    titleEn: "Olympia",
    artistKo: "에두아르 마네",
    artistEn: "Edouard Manet",
    category: "impression",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Edouard_Manet_-_Olympia_-_Google_Art_Project_3.jpg/640px-Edouard_Manet_-_Olympia_-_Google_Art_Project_3.jpg"
  },
  {
    id: "grande-jatte",
    titleKo: "그랑드 자트 섬의 일요일 오후",
    titleEn: "A Sunday Afternoon on the Island of La Grande Jatte",
    artistKo: "조르주 쇠라",
    artistEn: "Georges Seurat",
    category: "impression",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Georges_Seurat_007.jpg/800px-Georges_Seurat_007.jpg"
  },
  {
    id: "american-gothic",
    titleKo: "아메리칸 고딕",
    titleEn: "American Gothic",
    artistKo: "그랜트 우드",
    artistEn: "Grant Wood",
    category: "modern",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Grant_DeVolson_Wood_-_American_Gothic.jpg/640px-Grant_DeVolson_Wood_-_American_Gothic.jpg"
  },
  {
    id: "nighthawks",
    titleKo: "밤을 지새우는 사람들",
    titleEn: "Nighthawks",
    artistKo: "에드워드 호퍼",
    artistEn: "Edward Hopper",
    category: "modern",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Nighthawks_by_Edward_Hopper_1942.jpg/800px-Nighthawks_by_Edward_Hopper_1942.jpg"
  },
  {
    id: "persistence-memory",
    titleKo: "기억의 지속",
    titleEn: "The Persistence of Memory",
    artistKo: "살바도르 달리",
    artistEn: "Salvador Dali",
    category: "modern",
    imageUrl: "https://upload.wikimedia.org/wikipedia/en/d/dd/The_Persistence_of_Memory.jpg"
  },
  {
    id: "scream",
    titleKo: "절규",
    titleEn: "The Scream",
    artistKo: "에드바르 뭉크",
    artistEn: "Edvard Munch",
    category: "modern",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/The_Scream.jpg/640px-The_Scream.jpg"
  },
  {
    id: "guernica",
    titleKo: "게르니카",
    titleEn: "Guernica",
    artistKo: "파블로 피카소",
    artistEn: "Pablo Picasso",
    category: "modern",
    imageUrl: "https://upload.wikimedia.org/wikipedia/en/7/74/PicassoGuernica.jpg"
  },
  {
    id: "les-demoiselles",
    titleKo: "아비뇽의 처녀들",
    titleEn: "Les Demoiselles d'Avignon",
    artistKo: "파블로 피카소",
    artistEn: "Pablo Picasso",
    category: "modern",
    imageUrl: "https://upload.wikimedia.org/wikipedia/en/d/d4/Les_Demoiselles_d%27Avignon.jpg"
  },
  {
    id: "two-fridas",
    titleKo: "두 명의 프리다",
    titleEn: "The Two Fridas",
    artistKo: "프리다 칼로",
    artistEn: "Frida Kahlo",
    category: "modern",
    imageUrl: "https://upload.wikimedia.org/wikipedia/en/1/1e/Frida_Kahlo_%28Las_dos_Fridas%29.jpg"
  },
  {
    id: "son-of-man",
    titleKo: "인간의 아들",
    titleEn: "The Son of Man",
    artistKo: "르네 마그리트",
    artistEn: "Rene Magritte",
    category: "modern",
    imageUrl: "https://upload.wikimedia.org/wikipedia/en/e/e5/Magritte_TheSonOfMan.jpg"
  },
  {
    id: "great-wave",
    titleKo: "가나가와 앞바다의 큰 파도",
    titleEn: "The Great Wave off Kanagawa",
    artistKo: "가쓰시카 호쿠사이",
    artistEn: "Katsushika Hokusai",
    category: "pop",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/The_Great_Wave_off_Kanagawa.jpg/640px-The_Great_Wave_off_Kanagawa.jpg"
  },
  {
    id: "campbells-soup",
    titleKo: "캠벨 수프 캔",
    titleEn: "Campbell's Soup Cans",
    artistKo: "앤디 워홀",
    artistEn: "Andy Warhol",
    category: "pop",
    imageUrl: "https://upload.wikimedia.org/wikipedia/en/1/12/Campbell%27s_Soup_Cans_MOMA.jpg"
  },
  {
    id: "marilyn-diptych",
    titleKo: "마릴린 디프티크",
    titleEn: "Marilyn Diptych",
    artistKo: "앤디 워홀",
    artistEn: "Andy Warhol",
    category: "pop",
    imageUrl: "https://upload.wikimedia.org/wikipedia/en/e/e0/Marilyn_Diptych.jpg"
  },
  {
    id: "whaam",
    titleKo: "와암!",
    titleEn: "Whaam!",
    artistKo: "로이 리히텐슈타인",
    artistEn: "Roy Lichtenstein",
    category: "pop",
    imageUrl: "https://upload.wikimedia.org/wikipedia/en/a/a8/Whaam.jpg"
  },
  {
    id: "drowning-girl",
    titleKo: "물에 빠진 소녀",
    titleEn: "Drowning Girl",
    artistKo: "로이 리히텐슈타인",
    artistEn: "Roy Lichtenstein",
    category: "pop",
    imageUrl: "https://upload.wikimedia.org/wikipedia/en/6/64/Lichtenstein_-_Drowning_Girl.jpg"
  }
];

const CHARACTERS = [
  {
    id: "no-change",
    label: "변경하지 않음 (원본 인물 유지)",
    series: "원본 유지",
    character: "원작 인물",
    subjectStyle: "원작의 인물 비율, 포즈, 표정 디테일 유지",
    colorLighting: "원작 고유의 색채와 명암 구조 보존",
    texture: "원작 질감과 붓터치 흐름 유지",
    mood: "원작의 감정 톤과 내러티브 유지",
    symbolism: "원작 상징 요소를 그대로 사용"
  },
  {
    id: "tanjiro",
    label: "귀멸의 칼날 - 탄지로",
    series: "귀멸의 칼날",
    character: "탄지로",
    subjectStyle: "검을 든 단호한 주인공 실루엣, 역동적인 동세",
    colorLighting: "청록과 짙은 남색 중심, 날카로운 대비광",
    texture: "선명한 애니메이션 라인과 셀 셰이딩 질감",
    mood: "의지와 긴장감이 공존하는 영웅 서사",
    symbolism: "호흡의 궤적을 암시하는 유려한 곡선"
  },
  {
    id: "nezuko",
    label: "귀멸의 칼날 - 네즈코",
    series: "귀멸의 칼날",
    character: "네즈코",
    subjectStyle: "강인함과 섬세함이 공존하는 인물 표현",
    colorLighting: "분홍과 흑색 대비, 저조도 림라이트",
    texture: "부드러운 애니 셀 셰이딩과 얇은 라인",
    mood: "보호 본능과 긴장감이 동시에 느껴지는 분위기",
    symbolism: "대나무 장식과 꽃무늬 패턴의 상징"
  },
  {
    id: "doraemon",
    label: "도라에몽 - 도라에몽",
    series: "도라에몽",
    character: "도라에몽",
    subjectStyle: "둥근 형태와 친근한 표정의 아이코닉 캐릭터",
    colorLighting: "밝은 코발트 블루와 화이트 하이라이트",
    texture: "클린 라인, 플랫 셀 셰이딩",
    mood: "따뜻하고 유쾌한 가족형 모험 분위기",
    symbolism: "미래 도구를 암시하는 포켓 디테일"
  },
  {
    id: "nobita",
    label: "도라에몽 - 노비타",
    series: "도라에몽",
    character: "노비타",
    subjectStyle: "동그랗고 내성적인 아이의 표정과 동작 포즈",
    colorLighting: "부드러운 주광과 라이트 톤",
    texture: "얇은 라인과 미니멀 셀 쉐이딩",
    mood: "순수하고 애정 어린 성장 서사",
    symbolism: "거품 목걸이, 초콜릿, 작은 발명품"
  },
  {
    id: "shizuka",
    label: "도라에몽 - 시즈카",
    series: "도라에몽",
    character: "시즈카",
    subjectStyle: "밝은 표정과 포근한 조명 속 단정한 캐릭터 실루엣",
    colorLighting: "파스텔 톤과 부드러운 반사광",
    texture: "클린 라인과 자연스러운 음영",
    mood: "청초하고 따뜻한 일상감",
    symbolism: "교실 풍경, 머리끈, 리본"
  },
  {
    id: "gon",
    label: "헌터헌터 - 곤",
    series: "헌터헌터",
    character: "곤",
    subjectStyle: "소년 주인공의 전진하는 포즈와 생동감",
    colorLighting: "그린 포인트와 자연광 중심",
    texture: "선명한 라인과 에너지 스트로크",
    mood: "모험심과 순수한 집념",
    symbolism: "자연/성장 에너지를 상징하는 바람과 잎"
  },
  {
    id: "killua",
    label: "헌터헌터 - 키르아",
    series: "헌터헌터",
    character: "키르아",
    subjectStyle: "빠른 속도감을 가진 날렵한 캐릭터 포즈",
    colorLighting: "차가운 블루-화이트 전기광",
    texture: "샤프한 윤곽선과 번개 효과",
    mood: "냉정함과 우정 사이의 긴장",
    symbolism: "전기 스파크와 파편형 빛"
  },
  {
    id: "hisoka",
    label: "헌터헌터 - 히소카",
    series: "헌터헌터",
    character: "히소카",
    subjectStyle: "우아하지만 위협적인 시선 중심의 캐릭터 구성",
    colorLighting: "자주색과 어두운 남색 조합",
    texture: "강한 윤곽선과 정밀한 음영",
    mood: "불안하고 도발적인 긴장감",
    symbolism: "마스크, 플라즈마형 빛, 붉은 점"
  },
  {
    id: "goku",
    label: "드래곤볼 - 손오공",
    series: "드래곤볼",
    character: "손오공",
    subjectStyle: "강한 근육 구조와 상승하는 액션 포즈",
    colorLighting: "오렌지-블루 대비와 강한 오라 광",
    texture: "굵은 라인, 고대비 셀 셰이딩",
    mood: "압도적 자신감과 전투 직전의 집중",
    symbolism: "기(氣) 에너지 오라와 잔광"
  },
  {
    id: "vegeta",
    label: "드래곤볼 - 베지터",
    series: "드래곤볼",
    character: "베지터",
    subjectStyle: "자존심 강한 전사의 직립 포즈",
    colorLighting: "딥 블루와 퍼플 음영, 강한 림라이트",
    texture: "강한 외곽선과 날카로운 음영 분할",
    mood: "긴장감 높은 카리스마",
    symbolism: "왕족 문양과 파동형 오라"
  },
  {
    id: "gohan",
    label: "드래곤볼 - 고반",
    series: "드래곤볼",
    character: "고반",
    subjectStyle: "젊은 전사의 성장 중심 액션 구성",
    colorLighting: "파랑-금색 대조의 집중광",
    texture: "강한 선과 선명한 스파크 텍스처",
    mood: "자기 극복과 성장의 열정",
    symbolism: "초승달형 오라와 도시 파열 광"
  },
  {
    id: "luffy",
    label: "원피스 - 루피",
    series: "원피스",
    character: "루피",
    subjectStyle: "팔을 넓게 벌린 자유로운 해적 리더 포즈",
    colorLighting: "따뜻한 황토색과 하늘빛 대비",
    texture: "굵은 아웃라인과 부드러운 음영",
    mood: "명랑함과 도전 의지",
    symbolism: "밀짚모자, 해적선의 바다 바람"
  },
  {
    id: "zoro",
    label: "원피스 - 조로",
    series: "원피스",
    character: "조로",
    subjectStyle: "3칼 사용자의 단단한 전방 돌파 포즈",
    colorLighting: "녹색 잔광과 측면 하이라이트",
    texture: "거친 선과 강한 근육 쉐이딩",
    mood: "침착하지만 공격적인 집중",
    symbolism: "검집, 사브리나 잎사귀 질감"
  },
  {
    id: "nami",
    label: "원피스 - 나오미",
    series: "원피스",
    character: "나미",
    subjectStyle: "민첩하고 정확한 동작의 여성 지도자 포즈",
    colorLighting: "따뜻한 오렌지와 청록 대비",
    texture: "가벼운 셀 쉐이딩과 정교한 액세서리 표현",
    mood: "모험심과 유쾌한 리더십",
    symbolism: "나침반, 지도, 바람 장식"
  },
  {
    id: "nakamoto",
    label: "나루토 - 나루토",
    series: "나루토",
    character: "나루토",
    subjectStyle: "전면 대각 포즈의 힘 있는 동작",
    colorLighting: "주황과 남색의 강한 대조",
    texture: "강한 선, 전투 이펙트 라인",
    mood: "열정적이고 끈질긴 의지",
    symbolism: "주홍 문양, 차가운 바람 선"
  },
  {
    id: "sasuke",
    label: "나루토 - 사스케",
    series: "나루토",
    character: "사스케",
    subjectStyle: "차가운 카리스마 중심의 역동 포즈",
    colorLighting: "네이비와 보라의 냉조",
    texture: "예리한 윤곽선과 검은 림 광",
    mood: "복수와 절제의 긴장",
    symbolism: "번개 문양, 차가운 달빛 반사"
  },
  {
    id: "saitama",
    label: "원펀맨 - 사이타마",
    series: "원펀맨",
    character: "사이타마",
    subjectStyle: "적당히 과장된 체형, 심플한 히어로 정면 포즈",
    colorLighting: "무채색 배경 대비의 선명 광원",
    texture: "단순한 셀 라인과 깔끔한 명암",
    mood: "무심함과 압도적 여유",
    symbolism: "한 방의 임팩트 잔광"
  },
  {
    id: "genos",
    label: "원펀맨 - 제노스",
    series: "원펀맨",
    character: "제노스",
    subjectStyle: "사이보그 특성의 긴장감 있는 전투 포즈",
    colorLighting: "차갑고 선명한 청색 금속광",
    texture: "기계적 경계선과 반사광",
    mood: "전투 집중력과 헌신",
    symbolism: "회로 패턴, 에너지 플럭스"
  },
  {
    id: "conan",
    label: "명탐정 코난 - 코난",
    series: "명탐정 코난",
    character: "코난",
    subjectStyle: "작은 체구의 탐정 실루엣과 명확한 표정",
    colorLighting: "차가운 야간광과 포인트 스팟 조명",
    texture: "정돈된 라인아트와 깔끔한 셀 셰이딩",
    mood: "추리와 미스터리 중심의 긴장감",
    symbolism: "돋보기, 시계형 장치, 단서 조각"
  },
  {
    id: "haibara",
    label: "명탐정 코난 - 하이바라",
    series: "명탐정 코난",
    character: "하이바라",
    subjectStyle: "절제된 표정과 지적인 인물 표현",
    colorLighting: "저채도 블루그레이 톤",
    texture: "차분한 라인과 깨끗한 평면 음영",
    mood: "차분하지만 숨겨진 불안감",
    symbolism: "실험실 유리 반사와 데이터 조각"
  },
  {
    id: "itadori",
    label: "주술회전 - 이타도리",
    series: "주술회전",
    character: "이타도리",
    subjectStyle: "활동적이면서도 동정심이 느껴지는 청년 실루엣",
    colorLighting: "따뜻한 오렌지빛과 짙은 청색 보조광",
    texture: "강한 선과 에너지 파장 무늬",
    mood: "동정적 결의와 긴박한 성장",
    symbolism: "주먹의 혈흔, 저주 문양"
  },
  {
    id: "gojo",
    label: "주술회전 - 고죠",
    series: "주술회전",
    character: "고죠",
    subjectStyle: "카리스마 넘치는 광선 중심 슈퍼노바 포즈",
    colorLighting: "하이라이트 중심의 하얀 블루 광",
    texture: "정교한 라인과 반짝이는 오라",
    mood: "쾌활하지만 통제된 위압감",
    symbolism: "무한한 검은점, 제로 마스크"
  },
  {
    id: "itadori2",
    label: "주술회전 - 나츠무라",
    series: "주술회전",
    character: "나츠무라",
    subjectStyle: "짧고 강한 동작의 근접전 태도",
    colorLighting: "차가운 청색과 연한 붉은 강조광",
    texture: "거친 라인과 힘 있는 쉐이딩",
    mood: "직설적 전투 본능",
    symbolism: "검은 망토, 전투 연기"
  },
  {
    id: "rengoku",
    label: "귀멸의 칼날 - 렌고쿠",
    series: "귀멸의 칼날",
    character: "렌고쿠",
    subjectStyle: "화염 호흡의 강인한 선장면과 정면 인상",
    colorLighting: "뜨겁고 선명한 화염 오렌지 대비",
    texture: "강한 라이트·섀도우 구분의 셀 셰이딩",
    mood: "정의감과 희생의 긴장감",
    symbolism: "불꽃 분사와 기수의 검선"
  },
  {
    id: "mitsuri",
    label: "귀멸의 칼날 - 미츠리",
    series: "귀멸의 칼날",
    character: "미츠리",
    subjectStyle: "부드러운 표정과 날렵한 역동 포즈",
    colorLighting: "분홍과 라벤더 톤의 따뜻한 광",
    texture: "유려한 곡선 라인과 정교한 얼굴 음영",
    mood: "상냥함과 결기",
    symbolism: "꽃잎 디테일과 붉은 장식"
  },
  {
    id: "shikamaru",
    label: "나루토 - 시카마루",
    series: "나루토",
    character: "시카마루",
    subjectStyle: "치밀한 전략형 포즈와 기습 대비",
    colorLighting: "짙은 네이비와 차가운 푸른 그림자",
    texture: "조밀한 윤곽선과 잔잔한 글로우",
    mood: "냉정한 긴장과 결심",
    symbolism: "풍차 닐과 번개 문양"
  },
  {
    id: "naruto2",
    label: "나루토 - 이타치",
    series: "나루토",
    character: "이타치",
    subjectStyle: "어둡게 내려앉는 정적 속 카리스마 포즈",
    colorLighting: "오렌지 포인트와 깊은 밤하늘 톤",
    texture: "긴장감 있는 선명한 엣지와 안개",
    mood: "협동과 성장의 열정",
    symbolism: "의학 붕대를 닮은 장식"
  },
  {
    id: "gohan2",
    label: "드래곤볼 - 바마",
    series: "드래곤볼",
    character: "바마",
    subjectStyle: "고요한 서포트형 캐릭터의 시선 중심 구성",
    colorLighting: "차분한 파랑에서 시작되는 청량 감",
    texture: "섬세한 얼굴톤과 얇은 아웃라인",
    mood: "위트 있는 안정감",
    symbolism: "우주 왕국 장식과 파도 패턴"
  },
  {
    id: "piccolo",
    label: "드래곤볼 - 피콜로",
    series: "드래곤볼",
    character: "피콜로",
    subjectStyle: "긴장된 사념력 자세와 하향 조명",
    colorLighting: "녹색과 보라의 극적 대비",
    texture: "강한 외곽선과 에너지 파장",
    mood: "냉정하지만 전사적 결단",
    symbolism: "오라 구슬과 기둥형 역광"
  },
  {
    id: "luffy2",
    label: "원피스 - 샹크스",
    series: "원피스",
    character: "샹크스",
    subjectStyle: "카리스마 있는 한 컷 정면 구성",
    colorLighting: "강한 햇빛과 붉은 배경 음영",
    texture: "얇은 라인 대비와 거친 바람 효과",
    mood: "평온하지만 전투를 앞두는 긴장",
    symbolism: "바다의 파도, 해적 깃발"
  },
  {
    id: "robin",
    label: "원피스 - 로빈",
    series: "원피스",
    character: "로빈",
    subjectStyle: "우아한 포즈와 지식형 캐릭터 감도",
    colorLighting: "따뜻한 스포트라이트와 그늘",
    texture: "부드러운 셀 쉐이딩과 차분한 라인",
    mood: "차분한 몰입과 카리스마",
    symbolism: "고대 유물과 기록 조각"
  },
  {
    id: "conan2",
    label: "명탐정 코난 - 미야가와",
    series: "명탐정 코난",
    character: "미야가와",
    subjectStyle: "조직원다운 절제된 긴장 포즈",
    colorLighting: "은은한 노을빛 조도",
    texture: "깔끔한 라인과 정교한 얼굴 디테일",
    mood: "음모와 추리의 경계선 긴장",
    symbolism: "명함, 명찰, 교차되는 실루엣"
  },
  {
    id: "higurashi",
    label: "진격의 거인 - 에렌",
    series: "진격의 거인",
    character: "에렌",
    subjectStyle: "거대한 분노와 전진 액션 포즈",
    colorLighting: "황토빛 톤과 찢기는 빛선",
    texture: "뚜렷한 라인과 거친 질감",
    mood: "목표 집착과 절박한 결의",
    symbolism: "벽과 파쇄된 창, 강렬한 실루엣"
  },
  {
    id: "mikasa2",
    label: "진격의 거인 - 미카사",
    series: "진격의 거인",
    character: "미카사",
    subjectStyle: "방어형 전투 동작의 긴장감 있는 구도",
    colorLighting: "차가운 청색과 은회색 반사광",
    texture: "예리한 윤곽선과 장비 광택",
    mood: "보호 본능이 깃든 결연함",
    symbolism: "기어는 망토와 전술 가면"
  },
  {
    id: "saitama2",
    label: "원펀맨 - 사이타마(강조)",
    series: "원펀맨",
    character: "사이타마",
    subjectStyle: "정지 포즈의 압도적 정면 구도",
    colorLighting: "무채색 배경의 하드 콘트라스트",
    texture: "매끈한 셀 라인과 강한 음영 분할",
    mood: "무심한 여유와 폭발 직전의 대비",
    symbolism: "심플한 표정, 단색 배경 광채"
  }
];

const BACKGROUNDS = [
  {
    id: "no-change",
    label: "변경하지 않음 (원본 배경 유지)",
    style: "원작 배경 요소와 원근 레이어를 유지",
    mood: "원작 분위기 유지",
    lighting: "원작 광원 구조 유지",
    symbolism: "원작 배경 상징을 유지"
  },
  {
    id: "auto",
    label: "자동 추천 (캐릭터 맞춤)",
    style: "자동",
    mood: "선택한 캐릭터에 맞춰 최적화",
    lighting: "캐릭터 톤 기반 자동 조정",
    symbolism: "캐릭터 세계관 기반 자동 반영"
  },
  {
    id: "neo-city-night",
    label: "네온 도시의 밤",
    style: "비 오는 네온 골목, 반사광이 많은 야간 도시",
    mood: "도시적 긴장과 속도감",
    lighting: "청색/자홍 네온 대비광",
    symbolism: "간판 잔광, 젖은 노면 반사"
  },
  {
    id: "ancient-temple",
    label: "고대 신전",
    style: "고대 석조 신전과 거대한 기둥, 먼지 낀 빛줄기",
    mood: "장엄함과 신비감",
    lighting: "상부 천창에서 내려오는 금빛 광원",
    symbolism: "문양, 제단, 부서진 석상"
  },
  {
    id: "futuristic-lab",
    label: "미래 연구소",
    style: "유리 벽과 홀로그램이 있는 하이테크 실험실",
    mood: "정밀함과 긴장",
    lighting: "차가운 화이트-블루 간접광",
    symbolism: "데이터 패널, 실험 장치"
  },
  {
    id: "forest-mist",
    label: "안개 낀 숲",
    style: "습한 수림과 은은한 안개가 흐르는 숲길",
    mood: "고요하지만 긴장된 자연 서사",
    lighting: "확산된 자연광과 틈새 역광",
    symbolism: "바람, 낙엽, 흐릿한 실루엣"
  },
  {
    id: "classic-museum",
    label: "클래식 미술관",
    style: "대리석 바닥과 높은 천장을 가진 고전 미술관",
    mood: "품격과 절제",
    lighting: "부드러운 천장 확산광",
    symbolism: "액자, 조각상, 장식 몰딩"
  },
  {
    id: "space-station",
    label: "우주 정거장",
    style: "거대한 창 너머 별이 보이는 무중력 스테이션",
    mood: "미래적 경이감",
    lighting: "차가운 금속 반사광과 외부 별빛",
    symbolism: "원형 도킹 게이트, HUD 그래픽"
  },
  {
    id: "edo-street",
    label: "에도 시대 거리",
    style: "전통 목조 건물과 등불이 이어진 일본 거리",
    mood: "고전적 정취와 일상의 생동감",
    lighting: "따뜻한 등불과 저녁 하늘의 잔광",
    symbolism: "종이등, 목재 표지판, 골목 실루엣"
  },
  {
    id: "royal-palace",
    label: "왕실 궁전 홀",
    style: "화려한 샹들리에와 대리석 기둥의 궁전 내부",
    mood: "권위와 장엄함",
    lighting: "금빛 샹들리에 조명과 바닥 반사",
    symbolism: "왕좌, 휘장, 문장 패턴"
  },
  {
    id: "comic-city-day",
    label: "코믹풍 대도시 낮",
    style: "만화적 과장 원근의 도심 거리",
    mood: "경쾌하고 역동적인 히어로 무드",
    lighting: "맑은 주광과 강한 명암 분할",
    symbolism: "속도선, 팝아트 도트, 간판 그래픽"
  },
  {
    id: "undersea-ruins",
    label: "심해 유적",
    style: "바닷속 고대 유적과 부유 입자",
    mood: "신비롭고 몽환적인 침잠감",
    lighting: "청록 수중 산란광",
    symbolism: "부서진 석상, 기포, 수중 식생"
  }
];

const AUTO_BACKGROUND_BY_SERIES = {
  "귀멸의 칼날": "forest-mist",
  "도라에몽": "comic-city-day",
  "헌터헌터": "ancient-temple",
  "드래곤볼": "space-station",
  "명탐정 코난": "neo-city-night",
  "원피스": "comic-city-day",
  "나루토": "forest-mist",
  "원펀맨": "comic-city-day",
  "주술회전": "space-station",
  "진격의 거인": "ancient-temple"
};

const AUTO_BACKGROUND_BY_CATEGORY = {
  classic: "classic-museum",
  impression: "forest-mist",
  modern: "futuristic-lab",
  pop: "comic-city-day"
};

const QUALITY_DIRECTIVE =
  "Nanobanana Pro 최고 해상도, ultra high resolution, 8K quality, extreme detail, high fidelity rendering";
const GENERATED_IMAGE_FILENAME = "nanobanana-generated.png";

const state = {
  selectedCategory: "all",
  latestCopyPrompt: ""
};

const MANUAL_CHARACTER_ID = "manual-character";
const MANUAL_BACKGROUND_ID = "manual-background";


const ui = {
  form: document.getElementById("prompt-form"),
  languageSelect: document.getElementById("language"),
  masterpieceSelect: document.getElementById("masterpiece-select"),
  masterpieceTabs: document.getElementById("masterpiece-tabs"),
  masterpieceTrack: document.getElementById("masterpiece-track"),
  masterpiecePrev: document.getElementById("masterpiece-prev"),
  masterpieceNext: document.getElementById("masterpiece-next"),
  masterpieceCurrent: document.getElementById("masterpiece-current"),
  characterSelect: document.getElementById("character-select"),
  characterCustomInput: document.getElementById("character-custom"),
  characterSuggestionList: document.getElementById("character-suggestions"),
  backgroundSelect: document.getElementById("background-select"),
  backgroundCustomInput: document.getElementById("background-custom"),
  backgroundSuggestionList: document.getElementById("background-suggestions"),
  reinterpretationInput: document.getElementById("reinterpretation"),
  reinterpretationHelp: document.getElementById("reinterpretation-help"),
  aspectRatioSelect: document.getElementById("aspect-ratio"),
  autoPlanOutput: document.getElementById("auto-plan"),
  randomizeButton: document.getElementById("randomize-btn"),
  generateButton: document.getElementById("generate-btn"),
  statusText: document.getElementById("status-text"),
  rawOutput: document.getElementById("raw-output"),
  outputSection: document.getElementById("output-section"),
  generateImageRawButton: document.getElementById("generate-image-raw-btn"),
  copyRawButton: document.getElementById("copy-raw-btn"),
  generatedImageSection: document.getElementById("generated-image-section"),
  generatedImageStatus: document.getElementById("generated-image-status"),
  generatedImage: document.getElementById("generated-image"),
  downloadImageButton: document.getElementById("download-image-btn"),
  endpointBadge: document.getElementById("endpoint-badge")
};

function uniqueValues(values) {
  return [...new Set(values.filter(Boolean))];
}

function buildArtworkImageCandidates(work) {
  const primary = String(work.imageUrl || "").trim();
  const backups = Array.isArray(work.backupImageUrls) ? work.backupImageUrls : [];

  const localVariants = [];
  if (primary.startsWith("./assets/artworks/")) {
    const base = primary.replace(/\.(jpg|jpeg|png|webp|svg)$/i, "");
    localVariants.push(`${base}.jpg`, `${base}.jpeg`, `${base}.png`, `${base}.webp`, `${base}.svg`);
  }

  return uniqueValues([primary, ...backups, ...localVariants]);
}

function buildArtworkImageSources(work) {
  return buildArtworkImageCandidates(work);
}

function fitArtworkImageFrame(imageElement, frameInner) {
  const containerHeight = frameInner.clientHeight || 380;
  const naturalWidth = Number(imageElement.naturalWidth || 0);
  const naturalHeight = Number(imageElement.naturalHeight || 0);

  if (!frameInner || !naturalWidth || !naturalHeight) {
    frameInner.style.width = "320px";
    return;
  }

  const ratio = naturalWidth / naturalHeight;
  const width = Math.round(Math.max(220, Math.min(520, containerHeight * ratio)));
  frameInner.style.width = `${width}px`;
}

const IMAGE_ATTEMPT_TIMEOUT_MS = 18000;

function isRemoteImageSource(src) {
  return /^https?:\/\//i.test(String(src || "").trim());
}

function attachImageSourceFallback(imageElement, sources, handlers = {}) {
  const callbacks = typeof handlers === "function" ? { onAllFailed: handlers } : handlers;
  const queue = uniqueValues(sources);
  let index = 0;
  let attemptTimeout = null;

  const clearAttemptTimeout = () => {
    if (attemptTimeout) {
      clearTimeout(attemptTimeout);
      attemptTimeout = null;
    }
  };

  const notifyAllFailed = () => {
    clearAttemptTimeout();
    callbacks.onAllFailed?.();
  };

  const scheduleAttemptTimeout = (src) => {
    clearAttemptTimeout();
    if (!isRemoteImageSource(src)) {
      return;
    }
    attemptTimeout = setTimeout(() => {
      callbacks.onAttemptTimeout?.({ attempt: index, total: queue.length });
      tryNext();
    }, IMAGE_ATTEMPT_TIMEOUT_MS);
  };

  if (queue.length === 0) {
    notifyAllFailed();
    return {
      retry: () => {
        notifyAllFailed();
      }
    };
  }

  const tryNext = () => {
    if (index >= queue.length) {
      notifyAllFailed();
      return;
    }

    const attempt = index + 1;
    const nextSrc = queue[index];
    index += 1;
    callbacks.onAttempt?.({ attempt, total: queue.length, src: nextSrc });
    imageElement.src = nextSrc;
    scheduleAttemptTimeout(nextSrc);
  };

  const onError = () => {
    clearAttemptTimeout();
    callbacks.onAttemptError?.({ attempt: index, total: queue.length });
    tryNext();
  };

  const onLoad = () => {
    clearAttemptTimeout();
    callbacks.onAttemptSuccess?.({ attempt: index, total: queue.length });
  };

  const start = () => {
    clearAttemptTimeout();
    index = 0;
    callbacks.onStart?.({ total: queue.length });
    imageElement.removeAttribute("src");
    tryNext();
  };

  imageElement.addEventListener("error", onError);
  imageElement.addEventListener("load", onLoad);
  start();

  return {
    retry: () => {
      start();
    }
  };
}

function appendOption(select, value, label) {
  const option = document.createElement("option");
  option.value = value;
  option.textContent = label;
  select.append(option);
}

function appendDataListOption(datalist, value, label) {
  const option = document.createElement("option");
  option.value = value;
  option.textContent = label;
  datalist.append(option);
}

function setStatus(message, tone = "neutral") {
  ui.statusText.textContent = message;
  if (tone === "error") {
    ui.statusText.style.color = "#b91c1c";
    return;
  }
  if (tone === "success") {
    ui.statusText.style.color = "#0f766e";
    return;
  }
  ui.statusText.style.color = "#4b5563";
}

function setInlineStatus(element, message, tone = "neutral") {
  if (!element) {
    return;
  }

  element.textContent = message;
  if (tone === "error") {
    element.style.color = "#b91c1c";
    return;
  }
  if (tone === "success") {
    element.style.color = "#0f766e";
    return;
  }
  element.style.color = "#4b5563";
}

function setGeneratedImageStatus(message, tone = "neutral") {
  setInlineStatus(ui.generatedImageStatus, message, tone);
}

function setBusy(isBusy) {
  ui.generateButton.disabled = isBusy;
  ui.generateButton.textContent = isBusy ? "생성 중..." : "프롬프트 생성";
}

function setImageBusy(isBusy) {
  const buttons = [ui.generateImageRawButton].filter(Boolean);
  if (buttons.length === 0) {
    return;
  }

  buttons.forEach((button) => {
    button.disabled = isBusy;
  });

  if (ui.generateImageRawButton) {
    ui.generateImageRawButton.textContent = isBusy ? "생성 중..." : "프롬프트 이미지 생성";
  }
}

function getReinterpretationGuide(value) {
  const level = String(value || "preserve");
  if (level === "balanced") {
    return "2단계: 균형 재해석. 원작 구도는 유지하고 캐릭터/배경 변환을 분명하게 반영합니다.";
  }
  if (level === "bold") {
    return "3단계: 강한 재해석. 원작은 뼈대만 유지하고 캐릭터/배경 스타일을 우선 적용합니다.";
  }
  return "1단계: 원작 중심. 원작 비중을 높게 유지하고 캐릭터/배경 전환은 절제합니다.";
}

function updateReinterpretationUI(value = ui.reinterpretationInput.value) {
  if (ui.reinterpretationHelp) {
    ui.reinterpretationHelp.textContent = getReinterpretationGuide(value);
  }
}

function getReinterpretationProfile(level, language = "en") {
  const mode = String(level || "preserve");
  const isEnglish = language === "en";

  if (mode === "balanced") {
    return {
      mode,
      label: isEnglish ? "Balanced reinterpretation" : "균형 재해석",
      guide: isEnglish
        ? "Preserve source composition while clearly applying selected character and background conversions."
        : "원작 구도를 유지하면서 선택한 캐릭터/배경 변환을 명확히 반영합니다.",
      weightClause: isEnglish
        ? "transformation weight: original 55%, reinterpretation 45%"
        : "변환 비중: 원작 55%, 재해석 45%",
      priorityClause: isEnglish
        ? "priority rule: keep composition skeleton, but update subject identity and environment style decisively"
        : "우선순위: 구도 골격은 유지하되 인물 정체성과 배경 스타일은 확실히 전환",
      directive: isEnglish
        ? "Maintain core composition and camera flow, but visibly transform character design, environment styling, and narrative mood."
        : "핵심 구도와 시선 흐름은 유지하되, 캐릭터 디자인·배경 연출·서사 분위기는 눈에 띄게 전환합니다."
    };
  }

  if (mode === "bold") {
    return {
      mode,
      label: isEnglish ? "Bold reinterpretation" : "강한 재해석",
      guide: isEnglish
        ? "Keep only the source composition DNA and prioritize character/background style conversion."
        : "원작의 구도 DNA만 유지하고 캐릭터/배경 스타일 전환을 우선 적용합니다.",
      weightClause: isEnglish
        ? "transformation weight: original 25%, reinterpretation 75%"
        : "변환 비중: 원작 25%, 재해석 75%",
      priorityClause: isEnglish
        ? "priority rule: selected character identity and background worldbuilding override original stylistic details"
        : "우선순위: 선택한 캐릭터 정체성과 배경 세계관이 원작 세부 화풍보다 우선",
      directive: isEnglish
        ? "Retain only structural composition anchors from the source and strongly replace styling, color treatment, texture language, and atmosphere with the selected reinterpretation."
        : "원작에서는 구조적 구도 앵커만 남기고, 스타일·색채 처리·텍스처 언어·분위기를 선택한 재해석 방향으로 강하게 대체합니다."
    };
  }

  return {
    mode: "preserve",
    label: isEnglish ? "Source-focused" : "원작 중심",
    guide: isEnglish
      ? "Keep the source painting dominant and apply only restrained character/background conversion."
      : "원작을 중심으로 유지하고 캐릭터/배경 변환은 절제해 반영합니다.",
    weightClause: isEnglish
      ? "transformation weight: original 85%, reinterpretation 15%"
      : "변환 비중: 원작 85%, 재해석 15%",
    priorityClause: isEnglish
      ? "priority rule: preserve original subject placement, depth, and palette hierarchy first"
      : "우선순위: 원작 인물 배치·원근·색채 위계를 최우선 보존",
    directive: isEnglish
      ? "Preserve composition, subject placement, and palette logic from the source; apply reinterpretation only as controlled accents."
      : "원작의 구도·인물 배치·색채 논리를 보존하고, 재해석은 보조적인 강조 요소로 제한합니다."
  };
}

function buildInstruction({ language, input }) {
  const languageHint = language === "en" ? "English" : "Korean";
  const systemInstruction = [
    "You are Nanobanana Prompt Architect.",
    "You are a senior art director who remixes classical paintings into character-centric image prompts.",
    "The user now provides simple controls: masterpiece, character conversion, and background conversion.",
    "Preserve the source painting's recognizable composition DNA while transforming subject and background.",
    "If qualityDirective exists in render_preferences, include it verbatim in FINAL_PROMPT.",
    "FINAL_PROMPT must explicitly reflect source painting, character conversion, background conversion, and aspect ratio from selection_lock.",
    "Use precise visual language for image generation models.",
    "Avoid vague wording. Keep output easy for beginners.",
    `Write every section in ${languageHint}.`,
    "Output exactly with this structure:",
    "[FINAL_PROMPT]",
    "one single line only, copy-ready image prompt, no line breaks",
    "",
    "[COMPONENT_MAP]",
    "- Source DNA: ...",
    "- Subject reinterpretation: ...",
    "- Composition and camera: ...",
    "- Color and lighting: ...",
    "- Texture and brushwork: ...",
    "- Mood and narrative: ...",
    "- Constraints: ...",
    "",
    "[QUICK_VARIANTS]",
    "1) Stable: conservative, source-faithful variant",
    "2) Balanced: middle-ground variant",
    "3) Experimental: bold reinterpretation variant"
  ].join("\n");

  const userInstruction = [
    "Design a high-quality remix prompt from this JSON.",
    "Prioritize a single-line image-generation prompt with strong visual clarity.",
    "Focus on character conversion and background conversion directives from user input.",
    "Use beginner-friendly but specific wording.",
    "Honor qualityDirective exactly when provided.",
    "Always align FINAL_PROMPT with selection_lock values. Never replace or ignore them.",
    "Always output exactly three quick variants with labels Stable, Balanced, Experimental.",
    "If a field is empty, make a reasonable creative choice.",
    "Respect the ratio exactly as written.",
    "JSON:",
    JSON.stringify({
      source: {
        masterpiece: input?.masterpiece || "",
        artist: input?.artist || "",
        customSubject: input?.customSubject || ""
      },
      user_preferences: {
        subjectStyle: input?.subjectStyle || "",
        backgroundStyle: input?.backgroundStyle || "",
        colorLighting: input?.colorLighting || "",
        textureBrushwork: input?.textureBrushwork || "",
        moodStory: input?.moodStory || "",
        compositionCamera: input?.compositionCamera || "",
        symbolism: input?.symbolism || "",
        negatives: input?.negatives || "",
        palette: input?.palette || "",
        compositionTemplate: input?.compositionTemplate || "",
        symbolismLibrary: input?.symbolismLibrary || "",
        moodMatrix: input?.moodMatrix || "",
        medium: input?.medium || "",
        preserveElements: Array.isArray(input?.preserveElements) ? input.preserveElements : []
      },
      render_preferences: {
        reinterpretationLevel: input?.reinterpretationLevel,
        aspectRatio: input?.aspectRatio || "",
        language: languageHint,
        qualityDirective: input?.qualityDirective || ""
      },
      selection_lock: {
        sourcePainting: input?.masterpiece || "",
        artist: input?.artist || "",
        characterConversion: input?.customSubject || "",
        backgroundConversion: input?.backgroundStyle || "",
        aspectRatio: input?.aspectRatio || ""
      }
    }, null, 2)
  ].join("\n");

  return { systemInstruction, userInstruction };
}

function findMasterpieceById(id) {
  return MASTERPIECES.find((item) => item.id === id) || MASTERPIECES[0];
}

function findCharacterById(id) {
  return CHARACTERS.find((item) => item.id === id) || CHARACTERS[0];
}

function getManualCharacter() {
  return String(ui.characterCustomInput?.value || "").trim();
}

function getManualBackground() {
  return String(ui.backgroundCustomInput?.value || "").trim();
}

function buildManualCharacterProfile(name) {
  return {
    id: MANUAL_CHARACTER_ID,
    label: `사용자 입력: ${name}`,
    series: "사용자 지정 캐릭터",
    character: name,
    subjectStyle: `${name}의 분위기와 성격을 반영한 캐릭터 중심 재해석`,
    colorLighting: "부드러운 얼굴광과 입체적인 배경광",
    texture: "명확한 외곽선과 정돈된 디지털 셀 애니 텍스처",
    mood: "사용자 제시 감정에 맞는 맞춤형 내러티브",
    symbolism: "사용자가 강조한 상징물이나 소품을 자연스럽게 삽입"
  };
}

function buildManualBackgroundProfile(name) {
  return {
    id: MANUAL_BACKGROUND_ID,
    label: `사용자 입력: ${name}`,
    style: `사용자 지정 배경 '${name}' 중심으로 구성`,
    mood: "입력한 배경의 분위기를 반영한 감성",
    lighting: "입력 배경 키워드에 맞춘 조명 톤",
    symbolism: "입력 배경에서 사용자가 강조한 오브제와 키워드 중심 반영"
  };
}

function resolveCharacterProfile() {
  const manualCharacter = getManualCharacter();
  if (manualCharacter) {
    return buildManualCharacterProfile(manualCharacter);
  }

  return findCharacterById(ui.characterSelect.value);
}

function resolveBackgroundProfile() {
  const manualBackground = getManualBackground();
  if (manualBackground) {
    return buildManualBackgroundProfile(manualBackground);
  }

  return findBackgroundById(ui.backgroundSelect.value);
}

function findBackgroundById(id) {
  return BACKGROUNDS.find((item) => item.id === id) || BACKGROUNDS[0];
}

function getFilteredMasterpieces() {
  if (state.selectedCategory === "all") {
    return MASTERPIECES;
  }
  return MASTERPIECES.filter((item) => item.category === state.selectedCategory);
}

function updateMasterpieceBadge() {
  const selected = findMasterpieceById(ui.masterpieceSelect.value);
  ui.masterpieceCurrent.textContent = `${selected.titleKo} · ${selected.artistKo}`;
}

function syncSelectedMasterpieceCard(scrollIntoView = false) {
  const selectedId = ui.masterpieceSelect.value;
  const cards = ui.masterpieceTrack.querySelectorAll(".frame-card");
  let selectedCard = null;

  cards.forEach((card) => {
    const isSelected = card.dataset.id === selectedId;
    card.classList.toggle("is-selected", isSelected);
    card.setAttribute("aria-pressed", isSelected ? "true" : "false");
    if (isSelected) {
      selectedCard = card;
    }
  });

  if (scrollIntoView && selectedCard) {
    selectedCard.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
  }

  updateMasterpieceBadge();
}

function renderMasterpieceTabs() {
  ui.masterpieceTabs.innerHTML = "";

  MASTERPIECE_CATEGORIES.forEach((category) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "tab-btn";
    button.textContent = category.label;
    button.dataset.category = category.id;
    button.setAttribute("role", "tab");
    button.setAttribute("aria-selected", category.id === state.selectedCategory ? "true" : "false");

    if (category.id === state.selectedCategory) {
      button.classList.add("is-active");
    }

    button.addEventListener("click", () => {
      setMasterpieceCategory(category.id);
    });

    ui.masterpieceTabs.append(button);
  });
}

function createMasterpieceCard(work) {
  const card = document.createElement("div");
  card.className = "frame-card";
  card.tabIndex = 0;
  card.role = "button";
  card.dataset.id = work.id;
  card.setAttribute("aria-pressed", "false");

  const hanger = document.createElement("span");
  hanger.className = "frame-hanger";

  const outer = document.createElement("span");
  outer.className = "frame-outer";

  const inner = document.createElement("span");
  inner.className = "frame-inner";

  const image = document.createElement("img");
  image.className = "artwork-image";
  image.loading = "lazy";
  image.decoding = "async";
  image.alt = `${work.titleKo} (${work.artistKo})`;

  const failurePanel = document.createElement("div");
  failurePanel.className = "frame-failure-panel is-hidden";

  const failureMessage = document.createElement("span");
  failureMessage.className = "frame-failure-message";
  failureMessage.textContent = "이미지 로딩 실패";

  const failureHint = document.createElement("span");
  failureHint.className = "frame-failure-hint";
  failureHint.textContent = "다른 경로로 자동 재시도 중";

  const reloadButton = document.createElement("button");
  reloadButton.type = "button";
  reloadButton.className = "frame-reload-btn";
  reloadButton.textContent = "다른 주소로 다시 불러오기";

  const showFailurePanel = (hintText) => {
    inner.classList.add("is-broken");
    failureHint.textContent = hintText;
    failurePanel.classList.remove("is-hidden");
  };

  const hideFailurePanel = () => {
    inner.classList.remove("is-broken");
    failurePanel.classList.add("is-hidden");
  };

  failurePanel.append(failureMessage, failureHint, reloadButton);

  image.addEventListener("load", () => {
    hideFailurePanel();
    fitArtworkImageFrame(image, inner);
  });

  const imageLoader = attachImageSourceFallback(
    image,
    buildArtworkImageSources(work),
    {
      onAttempt: ({ attempt, total }) => {
        if (attempt > 1) {
          showFailurePanel(`다른 경로로 자동 재시도 중 (${attempt}/${total})`);
        }
      },
      onAttemptError: ({ attempt, total }) => {
        showFailurePanel(`다른 경로로 자동 재시도 중 (${Math.min(attempt + 1, total)}/${total})`);
      },
      onAttemptTimeout: ({ attempt, total }) => {
        showFailurePanel(`응답 지연으로 자동 재시도 중 (${Math.min(attempt + 1, total)}/${total})`);
      },
      onAllFailed: () => {
        showFailurePanel("모든 경로 실패. 아래 버튼으로 다시 시도하세요.");
      }
    }
  );

  reloadButton.addEventListener("click", (event) => {
    event.preventDefault();
    event.stopPropagation();

    showFailurePanel("수동 재시도 중...");
    imageLoader?.retry();
  });

  fitArtworkImageFrame(image, inner);

  const caption = document.createElement("span");
  caption.className = "frame-caption";

  const title = document.createElement("span");
  title.className = "caption-title";
  title.textContent = work.titleKo;

  const artist = document.createElement("span");
  artist.className = "caption-artist";
  artist.textContent = work.artistKo;

  caption.append(title, artist);
  inner.append(image);
  inner.append(failurePanel);
  outer.append(inner);
  card.append(hanger, outer, caption);

  card.addEventListener("click", () => {
    ui.masterpieceSelect.value = work.id;
    syncSelectedMasterpieceCard(true);
    refreshAutoPlan();
  });
  card.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      card.click();
    }
  });

  return card;
}

function renderMasterpieceTrack() {
  const works = getFilteredMasterpieces();
  ui.masterpieceTrack.innerHTML = "";

  works.forEach((work) => {
    ui.masterpieceTrack.append(createMasterpieceCard(work));
  });

  if (!works.some((item) => item.id === ui.masterpieceSelect.value)) {
    ui.masterpieceSelect.value = works[0]?.id || MASTERPIECES[0].id;
  }

  syncSelectedMasterpieceCard(false);
}

function setMasterpieceCategory(categoryId, preferredWorkId = "") {
  state.selectedCategory = categoryId;
  renderMasterpieceTabs();
  renderMasterpieceTrack();

  if (preferredWorkId) {
    const filtered = getFilteredMasterpieces();
    if (filtered.some((item) => item.id === preferredWorkId)) {
      ui.masterpieceSelect.value = preferredWorkId;
      syncSelectedMasterpieceCard(true);
    }
  }

  refreshAutoPlan();
}

function scrollMasterpieceTrack(direction) {
  const delta = Math.max(ui.masterpieceTrack.clientWidth * 0.86, 260);
  ui.masterpieceTrack.scrollBy({ left: direction * delta, behavior: "smooth" });
}

function initSelectors() {
  ui.masterpieceSelect.innerHTML = "";
  MASTERPIECES.forEach((work) => {
    appendOption(ui.masterpieceSelect, work.id, `${work.titleKo} - ${work.artistKo}`);
  });
  ui.masterpieceSelect.value = MASTERPIECES[0].id;

  ui.characterSelect.innerHTML = "";
  CHARACTERS.forEach((character) => {
    appendOption(ui.characterSelect, character.id, character.label);
  });
  ui.characterSelect.value = "no-change";

  if (ui.characterCustomInput) {
    ui.characterCustomInput.value = "";
  }

  if (ui.characterSuggestionList) {
    ui.characterSuggestionList.innerHTML = "";
    CHARACTERS.forEach((character) => {
      if (character.id === "no-change") {
        return;
      }
      appendDataListOption(ui.characterSuggestionList, character.character, character.label);
    });
  }

  if (ui.backgroundCustomInput) {
    ui.backgroundCustomInput.value = "";
  }

  if (ui.backgroundSuggestionList) {
    ui.backgroundSuggestionList.innerHTML = "";
    BACKGROUNDS.forEach((background) => {
      if (background.id === "no-change" || background.id === "auto") {
        return;
      }
      appendDataListOption(ui.backgroundSuggestionList, background.label, background.label);
    });
  }

  ui.backgroundSelect.innerHTML = "";
  BACKGROUNDS.forEach((background) => {
    appendOption(ui.backgroundSelect, background.id, background.label);
  });
  ui.backgroundSelect.value = "no-change";

  renderMasterpieceTabs();
  renderMasterpieceTrack();
}

function resolveBackground(character, selectedBackgroundId, masterpiece) {
  const manualBackground = getManualBackground();
  if (manualBackground) {
    return buildManualBackgroundProfile(manualBackground);
  }

  if (selectedBackgroundId === "no-change") {
    return findBackgroundById("no-change");
  }

  if (selectedBackgroundId && selectedBackgroundId !== "auto") {
    return findBackgroundById(selectedBackgroundId);
  }

  if (character.id === "no-change") {
    const byCategory = AUTO_BACKGROUND_BY_CATEGORY[masterpiece.category] || "classic-museum";
    return findBackgroundById(byCategory);
  }

  const recommendedId = AUTO_BACKGROUND_BY_SERIES[character.series] || "classic-museum";
  return findBackgroundById(recommendedId);
}

function buildAutoSuggestion() {
  const masterpiece = findMasterpieceById(ui.masterpieceSelect.value);
  const character = resolveCharacterProfile();
  const manualBackground = getManualBackground();
  const background = resolveBackground(character, ui.backgroundSelect.value, masterpiece);
  const reinterpretationProfile = getReinterpretationProfile(ui.reinterpretationInput.value, "ko");

  const characterLine =
    character.id === "no-change"
      ? "원작 인물을 유지하고 배경/톤만 조정"
      : character.id === MANUAL_CHARACTER_ID
        ? `사용자 입력 캐릭터 '${character.character}'로 인물 재해석`
        : `${character.series} - ${character.character}로 인물 재해석`;

  const backgroundLine =
    background.id === MANUAL_BACKGROUND_ID
      ? `사용자 입력 배경: ${manualBackground}`
      : ui.backgroundSelect.value === "no-change"
        ? "원작 배경 유지"
        : ui.backgroundSelect.value === "auto"
          ? `자동 추천 배경 적용: ${background.label}`
          : background.label;

  return {
    masterpiece,
    character,
    background,
    description: [
      `원본: ${masterpiece.titleKo} (${masterpiece.artistKo})`,
      `캐릭터: ${characterLine}`,
      `배경: ${backgroundLine}`,
      "",
      "자동 제안 요약:",
      `- 인물 스타일: ${character.subjectStyle}`,
      `- 배경 연출: ${background.style}`,
      `- 색감/조명: ${character.colorLighting}, ${background.lighting}`,
      `- 분위기: ${character.mood}, ${background.mood}`,
      `- 상징: ${character.symbolism}, ${background.symbolism}`,
      `- 재해석 단계: ${reinterpretationProfile.label} (${reinterpretationProfile.weightClause})`,
      `- 품질: ${QUALITY_DIRECTIVE}`,
      "",
      "이 설정으로 프롬프트를 자동 구성합니다."
    ].join("\n")
  };
}

function refreshAutoPlan() {
  const suggestion = buildAutoSuggestion();
  ui.autoPlanOutput.value = suggestion.description;
  return suggestion;
}

function randomizeCombination() {
  const pick = (items) => items[Math.floor(Math.random() * items.length)];

  const nonDefaultCharacters = CHARACTERS.filter((item) => item.id !== "no-change");
  const nonDefaultBackgrounds = BACKGROUNDS.filter((item) => !["no-change", "auto"].includes(item.id));

  const randomMasterpiece = pick(MASTERPIECES);
  const randomCharacter = Math.random() < 0.18 ? findCharacterById("no-change") : pick(nonDefaultCharacters);

  const randomBackgroundChoice = Math.random();
  const randomBackground =
    randomBackgroundChoice < 0.2
      ? "no-change"
      : randomBackgroundChoice < 0.55
        ? "auto"
        : pick(nonDefaultBackgrounds).id;

  const randomRatio = pick(["1:1", "3:4", "4:5", "16:9", "9:16"]);
  const randomStrength = pick(["preserve", "balanced", "bold"]);

  if (ui.characterCustomInput) {
    ui.characterCustomInput.value = "";
  }

  if (ui.backgroundCustomInput) {
    ui.backgroundCustomInput.value = "";
  }

  ui.characterSelect.value = randomCharacter.id;
  ui.masterpieceSelect.value = randomMasterpiece.id;
  ui.backgroundSelect.value = randomBackground;
  ui.aspectRatioSelect.value = randomRatio;
  ui.reinterpretationInput.value = randomStrength;
  updateReinterpretationUI(randomStrength);

  setMasterpieceCategory(randomMasterpiece.category, randomMasterpiece.id);

  const suggestion = refreshAutoPlan();
  setStatus(
    `랜덤 조합 적용: ${suggestion.masterpiece.titleKo} + ${suggestion.character.character} + ${
      ui.backgroundSelect.selectedOptions[0].textContent
    }`,
    "success"
  );
}

function collectPayload() {
  const suggestion = buildAutoSuggestion();
  const reinterpretationLevel = String(ui.reinterpretationInput.value || "preserve");

  const customSubject =
    suggestion.character.id === "no-change"
      ? "원작 핵심 인물 구성을 유지하고 캐릭터 전환 없이 디테일 정제"
      : suggestion.character.id === MANUAL_CHARACTER_ID
        ? `사용자가 지정한 캐릭터 '${suggestion.character.character}'의 속성과 비주얼로 원작 핵심 인물을 재해석`
        : `${suggestion.character.series} 캐릭터 '${suggestion.character.character}'로 원작 핵심 인물을 재해석`;

  const payload = {
    masterpiece: `${suggestion.masterpiece.titleKo} (${suggestion.masterpiece.titleEn})`,
    artist: `${suggestion.masterpiece.artistKo} (${suggestion.masterpiece.artistEn})`,
    customSubject,
    subjectStyle: suggestion.character.subjectStyle,
    backgroundStyle: suggestion.background.style,
    colorLighting: `${suggestion.character.colorLighting}, ${suggestion.background.lighting}`,
    textureBrushwork: suggestion.character.texture,
    moodStory: `${suggestion.character.mood}, ${suggestion.background.mood}`,
    compositionCamera: "원작 핵심 구도는 유지하고 캐릭터 중심 시선 흐름으로 재배치",
    symbolism: `${suggestion.character.symbolism}, ${suggestion.background.symbolism}`,
    negatives: "텍스트, 워터마크, 로고, 손가락 왜곡, 저해상도, 과도한 노이즈 제외",
    qualityDirective: QUALITY_DIRECTIVE,
    reinterpretationLevel,
    aspectRatio: ui.aspectRatioSelect.value,
    language: ui.languageSelect.value
  };

  return payload;
}

function normalizeOneLinePrompt(text) {
  return String(text || "")
    .replace(/\s+/g, " ")
    .replace(/\s+,/g, ",")
    .trim();
}

function getReinterpretationDirective(level, language = "en") {
  return getReinterpretationProfile(level, language).directive;
}

function buildSelectionLockClause(input) {
  const source = String(input?.masterpiece || "").trim();
  const artist = String(input?.artist || "").trim();
  const characterConversion = String(input?.customSubject || "").trim();
  const backgroundConversion = String(input?.backgroundStyle || "").trim();
  const aspectRatio = String(input?.aspectRatio || "").trim();

  const parts = [];
  if (source) {
    parts.push(`source painting ${source}`);
  }
  if (artist) {
    parts.push(`artist ${artist}`);
  }
  if (characterConversion) {
    parts.push(`character conversion ${characterConversion}`);
  }
  if (backgroundConversion) {
    parts.push(`background conversion ${backgroundConversion}`);
  }
  if (aspectRatio) {
    parts.push(`aspect ratio ${aspectRatio}`);
  }

  return parts.join(", ");
}

function enforceSelectionMatchInPrompt(prompt, input) {
  const normalizedPrompt = normalizeOneLinePrompt(prompt);
  const lockClause = buildSelectionLockClause(input);

  if (!lockClause) {
    return normalizedPrompt;
  }

  const lowerPrompt = normalizedPrompt.toLowerCase();
  const checks = [
    String(input?.masterpiece || "").trim(),
    String(input?.customSubject || "").trim(),
    String(input?.backgroundStyle || "").trim(),
    String(input?.aspectRatio || "").trim()
  ].filter(Boolean);

  const hasAllCoreSelections = checks.every((value) => lowerPrompt.includes(value.toLowerCase()));
  if (hasAllCoreSelections) {
    return normalizedPrompt;
  }

  return normalizeOneLinePrompt(`${normalizedPrompt}, ${lockClause}`);
}

function buildLocalPromptResult(input) {
  const isEnglish = input.language === "en";
  const reinterpretationProfile = getReinterpretationProfile(input.reinterpretationLevel, input.language);
  const reinterpretationDirective = reinterpretationProfile.directive;
  const finalPrompt = enforceSelectionMatchInPrompt(
    [
      `${input.masterpiece} by ${input.artist}`,
      `reinterpretation mode: ${reinterpretationProfile.label}`,
      reinterpretationProfile.weightClause,
      reinterpretationProfile.priorityClause,
      `keep the original composition DNA as structural anchor`,
      `subject conversion: ${input.customSubject}`,
      `subject style: ${input.subjectStyle}`,
      `background conversion: ${input.backgroundStyle}`,
      `color and lighting: ${input.colorLighting}`,
      `texture and brushwork: ${input.textureBrushwork}`,
      `mood and narrative: ${input.moodStory}`,
      `symbolism: ${input.symbolism}`,
      `camera/composition rule: ${input.compositionCamera}`,
      reinterpretationDirective,
      `negative constraints: ${input.negatives}`,
      `aspect ratio ${input.aspectRatio}`,
      QUALITY_DIRECTIVE
    ].join(", "),
    input
  );

  const detailHeader = isEnglish ? "[Detailed Prompt Guide]" : "[상세 프롬프트 가이드]";
  const lines = [
    finalPrompt,
    "",
    detailHeader,
    isEnglish ? `- Source painting: ${input.masterpiece}` : `- 원본 명화: ${input.masterpiece}`,
    isEnglish ? `- Artist: ${input.artist}` : `- 작가: ${input.artist}`,
    isEnglish
      ? `- Character reinterpretation: ${input.customSubject}`
      : `- 캐릭터 재해석: ${input.customSubject}`,
    isEnglish
      ? `- Background reinterpretation: ${input.backgroundStyle}`
      : `- 배경 재해석: ${input.backgroundStyle}`,
    isEnglish
      ? `- Reinterpretation mode: ${reinterpretationProfile.label}`
      : `- 재해석 단계: ${reinterpretationProfile.label}`,
    isEnglish ? `- Weight policy: ${reinterpretationProfile.weightClause}` : `- 비중 정책: ${reinterpretationProfile.weightClause}`,
    isEnglish ? `- Priority rule: ${reinterpretationProfile.priorityClause}` : `- 우선순위 규칙: ${reinterpretationProfile.priorityClause}`,
    isEnglish ? `- Color/Lighting: ${input.colorLighting}` : `- 색감/조명: ${input.colorLighting}`,
    isEnglish ? `- Texture: ${input.textureBrushwork}` : `- 텍스처: ${input.textureBrushwork}`,
    isEnglish ? `- Mood/Narrative: ${input.moodStory}` : `- 분위기/서사: ${input.moodStory}`,
    isEnglish ? `- Symbolism: ${input.symbolism}` : `- 상징 요소: ${input.symbolism}`,
    isEnglish ? `- Reinterpretation policy: ${reinterpretationDirective}` : `- 재해석 정책: ${reinterpretationDirective}`,
    isEnglish ? `- Aspect ratio lock: ${input.aspectRatio}` : `- 화면 비율 고정: ${input.aspectRatio}`,
    isEnglish ? `- Quality directive: ${QUALITY_DIRECTIVE}` : `- 품질 지시문: ${QUALITY_DIRECTIVE}`
  ];

  return {
    finalPrompt,
    detailedPrompt: lines.join("\n")
  };
}

function scrollToOutput() {
  if (!ui.outputSection) {
    return;
  }

  ui.outputSection.scrollIntoView({ behavior: "smooth", block: "start" });
}

function extractSection(text, sectionName) {
  const escaped = sectionName.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const regex = new RegExp(`\\[${escaped}\\]\\s*([\\s\\S]*?)(?=\\n\\[[A-Z_]+\\]|$)`);
  const match = text.match(regex);
  return match ? match[1].trim() : "";
}

async function generatePrompt(event) {
  event.preventDefault();

  const payload = collectPayload();

  setBusy(true);
  setStatus("선택값 기반으로 로컬 프롬프트를 구성하고 있습니다...");
  ui.rawOutput.value = "";
  ui.endpointBadge.textContent = "API: local-template";
  state.latestCopyPrompt = "";

  try {
    const data = buildLocalPromptResult(payload);
    const promptText = String(data.detailedPrompt || "").trim();
    ui.rawOutput.value = promptText;
    state.latestCopyPrompt = String(data.finalPrompt || "").trim();

    const copied = await copyPromptToClipboard(
      state.latestCopyPrompt || promptText,
      true,
      "프롬프트 생성 완료. 한 줄 프롬프트가 자동으로 복사되었습니다."
    );
    scrollToOutput();

    if (!copied) {
      setStatus("프롬프트 생성 완료 (자동 복사는 실패했습니다. 복사 버튼을 눌러 주세요.)", "error");
      return;
    }

    setStatus("프롬프트 생성 완료. 하단 결과로 이동하며 자동 복사되었습니다.", "success");
  } catch (error) {
    setStatus(`오류: ${error.message}`, "error");
  } finally {
    setBusy(false);
  }
}

async function copyPromptToClipboard(text, autoCopied = false, copiedMessage = "") {
  const value = String(text || "").trim();
  if (!value) {
    if (!autoCopied) {
      setStatus("복사할 프롬프트가 없습니다.", "error");
    }
    return false;
  }

  try {
    await navigator.clipboard.writeText(value);
    const defaultAutoMessage = "프롬프트 생성 완료 + 자동 복사 완료";
    const defaultManualMessage = "프롬프트를 복사했습니다.";
    setStatus(
      copiedMessage || (autoCopied ? defaultAutoMessage : defaultManualMessage),
      "success"
    );
    return true;
  } catch {
    if (!autoCopied) {
      setStatus("복사에 실패했습니다.", "error");
    }
    return false;
  }
}

async function copyRawPrompt() {
  const textForCopy = state.latestCopyPrompt || String(ui.rawOutput.value || "").trim();
  await copyPromptToClipboard(textForCopy, false, "프롬프트가 클립보드에 복사되었습니다.");
}

function resetGeneratedImageView() {
  ui.generatedImageSection?.classList.remove("is-hidden");
  if (ui.generatedImage) {
    ui.generatedImage.classList.add("is-hidden");
    ui.generatedImage.removeAttribute("src");
  }
  ui.downloadImageButton?.classList.add("is-hidden");
  ui.downloadImageButton?.removeAttribute("href");
}

function renderGeneratedImage(dataUrl) {
  ui.generatedImageSection?.classList.remove("is-hidden");
  if (ui.generatedImage) {
    ui.generatedImage.src = dataUrl;
    ui.generatedImage.classList.remove("is-hidden");
  }
  if (ui.downloadImageButton) {
    ui.downloadImageButton.href = dataUrl;
    ui.downloadImageButton.download = GENERATED_IMAGE_FILENAME;
    ui.downloadImageButton.classList.remove("is-hidden");
  }
}

async function requestImageGeneration({ prompt, aspectRatio, qualityDirective }) {
  if (!window.BuildersLoungeAuth?.generateImage) {
    throw new Error("Builders Lounge 계정 모듈을 불러오지 못했습니다.");
  }
  return window.BuildersLoungeAuth.generateImage({ prompt, aspectRatio, qualityDirective });
}

function getImagePrompt() {
  return String(state.latestCopyPrompt || ui.rawOutput.value || "").trim();
}

async function generateImageFromPrompt() {
  const sourceLabel = "프롬프트";
  const prompt = getImagePrompt();
  if (!prompt) {
    setStatus(`${sourceLabel}를 먼저 준비해 주세요.`, "error");
    return;
  }

  setImageBusy(true);
  resetGeneratedImageView();
  setGeneratedImageStatus(`${sourceLabel} 기준 이미지를 생성하고 있습니다. 성공한 요청에만 빌드가 사용됩니다.`);

  try {
    const data = await requestImageGeneration({
      prompt,
      aspectRatio: ui.aspectRatioSelect.value,
      qualityDirective: QUALITY_DIRECTIVE
    });

    renderGeneratedImage(data.imageDataUrl);
    ui.endpointBadge.textContent = "API: Builders Lounge";
    setGeneratedImageStatus(`이미지 생성 완료 · 현재 ${Number(data.balance || 0).toLocaleString("ko-KR")}빌드`, "success");
    setStatus(`${sourceLabel} 기준 이미지 생성 완료 (${data.model})`, "success");
  } catch (error) {
    setGeneratedImageStatus(`오류: ${error.message}`, "error");
    setStatus(`이미지 생성 오류: ${error.message}`, "error");
  } finally {
    setImageBusy(false);
  }
}

function bindEvents() {
  ui.form.addEventListener("submit", generatePrompt);
  ui.generateImageRawButton?.addEventListener("click", generateImageFromPrompt);
  ui.copyRawButton?.addEventListener("click", copyRawPrompt);
  ui.randomizeButton.addEventListener("click", randomizeCombination);

  ui.masterpieceSelect.addEventListener("change", () => {
    syncSelectedMasterpieceCard(true);
    refreshAutoPlan();
  });

  ui.characterSelect.addEventListener("change", () => {
    if (ui.characterCustomInput) {
      ui.characterCustomInput.value = "";
    }
    refreshAutoPlan();
  });
  ui.characterCustomInput?.addEventListener("input", refreshAutoPlan);
  ui.backgroundSelect.addEventListener("change", () => {
    if (ui.backgroundCustomInput) {
      ui.backgroundCustomInput.value = "";
    }
    refreshAutoPlan();
  });
  ui.backgroundCustomInput?.addEventListener("input", refreshAutoPlan);

  ui.masterpiecePrev.addEventListener("click", () => scrollMasterpieceTrack(-1));
  ui.masterpieceNext.addEventListener("click", () => scrollMasterpieceTrack(1));

  ui.reinterpretationInput.addEventListener("change", () => {
    updateReinterpretationUI(ui.reinterpretationInput.value);
  });
}

function initialize() {
  initSelectors();
  bindEvents();
  syncSelectedMasterpieceCard(false);
  refreshAutoPlan();
  updateReinterpretationUI(ui.reinterpretationInput.value);
  setImageBusy(false);
  setGeneratedImageStatus("Google 로그인 후 빌드 포인트로 이미지를 생성할 수 있습니다.");
  setStatus("선택값 기반 로컬 프롬프트 생성 준비 완료");
}

initialize();
