## 개요

- 주어진 디자인(Figma)을 분석하여 **공통 컴포넌트 라이브러리** 제작
- 구현보다는 **기능 설계와 문서화에 집중**하며 설계 원칙과 기준을 고려하여 **컴포넌트 구조 설계 및 개선**

<br/>

## 주요 목표

- 일관된 디자인 시스템 구축
- 컴포넌트 설계 원칙을 준수한 구현
- 접근성(Accessibility) 준수
- TypeScript 지원으로 타입 안정성 확보

<br/>

## 컴포넌트 설계 원칙

1. **재사용성** : 명확한 컴포넌트 역할 정의
2. **일관성** : 사용자 경험 일관화 (디자인 시스템 구성 요소 토큰화) & 개발자 경험 일관화 (코드 컨벤션 준수)
3. **확장성** : Variant 시스템 도입으로 다양한 디자인 대응
4. **접근성** : 시맨틱 HTML 적극 활용, ARIA 속성 적절한 사용, 키보드 네비게이션 지원 등
5. **다형성** : Polymorphic Components (as props) 활용, 유연한 컴포넌트 구조로 재사용성 극대화

<br/>

## 기술 스택

### Frontend

- React 19
- TypeScript
- TailwindCSS 4
- Storybook - 컴포넌트 문서화

### 개발 도구

- PNPM - 패키지 매니징, 모노레포
- Vite - 번들러
- ESLint & Prettier - 코드 품질 및 포맷팅

### 디자인 시스템

- Design Tokens - 색상, 타이포그래피, 간격 등 디자인 토큰

<br/>

## 🕹 설치 및 실행

### 설치

```bash
# 저장소 클론
git clone https://github.com/Kernel360/KFE3-bootup-pangpang.git

# 의존성 설치
pnpm install
```

### 실행

```bash
# 프로젝트 디렉토리로 이동
cd packages/pds_ui

# 스토리북 개발 서버 실행
pnpm storybook
```

<br/>

## Roadmap

- 공통 컴포넌트 추가 설계 및 구현
- apps/web 프로젝트 환경 구성
