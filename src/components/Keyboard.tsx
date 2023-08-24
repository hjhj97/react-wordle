import { useRecoilValue } from "recoil";
import { uniqueKeyState } from "../store/atom";

function Keyboard() {
  const { uniqueKey } = useRecoilValue(uniqueKeyState);

  return (
    <div>
      Used Key
      <ul>
        {uniqueKey.map((item: string) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default Keyboard;
