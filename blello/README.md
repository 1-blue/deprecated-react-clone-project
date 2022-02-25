# 👉 blello 👈
`React` + `Typescript` + `recoil` + `styled-components` + `react-beatiful-dnd`로 만든 간단한 [trello](https://trello.com) 클론 사이트

+ 참고
  1. [노마드 코더 강의](https://nomadcoders.co/react-masterclass)
  2. [boiler-plate](https://github.com/1-blue/boiler-plate-react-typescript)

## 🖼️ 실행 이미지 🖼️
> 보드와 카드 CRUD 및 이동 가능

1. 실행 이미지
<img src="https://user-images.githubusercontent.com/63289318/155665659-aab42701-d183-44fa-a844-c5faf942b9c5.gif" width="100%" alt="blello 실행 gif" />

2. dark-mode
<img src="https://user-images.githubusercontent.com/63289318/155666496-cc007e91-ab7f-4e3c-9de7-1bdc9c163f22.jpg" width="100%" alt="blello dark mode image" />

3. white-mode
<img src="https://user-images.githubusercontent.com/63289318/155666604-e9b77ee9-baff-4d71-b96a-6b5537941df9.jpg" width="100%" alt="blello white mode image" />

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

## 🚀 배포
백엔드 부분이 없고 간단한 프로젝트이기 때문에 `GitHub-Pages`를 이용해서 배포함

[blello](https://1-blue.github.io/react-clone-project/)

> 주의) 하나의 레포지토리에 모든 결과물을 올릴 예정이라 다른 사이트가 나올 수 있음

## 📌 부족한 점 📌
1. 보드가 많아질 경우 가로 배치에 대한 문제 존재
2. 드래그&드랍으로 보드, 카드 제거하는 기능 없음