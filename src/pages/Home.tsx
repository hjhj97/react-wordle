import React from "react";
import WordInputList from "../components/WordInputList";
import Keyboard from "../components/Keyboard";
import { useQuery } from "react-query";
import { getWord } from "../api/word";

function Home() {
  //const { data: word, isLoading } = useQuery<any>("word", getWord);
  return (
    <section>
      <WordInputList />
      <Keyboard />
    </section>
  );
}

export default Home;
