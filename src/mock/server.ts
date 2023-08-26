import { WORD_LENGTH } from "../constants/word";

export type AnswerStatus = "EXACT" | "INCLUDE" | "NONE";

export function checkWordServer(payload: string) {
  return new Promise<AnswerStatus[]>((resolve) => {
    const answer = "apple";
    const result: AnswerStatus[] = [];
    for (let i = 0; i < WORD_LENGTH; i++) {
      if (answer[i] === payload[i]) {
        result[i] = "EXACT";
      } else if (answer.includes(payload[i])) {
        result[i] = "INCLUDE";
      } else {
        result[i] = "NONE";
      }
    }

    setTimeout(() => {
      resolve(result);
    }, 1000);
  });
}
