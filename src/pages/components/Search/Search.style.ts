import { createUseStyles } from "react-jss";

const useSearchStyle = createUseStyles(
  () => ({
    search: {
      width: 500,
      borderRadius: 10,
    },
  }),
  { name: "characters-table" }
);

export default useSearchStyle;
