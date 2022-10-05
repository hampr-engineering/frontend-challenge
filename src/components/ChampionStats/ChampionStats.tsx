import { Box } from '@mui/material';
import { Character } from '../../types';
import { ChampionStat } from './ChampionStat';

export const ChampionStats = ({ champions }: { champions: Character[] }) => (
  <Box sx={{marginBottom: 4}}>
    <Box sx={{ display: 'flex', justifyContent: 'center', margin: 2 }}>
      <ChampionStat metric="Power" champions={champions} />
      <ChampionStat metric="Mobility" champions={champions} hasBorderRight />
      <ChampionStat metric="Technique" champions={champions} hasBorderRight />
      <ChampionStat metric="Survivability" champions={champions} />
      <ChampionStat metric="Energy" champions={champions} />
    </Box>
    <Box sx={{ color: '#666666', fontSize: '12px' }}>* Totals as average for squad</Box>
  </Box>
);
