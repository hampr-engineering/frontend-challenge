import { useQuery, UseQueryOptions } from "react-query";
import { getAllCharaters } from "./characterService";
import { Character, GetAllCharatersRequest } from "./characterType";

export const useGetAllCharacters = (
  payload: GetAllCharatersRequest,
  options?: UseQueryOptions<
    Array<Character>,
    unknown,
    Array<Character>,
    Array<string | GetAllCharatersRequest>
  >
) => {
  return useQuery(
    ["all-characters", payload],
    () => getAllCharaters(payload),
    options
  );
};
