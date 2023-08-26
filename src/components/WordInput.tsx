import { useRef, useState, KeyboardEvent } from "react";
import styled from "styled-components";
import { AnswerStatus, checkWordServer } from "../mock/server";
import { WORD_LENGTH } from "../constants/word";

const BoxWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
  height: auto;
`;
const Box = styled.p<{ isFocused: boolean; answerStatus?: AnswerStatus }>`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  width: 70px;
  height: 70px;
  border: none;
  border-radius: 10px;
  margin: 20px 0;
  background-color: ${(props) =>
    props.isFocused
      ? "#ccc"
      : props.answerStatus === "EXACT"
      ? "yellowgreen"
      : props.answerStatus === "INCLUDE"
      ? "orange"
      : "#eee"};
`;

function WordInput({ checkWord, isFocusNow }: { checkWord: (input: string) => void; isFocusNow: boolean }) {
  const [inputWord, setInputWord] = useState<string>("");
  const [answer, setAnswer] = useState<AnswerStatus[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  const deleteChar = () => {
    setInputWord((prev) => prev.slice(0, prev.length - 1));
  };

  const checkAnswer = async () => {
    const res = await checkWordServer(inputWord);
    if (res) {
      setAnswer(res);
      if (res.every((item) => item === "EXACT")) {
        alert("Correct!");
      }
    }
    checkWord(inputWord);
  };

  const onKeyDown = async (e: KeyboardEvent<HTMLInputElement>) => {
    if (!isFocusNow) return;

    if (e.key === "Backspace") {
      if (inputWord.length > 0) {
        deleteChar();
      } else return;
    } else if (e.key === "Enter") {
      if (inputWord.length === WORD_LENGTH) {
        await checkAnswer();
      } else {
        alert(`${WORD_LENGTH}글자를 모두 입력해주세요.`);
      }
    } else if (e.key >= "a" && e.key <= "z") {
      if (inputWord.length < WORD_LENGTH) {
        setInputWord((prev) => prev + e.key);
      }
    } else return;
  };

  return (
    <BoxWrapper
      onClick={() => {
        inputRef.current?.focus();
      }}
    >
      {[...Array(WORD_LENGTH)].map((_, idx) => (
        <Box key={idx} onKeyDown={onKeyDown} tabIndex={0} isFocused={isFocusNow} answerStatus={answer[idx]}>
          {inputWord[idx]}
        </Box>
      ))}
    </BoxWrapper>
  );
}

export default WordInput;
