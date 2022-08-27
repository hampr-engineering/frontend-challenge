import { FC } from "react";
import type { Character } from "../../ChampionsSquad.types";
import { Avatar, Box, Typography } from "@mui/material/";
import { FormattedMessage } from "react-intl";
import championsBoardMessages from "./ChampionsBoard.messages";
import useChampionsBoard from "./ChampionsBoard.biz";
import { IChampionsBoardProps } from "./ChampionsBoard.types";
import charactersJson from "../../../assets/data/characters.json";
import Ability from "../../../components/Ability";
import useChampionsBoardStyle from "./ChampionsBoard.style";

const data: Character[] = charactersJson as Character[];

const ChampionsBoard: FC<IChampionsBoardProps> = (props) => {
  const {} = useChampionsBoard(props);
  const classes = useChampionsBoardStyle();

  return (
    <Box
      paddingTop={3}
      paddingBottom={4}
      display={"flex"}
      alignItems={"center"}
      flexDirection={"column"}
    >
      <Typography variant={"h5"} fontWeight={700}>
        <FormattedMessage {...championsBoardMessages.NoChapmsTitle} />
      </Typography>
      <Box display={"flex"} paddingY={2}>
        {data.slice(0, 6).map((item: Character) => (
          <Avatar
            className={classes.avatar}
            src={item.image}
            alt={"dragon-avatar"}
            sx={{ height: 88, width: 88 }}
          />
        ))}
      </Box>
      <Box display={"flex"} marginTop={3}>
        <Ability name={"Power"} score={63} />
        <Ability name={"Mobility"} score={63} />
        <Ability name={"Technique"} score={63} />
        <Ability name={"Survivability"} score={63} />
        <Ability name={"Energy"} score={63} />
      </Box>
    </Box>
  );
};

export default ChampionsBoard;
