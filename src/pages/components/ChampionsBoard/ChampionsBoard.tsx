import { FC, useCallback, useMemo } from "react";
import { Avatar, Box, Typography } from "@mui/material/";
import { FormattedMessage } from "react-intl";
import championsBoardMessages from "./ChampionsBoard.messages";
import useChampionsBoard from "./ChampionsBoard.biz";
import { IChampionsBoardProps } from "./ChampionsBoard.types";
import Ability from "../../../components/Ability";
import useChampionsBoardStyle from "./ChampionsBoard.style";
import { useChampionsContext } from "../../ChampionsSquad.context";

const ChampionsBoard: FC<IChampionsBoardProps> = (props) => {
  const classes = useChampionsBoardStyle();
  const { selectedChampions } = useChampionsContext();
  const { removeChampion, sumAbility, abilitiesNameArray } =
    useChampionsBoard(props);

  const fullChampions = useCallback(
    (index: number) => (
      <Box display={"flex"} flexDirection={"column"} alignItems={"center"}>
        <Avatar
          key={selectedChampions?.[index]?.id}
          className={classes.avatar}
          src={selectedChampions?.[index]?.image}
          alt={"avatar"}
          sx={{ height: 88, width: 88 }}
          onClick={() => removeChampion(index)}
        />
        <Typography
          className={classes.removeChampion}
          color={"white"}
          position={"relative"}
          bottom={54}
          variant={"body2"}
          fontWeight={700}
        >
          <FormattedMessage {...championsBoardMessages.removeChampion} />
        </Typography>
      </Box>
    ),
    [classes.avatar, classes.removeChampion, removeChampion, selectedChampions]
  );

  const emptyChampion = useMemo(
    () => (
      <Box
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        height={88}
        marginX={0.5}
        width={88}
        borderRadius={"50%"}
        border={"1px solid #217AFF"}
      >
        <FormattedMessage {...championsBoardMessages.questionMark} />
      </Box>
    ),
    []
  );

  const abilities = useMemo(() => {
    return abilitiesNameArray.map((name: string) => (
      <Ability name={name} score={sumAbility(name)} />
    ));
  }, [abilitiesNameArray, sumAbility]);

  return (
    <Box
      paddingTop={3}
      paddingBottom={4}
      display={"flex"}
      alignItems={"center"}
      flexDirection={"column"}
    >
      <Typography variant={"h5"} fontWeight={700}>
        {selectedChampions.length === 6 ? (
          <FormattedMessage {...championsBoardMessages.fullChampsTitle} />
        ) : (
          <FormattedMessage {...championsBoardMessages.NoChapmsTitle} />
        )}
      </Typography>
      <Box display={"flex"} paddingY={2}>
        {Array(6)
          .fill("")
          .map((_, index: number) => {
            return !!selectedChampions?.[index]
              ? fullChampions(index)
              : emptyChampion;
          })}
      </Box>
      <Box display={"flex"} marginTop={3}>
        {abilities}
      </Box>
    </Box>
  );
};

export default ChampionsBoard;
