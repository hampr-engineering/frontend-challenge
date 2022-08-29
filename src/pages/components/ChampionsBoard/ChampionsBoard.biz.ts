import { useMemo } from "react";
import { useChampionsContext } from "../../ChampionsSquad.context";
import { Character, CharacterAbility } from "../../ChampionsSquad.types";
import { IChampionsBoardProps } from "./ChampionsBoard.types";

const useChampionsBoard = (props: IChampionsBoardProps) => {
  const { selectedChampions, setSelectedChampions } = useChampionsContext();

  const removeChampion = (index: number) => {
    let newSelectedChampions = selectedChampions.filter(
      (item: Character) => item.id !== selectedChampions[index].id
    );
    setSelectedChampions(newSelectedChampions);
  };

  const abilitiesArray = useMemo(
    () => selectedChampions.flatMap((item: Character) => item.abilities),
    [selectedChampions]
  );

  const selectedChampionsCount = useMemo<number>(
    () => selectedChampions.length,
    [selectedChampions]
  );

  const abilitiesAverage = (ability: string) => {
    let sum = abilitiesArray
      .filter((_ability: CharacterAbility) => _ability.abilityName === ability)
      .reduce((total, current) => total + current.abilityScore, 0);

    return Number((sum / selectedChampionsCount).toFixed(2));
  };

  const abilitiesNameArray = useMemo(() => {
    let abilitiesNameArray = abilitiesArray.flatMap(
      (_item) => _item.abilityName
    );
    let uniqueSetName = new Set(abilitiesNameArray);
    return Array.from(uniqueSetName);
  }, [abilitiesArray]);

  return {
    removeChampion,
    abilitiesArray,
    abilitiesNameArray,
    abilitiesAverage,
  };
};

export default useChampionsBoard;
