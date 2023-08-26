# React Wordle

5글자로 이루어진 영단어를 6번의 기회 이내에 맞춰야 하는 [wordle](https://www.nytimes.com/games/wordle/index.html) 게임을 만들어 보았습니다.

## Used Stack

- `node.js v18.17.0`
- `react 18`
- `typescript`
- `styled-component`
- `axios`
- `recoil`

## Install Dependency

```
npm install
```

## Run Development Env.

```
npm run start
```

## 시연

<div align="center">

![시연](https://github.com/hjhj97/blog.gatsby/assets/37234431/f08ac13d-f309-4c90-9fe7-a71654f2019a)

</div>

## 기능

- 사용자는 5글자로 이루어진 영단어를 입력합니다.(실제 서비스에서는 사전에 등재된 영단어만 입력 가능하지만, 이 프로젝트에서는 별도로 유효성을 검증하진 않았습니다)
- 입력된 단어를 서버로 전송하여 정답 여부를 체크합니다. 정답 단어에 포함되어 있는 알파벳일 경우에 주황색으로 색칠되며, 자리까지 일치할 경우에는 초록색으로 표시됩니다. 두 조건 모두 만족하지 않으면 어두운 회색으로 표시됩니다.
- 사용자가 입력한 알파벳은 하단에 표시됩니다.
- 정답을 맞출 경우 alert창이 표시되며 게임이 종료됩니다.

## 개선하고 싶은 점

- 사용한 키를 실제 서비스처럼 키보드 모양으로 배치하여 사용하지 않은 키와 구별되도록 만들기
