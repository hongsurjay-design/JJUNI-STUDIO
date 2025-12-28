
import { Post, SiteConfig } from './types';

export const INITIAL_CONFIG: SiteConfig = {
  siteName: "JJUNI STUDIO",
  heroTitle: "고품격 아카이브\n스튜디오",
  heroSubtitle: "세련된 취향과 깊이 있는 정보를 공유하는 공간",
  pointColor: "#8A2BE2"
};

export const INITIAL_POSTS: Post[] = [
  {
    id: '1',
    title: '서울 최고의 오마카세: 미식의 절정',
    category: 'Restaurant',
    summary: '정통 일식의 깊이를 느낄 수 있는 청담동의 비밀스러운 공간을 소개합니다.',
    content: '이곳은 장인의 손끝에서 탄생하는 예술과도 같은 스시를 제공합니다. 프라이빗한 분위기 속에서 즐기는 최상급 제철 식재료의 향연은 진정한 미식가라면 놓쳐서는 안 될 경험입니다.',
    imageUrl: 'https://picsum.photos/seed/food1/800/600',
    date: '2024-05-10',
    isFeatured: true
  },
  {
    id: '2',
    title: '제주도 프라이빗 빌라: 신사의 휴식',
    category: 'Place',
    summary: '번잡한 일상을 벗어나 대자연 속에서 온전한 휴식을 취할 수 있는 곳.',
    content: '바다 전망이 한눈에 보이는 절벽 끝에 위치한 이 빌라는 모던한 건축 미학과 제주의 자연이 완벽하게 조화를 이룹니다. 전용 인피니티 풀에서 즐기는 노을은 압권입니다.',
    imageUrl: 'https://picsum.photos/seed/place1/800/600',
    date: '2024-05-12',
    isFeatured: true
  },
  {
    id: '3',
    title: '퍼스트 클래스의 품격: 항공사별 특징 비교',
    category: 'Airline',
    summary: '글로벌 주요 항공사들의 퍼스트 클래스 서비스와 기내식을 정밀 분석합니다.',
    content: '에미레이트, 싱가포르 항공, 루프트한자의 최상위 등급 서비스는 단순한 이동을 넘어선 라이프스타일의 연장선입니다. 완벽한 숙면을 위한 베딩 시스템부터 셰프의 시그니처 메뉴까지 알아봅니다.',
    imageUrl: 'https://picsum.photos/seed/plane1/800/600',
    date: '2024-05-15',
    isFeatured: false
  },
  {
    id: '4',
    title: '성공적인 자산 배분 전략: 2024 하반기 전망',
    category: 'Investment',
    summary: '변동성 높은 시장 환경 속에서 자산을 지키고 성장시키는 전략적 접근법.',
    content: '인플레이션과 금리 변동 추이를 바탕으로 한 포트폴리오 다변화 전략을 제시합니다. 대체 투자 자산으로서의 아트 컬렉팅과 희귀 시계 시장의 동향도 함께 짚어봅니다.',
    imageUrl: 'https://picsum.photos/seed/invest1/800/600',
    date: '2024-05-18',
    isFeatured: false
  },
  {
    id: '5',
    title: '미래의 캡틴을 위하여: 글로벌 비행 학교 가이드',
    category: 'Education',
    summary: '체계적인 교육 시스템을 갖춘 세계 최고의 비행 훈련 기관들을 분석합니다.',
    content: '미국 Embry-Riddle부터 유럽의 전문 교육 기관까지, 파일럿이 되기 위한 최적의 경로와 장학금 제도, 그리고 글로벌 항공사 연계 프로그램을 상세히 소개합니다.',
    imageUrl: 'https://picsum.photos/seed/flight-edu/800/600',
    date: '2024-05-20',
    isFeatured: false
  }
];
