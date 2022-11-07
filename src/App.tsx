import { Box, Pagination } from "@mui/material";
import { useGetAllCharacters } from "./modules/characters/characterHooks";
import { Loader } from "./uikit/components/Loader";
import Bg from "../src/img/Mortal-Kombat-Logo.png";

function App() {
  const { data, isLoading } = useGetAllCharacters({
    page: 1,
    limit: 20,
  });

  if (isLoading) {
    return <Loader />;
  }

  return (
    <Box width="100%" height="100vh">
      <img src={Bg} alt="mortal-kombat-logo" width="1000" height="500" />
      <h1>{JSON.stringify(data)}</h1>
      <Pagination count={10} />
    </Box>
  );
}

export default App;
