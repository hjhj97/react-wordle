import React, { useState } from "react";
import WordInput from "./WordInput";
import styled from "styled-components";
import { useRecoilState } from "recoil";
import { keyState } from "../store/atom";

const WordInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0;
`;

function WordInputList() {
  const [focusedIdx, setFocusedIdx] = useState<number>(0);
  const [key, setKey] = useRecoilState<string[]>(keyState);
  const checkWord = (input: string) => {
    setFocusedIdx((prev) => prev + 1);
    for (let i = 0; i < 5; i++) {
      setKey((prev) => [...prev, input[i]]);
    }
  };

  return (
    <WordInputContainer>
      {[...Array(6)].map((_, idx: number) => (
        <WordInput key={idx} isFocusNow={focusedIdx === idx} checkWord={checkWord} />
      ))}
    </WordInputContainer>
  );
}

export default WordInputList;
