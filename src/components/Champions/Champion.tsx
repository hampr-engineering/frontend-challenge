import { Box } from '@mui/material';
import { Character } from '../../types';

export const Champion = ({ champion, onClick }: { champion: Character; onClick: any }) => {
  return (
    <Box
      component="button"
      onClick={() => onClick(champion)}
      sx={{ background: 'transparent', border: 'none' }}
    >
      <Box
        component="img"
        src={champion.image}
        sx={{
          width: '80px',
          height: '80px',
          borderRadius: '40px',
          border: '1px solid #217AFF',
          marginRight: 1,
          position: 'relative',
          cursor: 'pointer',
          transition: 'background-color 0.5s opacity 0.5s',
          transitionTimingTunction: 'ease-in',
          '&:hover': {
            backgroundColor: '#217AFF',
            opacity: '0.5',
          },
        }}
      />
    </Box>
  );
};
