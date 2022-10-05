import { Box } from '@mui/material';
import { Character } from '../../types';
import { ChampionStat } from './ChampionStat';

export const ChampionStats = ({ characters }: { characters: Character[] }) => (
  <Box sx={{marginBottom: 4}}>
    <Box sx={{ display: 'flex', justifyContent: 'center', margin: 2 }}>
      <ChampionStat metric="Power" characters={characters} />
      <ChampionStat metric="Mobility" characters={characters} hasBorderRight />
      <ChampionStat metric="Technique" characters={characters} hasBorderRight />
      <ChampionStat metric="Survivability" characters={characters} />
      <ChampionStat metric="Energy" characters={characters} />
    </Box>
    <Box sx={{ color: '#666666', fontSize: '12px' }}>* Totals as average for squad</Box>
  </Box>
);
