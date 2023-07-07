import axios from "../axios-setup";
import { checkWordServer } from "../mock/server";

export function getWord() {
  return axios.get("/word");
}

export async function checkWord(payload: string) {
  return checkWordServer(payload);
}
