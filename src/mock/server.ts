export function checkWordServer(payload: string) {
  return new Promise((resolve, reject) => {
    const answer = "apple";
    const result: boolean[] = [];
    for (let i = 0; i < 5; i++) {
      result[i] = answer[i] === payload[i];
    }

    setTimeout(() => {
      resolve(result);
    }, 1000);
  });
}
