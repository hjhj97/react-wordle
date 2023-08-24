# React Wordle

5글자로 이루어진 영단어를 6번의 기회 이내에 맞춰야 하는 [wordle](https://www.nytimes.com/games/wordle/index.html) 게임을 만들어보았습니다.

## Used Stack

- `node.js v18.17.0`
- `react 18`
- `typescript`
- `styled-component`
- `axios`
- `recoil`
- `msw`

## Install Dependency

```
npm install
```

## Run Development Env.

```
npm run start
```

## 기능

- 사용자는 5글자로 이루어진 영단어를 입력합니다.(실제 서비스에서는 사전에 등재된 영단어만 입력 가능하지만, 여기서는 별도로 유효성을 검증하진 않았습니다)
- 입력된 단어를 서버로 전송하여 정답 여부를 체크합니다. 정답 단어의 자리와 일치하면 파란색으로 색칠되며, 그렇지 않으면 회색으로 칠해집니다.
- `msw`를 이용하여 사용자가 입력한 정답을 서버로 전송해 정답을 판별하는 로직을 대체했습니다.
- 정답이 아닌 알파벳은 아래에 표시됩니다.

## 주요 로직

## 고민한 점

## 개선하고 싶은 점
