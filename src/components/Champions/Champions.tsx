import { Box } from '@mui/material';
import { useChampions } from '../../hooks/useChampions';
import { Character } from '../../types';
import { Champion } from './Champion';

/** Displays a maximum of 6 Champions */

export const Champions = ({
  characters,
  setChampions,
}: {
  characters: Character[];
  setChampions: any;
}) => {
  const { updateChampions } = useChampions({ characters, setChampions });

  return (
    <Box sx={{ marginBottom: 4 }}>
      {characters.length > 0 ? (
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
          {characters.slice(0, 6).map(character => (
            <Champion character={character} onClick={updateChampions} />
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
