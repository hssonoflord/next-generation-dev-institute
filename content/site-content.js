/**
 * 다음세대개발원 웹사이트 콘텐츠
 * ─────────────────────────────────────────
 * 이 파일만 수정하면 사이트 전체 문구를 바꿀 수 있습니다.
 * HTML/CSS/JS는 건드리지 않아도 됩니다.
 */

const SITE_CONTENT = {
  site: {
    name: "다음세대개발원",
    nameEn: "Next Generation Development Institute",
    tagline: "다음 세대를 위한 교육과 리더십, 함께 성장합니다.",
    description:
      "다음세대개발원은 청소년·학부모·교육 리더를 위한 기독교적 가치 기반 교육 프로그램을 운영합니다.",
  },

  navigation: [
    { label: "홈", href: "index.html" },
    { label: "개발원 소개", href: "index.html#about" },
    { label: "교육 프로그램", href: "projects.html" },
    { label: "소식", href: "index.html#news" },
    { label: "문의", href: "index.html#contact" },
  ],

  hero: {
    title: "다음 세대의\n성장을 함께 설계합니다",
    subtitle:
      "교육, 리더십, 진로 코칭을 통해 건강하고 올바른 가치관을 갖춘 다음 세대를 양성합니다.",
    ctaPrimary: { label: "교육 프로그램 보기", href: "projects.html" },
    ctaSecondary: { label: "개발원 소개", href: "#about" },
    illustrationAlt:
      "어린이부터 청소년까지 단계별로 성장하며, 교육자와 함께 미래를 설계하는 일러스트",
    visualTags: ["어린이 교육", "청소년 성장", "함께하는 설계"],
  },

  about: {
    sectionTitle: "개발원 소개",
    heading: "다음세대개발원은",
    paragraphs: [
      "지식과 정보의 단순 전달을 넘어, 안전·건강·존중의 기초 위에 생명존중의식을 회복하고 올바른 가치관을 정립할 수 있도록 교육합니다.",
      "청소년, 학부모, 교회 리더를 대상으로 워크숍·강연·코칭 프로그램을 운영하며, 현장에서 바로 적용할 수 있는 실천적 교육을 지향합니다.",
    ],
    values: [
      {
        title: "안전",
        description:
          "모든 교육의 기본입니다. 다양한 폭력 예방 교육에서 가장 먼저 고려되어야 할 요소입니다.",
      },
      {
        title: "건강",
        description:
          "몸의 건강뿐만 아니라 마음의 건강까지 지켜질 수 있도록 교육합니다.",
      },
      {
        title: "존중",
        description:
          "나와 타인을 존중하는 자세를 통해 공동체에 기여하며 성숙한 개인으로 성장할 수 있습니다.",
      },
    ],
  },

  mission: {
    sectionTitle: "OUR MISSION",
    heading: "우리가 지향하는 교육",
    items: [
      {
        keyword: "성장하는",
        description: "다음 세대가 자신의 가능성을 발견하고 성장하도록 돕습니다.",
      },
      {
        keyword: "연결하는",
        description: "가정·학교·공동체가 함께 소통하고 협력하도록 지원합니다.",
      },
      {
        keyword: "실천하는",
        description: "배운 내용을 일상과 사역 현장에 적용할 수 있게 합니다.",
      },
      {
        keyword: "존중하는",
        description: "다양성을 인정하고 서로를 존중하는 문화를 만듭니다.",
      },
    ],
  },

  programs: {
    pageTitle: "교육 프로그램",
    sectionTitle: "사업영역",
    categories: [
      { id: "all", label: "전체보기" },
      { id: "youth", label: "청소년 교육" },
      { id: "parent", label: "학부모 교육" },
      { id: "leader", label: "리더 양성" },
      { id: "workshop", label: "워크숍·특강" },
    ],
    items: [
      {
        id: 1,
        category: "youth",
        categoryLabel: "청소년 교육",
        title: "목적이 이끄는 진로코칭",
        description:
          "청소년이 자신의 목적과 가치를 발견하고, 진로 방향을 스스로 설계할 수 있도록 돕는 코칭 프로그램입니다.",
      },
      {
        id: 2,
        category: "youth",
        categoryLabel: "청소년 교육",
        title: "능동적 학습 워크숍",
        description:
          "AI와 디지털 도구를 활용한 능동적 학습 방법을 익히고, 자기주도 학습 역량을 키우는 워크숍입니다.",
      },
      {
        id: 3,
        category: "parent",
        categoryLabel: "학부모 교육",
        title: "다음세대 양육 교육",
        description:
          "학부모가 자녀와 건강한 관계를 맺고, 올바른 가치관을 전달할 수 있도록 돕는 교육 프로그램입니다.",
      },
      {
        id: 4,
        category: "parent",
        categoryLabel: "학부모 교육",
        title: "가정·학교 연계 세미나",
        description:
          "가정과 학교, 공동체가 함께 아이의 성장을 지원하는 협력 모델을 나누는 세미나입니다.",
      },
      {
        id: 5,
        category: "leader",
        categoryLabel: "리더 양성",
        title: "리더사역자 과정",
        description:
          "교회 리더·셀리더·구역장 등 사역 리더를 위한 리더십과 다음세대 사역 전략 교육 과정입니다.",
      },
      {
        id: 6,
        category: "leader",
        categoryLabel: "리더 양성",
        title: "다음세대 부흥 전략",
        description:
          "다음세대 사역의 목표, 방향, 운영 전략을 함께 고민하고 현장에 적용하는 리더 교육입니다.",
      },
      {
        id: 7,
        category: "workshop",
        categoryLabel: "워크숍·특강",
        title: "폭력 예방 교육",
        description:
          "학교·교회·공동체 현장에서 필요한 폭력 예방과 안전 교육을 맞춤형으로 제공합니다.",
      },
      {
        id: 8,
        category: "workshop",
        categoryLabel: "워크숍·특강",
        title: "맞춤형 특강·컨설팅",
        description:
          "기관·단체의 필요에 맞춘 특강, 워크숍, 교육 컨설팅을 기획하고 진행합니다.",
      },
    ],
  },

  news: {
    sectionTitle: "OUR STORY",
    heading: "다음세대개발원의 소식을 전해드립니다.",
    items: [
      {
        category: "교육 프로그램",
        title: "2026 상반기 진로코칭 워크숍 참가자 모집",
        date: "2026-05-20",
      },
      {
        category: "리더 양성",
        title: "리더사역자 과정 2기 수강생 모집 안내",
        date: "2026-05-10",
      },
      {
        category: "학부모 교육",
        title: "여름방학 가족 소통 특강 일정 안내",
        date: "2026-04-28",
      },
      {
        category: "워크숍",
        title: "AI 활용 능동적 학습 워크숍 현장 스케치",
        date: "2026-04-15",
      },
    ],
  },

  impact: {
    sectionTitle: "OUR IMPACT",
    quote:
      "함께 성장하는 파트너와 함께, 다음 세대의 변화를 만들어갑니다.",
    stats: [
      { value: "10+", label: "운영 프로그램(개)" },
      { value: "500+", label: "교육 참여자(명)" },
      { value: "30+", label: "협력 기관·교회(곳)" },
      { value: "100+", label: "교육·강연(회)" },
    ],
  },

  contact: {
    sectionTitle: "문의",
    heading: "교육 문의·신청",
    description:
      "프로그램 일정, 맞춤 교육, 협력 문의는 아래 연락처로 편하게 문의해 주세요.",
    email: "contact@example.com",
    phone: "02-0000-0000",
    address: "서울특별시 (주소를 입력해 주세요)",
  },

  footer: {
    copyright: "© 2026 다음세대개발원. All rights reserved.",
    links: [
      { label: "개인정보처리방침", href: "#" },
      { label: "이용약관", href: "#" },
    ],
  },
};
