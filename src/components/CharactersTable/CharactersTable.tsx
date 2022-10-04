import { Table, TableBody, TableHead, TableRow } from '@mui/material';
import { Character } from '../../types';
import { StyledCell } from './Cells/StyledCell';
import { CharactersTableRow } from './CharactersTableRow';

// TODO: get rid of line under header

export const CharactersTable = ({characters}: {characters: Character[]}) => {
  return (
    <Table aria-label="characters table" sx={{ maxWidth: '1080px', margin: 1 }}>
      <TableHead>
        <TableRow>
          <StyledCell>Character</StyledCell>
          <StyledCell>Tags</StyledCell>
          <StyledCell>Power</StyledCell>
          <StyledCell>Mobility</StyledCell>
          <StyledCell>Technique</StyledCell>
          <StyledCell>Survivability</StyledCell>
          <StyledCell>Energy</StyledCell>
        </TableRow>
      </TableHead>
      <TableBody sx={{ boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.25)', borderRadius: '10px' }}>
        {characters.map(character => (
          <CharactersTableRow character={character} />
        ))}
      </TableBody>
    </Table>
  );
};
