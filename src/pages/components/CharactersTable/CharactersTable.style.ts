import { createUseStyles } from "react-jss";

const useCharactersTableStyle = createUseStyles(
  () => ({
    tag: {
      marginRight: 12,
    },
  }),
  { name: "characters-table" }
);

export default useCharactersTableStyle;
