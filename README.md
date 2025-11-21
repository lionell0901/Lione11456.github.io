# AI 강사 디노 포트폴리오

> 업무를 혁신하는 AI 교육 전문가의 프로페셔널 포트폴리오 웹사이트

[![Live Demo](https://img.shields.io/badge/Demo-Live-brightgreen)](https://blog.ai-growth-club.me)
[![License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

## 🎯 프로젝트 소개

AI 실전 경험과 교육 전문가의 전달력을 결합한 AI 강사 포트폴리오 사이트입니다.

### 주요 기능

- ✅ **반응형 디자인** - 모바일/태블릿/데스크톱 완벽 대응
- ✅ **다크 테마** - 모던한 블루-퍼플 그라데이션 디자인
- ✅ **접근성 최적화** - WCAG 2.1 AA 준수, ARIA 레이블 적용
- ✅ **성능 최적화** - CSS/JS 최소화, 이미지 레이지 로딩
- ✅ **인터랙티브 UI** - 탭 시스템, 필터링, 스크롤 애니메이션

## 🚀 빠른 시작

### 설치

```bash
# 프로젝트 클론
git clone https://github.com/Lione11456/Lione11456.github.io.git
cd Lione11456.github.io

# 의존성 설치 (빌드 도구 사용 시)
npm install
```

### 개발 서버 실행

```bash
# Python 3 사용
npm run dev
# 또는
python3 -m http.server 8000

# 브라우저에서 http://localhost:8000 접속
```

## 🛠️ 빌드 및 배포

### 빌드 프로세스

```bash
# CSS와 JS 최소화
npm run build

# 개별 빌드
npm run minify:css  # CSS 최소화
npm run minify:js   # JS 최소화
```

### 이미지 최적화

```bash
# 이미지 백업 (원본 보존)
npm run backup:images

# 이미지 최적화 (1920px 이하로 리사이즈)
npm run optimize:images
```

### 파일 크기 확인

```bash
npm run stats
```

## 📁 프로젝트 구조

```
Lione11456.github.io/
├── index.html              # 메인 HTML (521줄)
├── css/
│   ├── style.css           # 개발용 CSS (23KB)
│   └── style.min.css       # 프로덕션 CSS (16KB, -30%)
├── js/
│   ├── main.js             # 개발용 JavaScript (6.5KB)
│   └── main.min.js         # 프로덕션 JS (3.1KB, -52%)
├── images/                 # 이미지 에셋 (23MB)
│   ├── logo/               # 클라이언트 로고
│   └── *.jpg/jpeg/png      # 포트폴리오 이미지
├── package.json            # 프로젝트 설정 및 빌드 스크립트
├── CNAME                   # 커스텀 도메인 설정
└── README.md               # 프로젝트 문서
```

## 🎨 기술 스택

### Frontend
- **HTML5** - 시맨틱 마크업
- **CSS3** - CSS Variables, Flexbox, Grid, Glassmorphism
- **Vanilla JavaScript** - 순수 JavaScript (프레임워크 없음)

### 디자인 시스템
- **폰트**: Pretendard (한글), Outfit (영문), Inter (대체)
- **아이콘**: Font Awesome 6.5.2
- **색상**: Deep Blue-Black 다크 테마 + 블루-퍼플 그라데이션

### 빌드 도구
- **clean-css-cli**: CSS 최소화
- **terser**: JavaScript 최소화
- **sips**: 이미지 최적화 (macOS 내장)

### 배포
- **GitHub Pages**: 정적 사이트 호스팅
- **커스텀 도메인**: blog.ai-growth-club.me

## 📊 성능 최적화

### 완료된 최적화

| 항목 | Before | After | 개선율 |
|------|--------|-------|--------|
| CSS 파일 | 23KB | 16KB | -30% |
| JS 파일 | 6.5KB | 3.1KB | -52% |
| 모바일 반응형 | ❌ | ✅ | 100% |
| 파일 모듈화 | ❌ | ✅ | 100% |

### 추가 최적화 가능 항목

- [ ] **이미지 압축**: 23MB → 예상 8-10MB (50-70% 절감)
- [ ] **WebP 포맷 변환**: JPEG → WebP (추가 20-30% 절감)
- [ ] **Service Worker**: 오프라인 지원
- [ ] **Critical CSS**: 초기 렌더링 최적화

## 📱 브라우저 지원

- ✅ Chrome (최신)
- ✅ Firefox (최신)
- ✅ Safari (최신)
- ✅ Edge (최신)
- ✅ Mobile Safari (iOS 12+)
- ✅ Chrome Mobile (Android 8+)

## 🔧 개발 가이드

### npm 스크립트

```bash
npm run help           # 사용 가능한 스크립트 목록
npm run build          # 프로덕션 빌드
npm run dev            # 개발 서버 실행
npm run stats          # 파일 크기 확인
npm run backup:images  # 이미지 백업
npm run optimize:images # 이미지 최적화
```

### CSS 개발

- 개발 시: `css/style.css` 수정
- 빌드 후: `css/style.min.css` 자동 생성
- HTML은 `style.min.css` 참조 (프로덕션)

### JavaScript 개발

- 개발 시: `js/main.js` 수정
- 빌드 후: `js/main.min.js` 자동 생성
- HTML은 `main.min.js` 참조 (프로덕션)

## 🐛 트러블슈팅

### 빌드 오류

```bash
# npm 의존성 재설치
rm -rf node_modules package-lock.json
npm install
```

### 이미지 최적화 실패

```bash
# macOS에서 sips 명령이 작동하지 않는 경우
which sips  # /usr/bin/sips 확인

# 수동 최적화
sips -Z 1920 images/your-image.jpg
```

## 📄 라이선스

MIT License - 자세한 내용은 [LICENSE](LICENSE) 파일 참조

## 👤 작성자

**디노 (Dino)**
- AI 교육 전문가
- Email: lionell20@naver.com
- Website: [blog.ai-growth-club.me](https://blog.ai-growth-club.me)

## 🙏 감사의 말

- [Font Awesome](https://fontawesome.com) - 아이콘
- [Pretendard](https://github.com/orioncactus/pretendard) - 한글 폰트
- [Google Fonts](https://fonts.google.com) - 영문 폰트
- [GitHub Pages](https://pages.github.com) - 호스팅

---

⭐ 이 프로젝트가 도움이 되었다면 Star를 눌러주세요!
