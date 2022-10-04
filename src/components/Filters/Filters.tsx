import { Box } from '@mui/material';
import { Search } from './Search';


// TODO: fill in types
export const Filters = ({handleNameOnChange, filterState}: {handleNameOnChange: any, filterState: any}) => (
  <Box>
    <Search handleNameOnChange={handleNameOnChange} filterState={filterState} />
  </Box>
);
