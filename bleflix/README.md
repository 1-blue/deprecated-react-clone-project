# 👉 bleflix 👈
`React` + `Typescript` + `recoil` + `styled-components` + `react-query` + `framer-motion`으로 만든 간단한 [netflix](https://www.netflix.com) 클론 사이트

+ 참고
  1. [노마드 코더 강의](https://nomadcoders.co/react-masterclass)
  2. [boiler-plate](https://github.com/1-blue/boiler-plate-react-typescript)
  3. [movieDB( movie api 얻어온 웹페이지 )](https://www.themoviedb.org/?language=ko)

## 🖼️ 이미지 🖼️
0. 메인페이지 이미지

|black 모드|white모드|
|:-:|:-:|
|<img src="https://user-images.githubusercontent.com/63289318/157345592-4d69fd1e-0236-4b35-8d5d-6c154b1a7023.jpg" width="100%" />|<img src="https://user-images.githubusercontent.com/63289318/157345599-2191764d-0bd3-4c80-ac87-0c47c7f7eaf3.jpg" width="100%" />|

1. 페이지 이동 실행
<img src="https://user-images.githubusercontent.com/63289318/157345003-aa36de72-2a14-405f-ae1b-c2a273ff5612.gif" width="100%" alt="페이지 이동 gif" />

2. `carousel` 실행
<img src="https://user-images.githubusercontent.com/63289318/157345082-26bb913e-2b47-4817-b912-468e85ccfaaa.gif" width="100%" alt="carousel 실행 gif" />

3. 반응형 실행
<img src="https://user-images.githubusercontent.com/63289318/157345090-40867d0c-d31a-4a52-8ad8-0f140387b70c.gif" width="100%" alt="반응형 실행 gif" />

4. 검색 실행
<img src="https://user-images.githubusercontent.com/63289318/157345097-8772285a-ca90-4ed6-a7c6-0747b4d82983.gif" width="100%" alt="검색 실행 gif" />

## 🔎 가이드 라인 🔍
```bash
cd blello

# 패키지 설치
npm install

# 개발 모드 실행
npm run dev

# 빌드
npm run build

# GitHub Pages로 배포
# 이 부분을 정상적으로 실행하려면 package.json에서 homepage와 webpack.config.ts의 PUBLIC_URL에 대한 환경변수값을 알맞게 변경시켜줘야함
npm run deploy
```

> `.env.development`, `.env.production` 생성 후 `API_KEY`를 넣어줘야함

## 🚀 배포 🚀
백엔드 부분이 없고 간단한 프로젝트이기 때문에 `GitHub-Pages`를 이용해서 배포함

[belflix]](https://1-blue.github.io/react-clone-project/)

> 주의) 하나의 레포지토리에 모든 결과물을 올릴 예정이라 다른 사이트가 나올 수 있음

## 📌 부족한 점 📌
1. 검색창이외 클릭 시 검색창 닫기 기능 없음
2. `api-key`를 `.env`로 코드상에서는 숨겼지만 네트워크탭에서 확인하면 보임
3. white theme는 조금 어색해보임