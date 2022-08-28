import { Box, Avatar } from "@mui/material";
import DragonAvatar from "../assets/images/Mortal-Kombat-Logo.png";
import ChampionsBoard from "./components/ChampionsBoard";
import Chip from "./components/Tags";
import CharactersTable from "./components/CharactersTable";

const ChampionsSquad = () => {
  return (
    <Box height={"100vw"}>
      <Box
        height={76}
        width={"100%"}
        bgcolor={"black"}
        display={"flex"}
        position={"sticky"}
        justifyContent={"center"}
      >
        <Avatar
          src={DragonAvatar}
          alt={"dragon-avatar"}
          sx={{ height: 88, width: 88 }}
        />
      </Box>
      <ChampionsBoard />
      <Chip />
      <CharactersTable />
    </Box>
  );
};

export default ChampionsSquad;
