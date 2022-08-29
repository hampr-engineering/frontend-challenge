import { FC, Dispatch, useContext, createContext, SetStateAction } from "react";
import { Character } from "./ChampionsSquad.types";

export type IChampionsContext = {
  selectedChampions: Character[];
  setSelectedChampions: Dispatch<SetStateAction<Character[]>>;
  search: string;
  setSearch: Dispatch<SetStateAction<string>>;
  tagFilter: string[];
  setTagFilter: Dispatch<SetStateAction<string[]>>;
};

type IChampionsProvider = FC<{ value: IChampionsContext }>;

const ChampionsContext = createContext<IChampionsContext>({
  selectedChampions: [],
  setSelectedChampions: () => undefined,
  search: "",
  setSearch: () => undefined,
  tagFilter: [],
  setTagFilter: () => undefined,
});

export const useChampionsContext = () =>
  useContext<IChampionsContext>(ChampionsContext);

export const ChampionsProvider: IChampionsProvider = ({ ...props }) => (
  <ChampionsContext.Provider {...{ ...props }} />
);
