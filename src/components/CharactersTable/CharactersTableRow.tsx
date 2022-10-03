import { TableRow } from '@mui/material';
import { Character } from '../../types';
import { AbilityCell, CharacterCell, TagCell } from './Cells';

export const CharactersTableRow = ({ character }: { character: Character }) => {
  return (
    <TableRow key={character.name} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
      <CharacterCell character={character} />
      <TagCell tags={character.tags} />
      <AbilityCell abilityName="Power" abilities={character.abilities} />
      <AbilityCell abilityName="Mobility" abilities={character.abilities} />
      <AbilityCell abilityName="Survivability" abilities={character.abilities} />
      <AbilityCell abilityName="Technique" abilities={character.abilities} />
      <AbilityCell abilityName="Energy" abilities={character.abilities} />
    </TableRow>
  );
};
