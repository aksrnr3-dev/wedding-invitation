# 신형 ♥ 여울 모바일 청첩장

GitHub Pages / Cloudflare Pages / VS Code Live Server에서 바로 동작하는 정적 사이트입니다.

## 사진만 바꾸는 방법
`images` 폴더 안의 아래 파일을 **같은 파일명으로 덮어쓰기** 하면 됩니다.

- `main.jpg` : 첫 화면 + 마지막 화면 메인 사진 (세로 권장)
- `wide.jpg` : 중간 풀 사진 (가로 권장)
- `photo01.jpg` ~ `photo08.jpg` : 갤러리 사진

권장:
- 세로: 1200 x 1600~1800px
- 가로: 1600 x 1067px 정도
- JPG 품질 80~90%
- 각 파일 500KB~1.5MB 사이면 모바일 로딩에 유리

## 배포
1. 이 폴더 전체를 새 GitHub repository에 업로드
2. Cloudflare Pages에서 repository 연결
3. Build command 비워두기
4. Output directory `/` 또는 프로젝트 루트
5. 배포

## 아직 직접 수정해야 하는 1곳
`index.html`의 HEART 섹션 계좌번호는 현재 `은행명 000-0000-0000` placeholder입니다.
실제 계좌만 한 번 입력하면 이후에는 사진만 바꿔도 됩니다.

## 구조
- Cover
- Invitation
- Full photo
- Wedding Day + calendar + countdown
- Gallery + fullscreen viewer
- Location + map links
- Heart/account accordion
- Ending photo
- Share / URL copy
