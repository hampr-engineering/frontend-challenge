import { useState } from "react";
import { Character } from "./ChampionsSquad.types";
import { IChampionsContext } from "./ChampionsSquad.context";

export const useChampionsSquad = () => {
  const [selectedChampions, setSelectedChampions] = useState<Character[]>([]);
  const [search, setSearch] = useState<string>("");

  const championsContextValue: IChampionsContext = {
    selectedChampions,
    setSelectedChampions,
    search,
    setSearch,
  };

  return {
    championsContextValue,
  };
};
