import axios from "axios";

const BASE_URL = process.env.RICKMORTY_API;

export async function fetchCharacters() {

  if (!BASE_URL) {
    throw new Error("RICKMORTY_API not defined");
  }

  const response = await axios.get(`${BASE_URL}/character`);

  return response.data.results;
}