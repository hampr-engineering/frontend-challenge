import { Box } from '@mui/material';
import { useMemo } from 'react';
import { Character } from '../../types';

export const ChampionStat = ({
  metric,
  characters,
  hasBorderRight,
}: {
  metric: 'Power' | 'Mobility' | 'Technique' | 'Survivability' | 'Energy';
  characters: Character[];
  hasBorderRight?: boolean;
}) => {
  const teamAverage = useMemo(() => {
    const total = characters.reduce((totalScore, character) => {
      const ability = character.abilities.find(
        ability => ability.abilityName.toUpperCase() === metric.toUpperCase()
      );

      if (!ability || !ability.abilityScore) return totalScore;

      return totalScore + ability.abilityScore;
    }, 0);

    if (total === 0) return 0;

    const average = total / characters.length;
    return average.toFixed(2);
  }, [characters, metric]);

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        padding: 2,
        borderRight: hasBorderRight ? '1px solid black' : 'none',
      }}
    >
      <Box>{metric}</Box>
      <Box sx={{ fontWeight: 700, fontSize: '20px' }}>{teamAverage}</Box>
    </Box>
  );
};
