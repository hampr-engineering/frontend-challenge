import { TableRow } from '@mui/material';
import { useChampions } from '../../hooks/useChampions';
import { Character } from '../../types';
import { AbilityCell, CharacterCell, TagCell } from './Cells';

export const CharactersTableRow = ({
  character,
  champions,
  setChampions,
}: {
  character: Character;
  champions: Character[];
  setChampions: any;
}) => {
  const { updateChampions } = useChampions({ champions, setChampions });

  const isChampion = !!champions.find(
    champion => champion.name.toUpperCase() === character.name.toUpperCase()
  );
  return (
    <TableRow
      key={character.name}
      sx={{
        '&:last-child td, &:last-child th': { border: 0 },
        backgroundColor: isChampion ? '#EDF5FF' : 'inherit',
      }}
    >
      <CharacterCell character={character} checked={isChampion} onClick={updateChampions} />
      <TagCell tags={character.tags} />
      <AbilityCell abilityName="Power" abilities={character.abilities} />
      <AbilityCell abilityName="Mobility" abilities={character.abilities} />
      <AbilityCell abilityName="Survivability" abilities={character.abilities} />
      <AbilityCell abilityName="Technique" abilities={character.abilities} />
      <AbilityCell abilityName="Energy" abilities={character.abilities} />
    </TableRow>
  );
};
