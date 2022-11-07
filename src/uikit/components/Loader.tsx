import { CircularProgress } from "@mui/material";
import Box from "@mui/material/Box";

export const Loader = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      width="100%"
      height="5rem"
    >
      <CircularProgress />
    </Box>
  );
};
