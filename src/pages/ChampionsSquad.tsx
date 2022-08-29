import { Box, Avatar } from "@mui/material";
import Chip from "./components/Tags";
import ChampionsBoard from "./components/ChampionsBoard";
import CharactersTable from "./components/CharactersTable";
import { ChampionsProvider } from "./ChampionsSquad.context";
import { useChampionsSquad } from "./ChampionsSquad.biz";
import DragonAvatar from "../assets/images/Mortal-Kombat-Logo.png";

const ChampionsSquad = () => {
  const { championsContextValue: value } = useChampionsSquad();

  return (
    <ChampionsProvider {...{ value }}>
      <Box height={"100vw"} bgcolor={"#F5FDFF"}>
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
    </ChampionsProvider>
  );
};

export default ChampionsSquad;
