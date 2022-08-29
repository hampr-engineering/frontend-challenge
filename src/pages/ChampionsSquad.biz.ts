import { useState } from "react";
import { Character } from "./ChampionsSquad.types";
import { IChampionsContext } from "./ChampionsSquad.context";

export const useChampionsSquad = () => {
  const [selectedChampions, setSelectedChampions] = useState<Character[]>([]);
  const [search, setSearch] = useState<string>("");
  const [tagFilter, setTagFilter] = useState<string[]>([]);

  const championsContextValue: IChampionsContext = {
    selectedChampions,
    setSelectedChampions,
    search,
    setSearch,
    tagFilter,
    setTagFilter,
  };

  return {
    championsContextValue,
  };
};
