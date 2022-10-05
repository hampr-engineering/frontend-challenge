import { TextField } from '@mui/material';

export const Search = ({ handleNameOnChange, filterState }: any) => {
  return (
    <TextField
      id="search-characters-filter"
      label="Search characters..."
      variant="outlined"
      onChange={handleNameOnChange}
      value={filterState.name}
      sx={{ width: '500px', margin: 4 }}
    />
  );
};
