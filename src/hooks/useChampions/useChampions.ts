import { useCallback } from 'react';
import { Character } from '../../types';

export const useChampions = ({
  champions,
  setChampions,
}: {
  champions: Character[];
  setChampions: any;
}) => {
  const updateChampions = useCallback(
    (character: Character) => {
      const hasChampion = champions.find(
        currentChampion => currentChampion.name.toUpperCase() === character.name.toUpperCase()
      );

      if (hasChampion) {
        setChampions((prevChampions: Character[]) =>
          prevChampions.filter(
            champion => champion.name.toUpperCase() !== character.name.toUpperCase()
          )
        );
        return;
      }

      // TODO: add a check so that max number of champions is 6 and update state so user knows that adding more is not possible

      setChampions((prevChampions: Character[]) => [...prevChampions, character]);
    },
    [champions, setChampions]
  );

  return { updateChampions };
};
