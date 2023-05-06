import axios from "../axios";
import { checkWordServer } from "../mock/server";

export function getWord() {
  return axios.get("/word");
}

export async function checkWord(payload: string) {
  return checkWordServer(payload);
}
