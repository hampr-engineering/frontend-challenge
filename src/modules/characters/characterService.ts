import { fetcher } from "../../shared/fetcher";
import { Character } from "../../types";
import { GetAllCharatersRequest } from "./characterType";

export const getAllCharaters = (payload: GetAllCharatersRequest) => {
  return fetcher<Array<Character>>(
    `http://localhost:3001/characters?_page=${payload.page}&_limit=${payload.limit}`
  );
};
