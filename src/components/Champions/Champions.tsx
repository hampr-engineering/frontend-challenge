import { Box } from '@mui/material';
import { useChampions } from '../../hooks/useChampions';
import { Character } from '../../types';
import { Champion } from './Champion';

/** Displays a maximum of 6 Champions */

export const Champions = ({
  champions,
  setChampions,
}: {
  champions: Character[];
  setChampions: any;
}) => {
  const { updateChampions } = useChampions({ champions, setChampions });

  return (
    <Box sx={{ marginBottom: 4 }}>
      {/* Only displays first six champions, ideally the updateChampion fn would not allow more than 6 to be added */}
      {champions.length > 0 ? (
        <Box>
          <Box
            sx={{
              color: '#666666',
              fontSize: '12px',
              marginBottom: 2,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Box>Select champion to remove from your team</Box>
          </Box>
          {champions.slice(0, 6).map(champion => (
            <Champion champion={champion} onClick={updateChampions} />
          ))}
        </Box>
      ) : (
        <Box
          sx={{
            color: '#666666',
            fontSize: '12px',
            height: '80px',
            marginTop: 3,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Box>No champions currently selected</Box>
        </Box>
      )}
    </Box>
  );
};
