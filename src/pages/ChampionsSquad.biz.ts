import { useState } from "react";
import { Character } from "./ChampionsSquad.types";
import { IChampionsContext } from "./ChampionsSquad.context";

export const useChampionsSquad = () => {
  const [selectedChampions, setSelectedChampions] = useState<Character[]>([]);
  const championsContextValue: IChampionsContext = {
    selectedChampions,
    setSelectedChampions,
  };

  return {
    championsContextValue,
  };
};
