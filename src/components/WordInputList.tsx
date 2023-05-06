import React, { useState } from "react";
import WordInput from "./WordInput";
import styled from "styled-components";

const WordInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0;
`;

function WordInputList() {
  const [focusedIdx, setFocusedIdx] = useState<number>(0);
  const checkWord = () => {
    setFocusedIdx((prev) => prev + 1);
    console.log(focusedIdx);
  };

  return (
    <WordInputContainer>
      {[...Array(6)].map((item, idx) => (
        <WordInput key={idx} isFocusNow={focusedIdx === idx} checkWord={checkWord} />
      ))}
    </WordInputContainer>
  );
}

export default WordInputList;
