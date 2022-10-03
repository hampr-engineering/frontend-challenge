import { TableCell } from '@mui/material';
import { useMemo } from 'react';
import { Character, CharacterAbility } from '../../../types';
import { StyledCell } from './StyledCell';

export const AbilityCell = ({
  abilityName,
  abilities,
}: {
  abilityName: CharacterAbility['abilityName'];
  abilities: Character['abilities'];
}) => {
  const abilityScore = useMemo(() => {
    const currentAbility = abilities.find(ability => ability.abilityName.toUpperCase() === abilityName.toUpperCase());

    if (!currentAbility) return '-';

    return currentAbility.abilityScore;
  }, [abilities, abilityName]);

  const textColor = abilityScore === 10 ? 'red' : 'black';

  return (
    <StyledCell component="th" scope="row" sx={{color: textColor}}>
      {abilityScore}
    </StyledCell>
  );
};
