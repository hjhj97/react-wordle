import WordInputList from "../components/WordInputList";
import Keyboard from "../components/Keyboard";

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
