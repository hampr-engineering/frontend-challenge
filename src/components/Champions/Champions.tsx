import { Box } from '@mui/material';
import { useChampions } from '../../hooks/useChampions/useChampions';
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
    <Box>
      {characters.slice(0, 6).map(character => (
        <Champion character={character} onClick={updateChampions} />
      ))}
    </Box>
  );
};
