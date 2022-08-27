import { createUseStyles } from "react-jss";

const useChampionsBoardStyle = createUseStyles({
  avatar: {
    marginLeft: 6,
    marginRight: 6,
    border: "1px solid #217AFF",
    "& :hover": {
      cursor: "pointer",
    },
  },
});

export default useChampionsBoardStyle;
