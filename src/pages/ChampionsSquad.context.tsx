import { FC, Dispatch, useContext, createContext, SetStateAction } from "react";
import { Character } from "./ChampionsSquad.types";

export type IChampionsContext = {
  selectedChampions: Character[];
  setSelectedChampions: Dispatch<SetStateAction<Character[]>>;
};

type IChampionsProvider = FC<{ value: IChampionsContext }>;

const ChampionsContext = createContext<IChampionsContext>({
  selectedChampions: [],
  setSelectedChampions: () => undefined,
});

export const useChampionsContext = () =>
  useContext<IChampionsContext>(ChampionsContext);

export const ChampionsProvider: IChampionsProvider = ({ ...props }) => (
  <ChampionsContext.Provider {...{ ...props }} />
);
