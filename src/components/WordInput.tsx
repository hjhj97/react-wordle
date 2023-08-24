import { useRef, useState, KeyboardEvent } from "react";
import styled from "styled-components";
import { checkWordServer } from "../mock/server";
const BoxWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
  height: auto;
`;
const Box = styled.p<{ isFocused: boolean; isAnswer?: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  width: 70px;
  height: 70px;
  border: none;
  border-radius: 10px;
  margin: 20px 0;
  background-color: ${(props) => (props.isFocused ? "#ccc" : props.isAnswer ? "yellowgreen" : "#eee")};
`;

function WordInput({ checkWord, isFocusNow }: any) {
  const [inputWord, setInputWord] = useState<string>("");
  const [answer, setAnswer] = useState<boolean[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  const onKeyDown = async (e: KeyboardEvent<HTMLInputElement>) => {
    if (!isFocusNow) return;

    if (e.key === "Backspace") {
      if (inputWord.length > 0) {
        setInputWord((prev) => prev.slice(0, prev.length - 1));
      }
    } else if (e.key === "Enter" && inputWord.length === 5) {
      const res = await checkWordServer(inputWord);
      if (res) {
        setAnswer(res);
        if (res.every((item) => item)) {
          alert("Correct!");
        }
      }
      checkWord(inputWord);
    } else if (e.key >= "a" && e.key <= "z") {
      if (inputWord.length < 5) {
        setInputWord((prev) => prev + e.key);
      }
    }
  };

  return (
    <BoxWrapper
      onClick={() => {
        inputRef.current?.focus();
      }}
    >
      {[...Array(5)].map((_, idx: number) => (
        <Box key={idx} onKeyDown={onKeyDown} tabIndex={0} isFocused={isFocusNow} isAnswer={answer[idx]}>
          {inputWord[idx]}
        </Box>
      ))}
    </BoxWrapper>
  );
}

export default WordInput;
