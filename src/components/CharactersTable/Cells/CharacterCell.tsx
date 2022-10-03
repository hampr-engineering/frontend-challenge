import { Box, Checkbox, TableCell } from "@mui/material";
import { Character } from "../../../types";

export const CharacterCell = ({character}: {character: Character}) => (
  <TableCell component="th" scope="row" sx={{display: 'flex', alignItems: 'center'}}>
    <Checkbox inputProps={{ 'aria-label': 'Character name' }} sx={{marginRight: 1}} />
    <Box component="img" src={character.image} alt={character.name} sx={{width: '40px', height: '40px', borderRadius: '40px', border: '1px solid #217AFF', marginRight: 2}} />
    {character.name}
  </TableCell>
);
