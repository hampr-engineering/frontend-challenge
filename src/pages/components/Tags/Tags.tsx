import { Chip, Box } from "@mui/material";
import useTags from "./Tags.biz";
import useTagsStyle from "./Tags.style";

const Tags = () => {
  const classes = useTagsStyle();
  const { tagsArray } = useTags();

  return (
    <Box paddingX={4} marginBottom={7}>
      {tagsArray.map((tag: string, index: number) => {
        return (
          tag && (
            <Chip
              key={index}
              className={classes.tag}
              color={"primary"}
              label={tag}
              variant={"outlined"}
            />
          )
        );
      })}
    </Box>
  );
};

export default Tags;
