import axios from "axios";

const BASE_URL = process.env.RICKMORTY_API;

export async function fetchCharacters(page = 1, name = "") {

  if (!BASE_URL) {
    throw new Error("RICKMORTY_API not defined");
  }

  try {

    const response = await axios.get(`${BASE_URL}/character`, {
      params: {
        page,
        name
      }
    });

    return {
      results: response.data.results,
      info: response.data.info
    };

  } catch (error) {

    throw new Error("API request failed");

  }

}


export async function fetchCharacterById(id) {

  if (!BASE_URL) {
    throw new Error("RICKMORTY_API not defined");
  }

  try {

    const response = await axios.get(`${BASE_URL}/character/${id}`);

    return response.data;

  } catch (error) {

    throw new Error("Character not found");

  }

}