import { createUseStyles } from "react-jss";

const useTagsStyle = createUseStyles({
  tag: {
    margin: 4,
    cursor: "pointer",
    fontSize: 18,
    background: "white",
  },
  selectedTag: {
    background: "#1976d2",
    color: "white",
    borderColor: "white",
    "&:hover": {
      background: "#0e5db7 !important",
    },
  },
});

export default useTagsStyle;
