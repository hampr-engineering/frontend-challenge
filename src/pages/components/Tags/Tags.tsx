import { Chip, Box } from "@mui/material";
import { tagArray } from "./Tags.const";
import useTagsStyle from "./Tags.style";

const Tags = () => {
  const classes = useTagsStyle();

  return (
    <Box paddingX={4}>
      {tagArray.map((tag: string, index: number) => (
        <Chip
          key={index}
          className={classes.tag}
          color={"primary"}
          label={tag}
          variant={"outlined"}
        />
      ))}
    </Box>
  );
};

export default Tags;
