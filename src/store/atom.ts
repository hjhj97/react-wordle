import { atom, selector } from "recoil";

export const keyState = atom({
  key: "keyState",
  default: [] as string[],
});

export const uniqueKeyState = selector({
  key: "uniqueKeyState",
  get: ({ get }) => {
    const key = get(keyState);
    const uniqueKey = [...new Set<any>(key)];

    return {
      uniqueKey,
    };
  },
});
