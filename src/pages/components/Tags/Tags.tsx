import cls from "classnames";
import useTags from "./Tags.biz";
import useTagsStyle from "./Tags.style";
import { Chip, Box } from "@mui/material";
import { useChampionsContext } from "../../ChampionsSquad.context";

const Tags = () => {
  const classes = useTagsStyle();
  const { tagsArray, onTagClick } = useTags();
  const { tagFilter } = useChampionsContext();

  return (
    <Box marginX={7} marginBottom={7}>
      {tagsArray.map((tag: string, index: number) => {
        return (
          tag && (
            <Chip
              // Use classname utility to join the classNames conditionally
              className={cls(classes.tag, {
                [classes.selectedTag]: tagFilter.some(
                  (item: string) => item === tag
                ),
              })}
              key={index}
              label={tag}
              color={"primary"}
              variant={"outlined"}
              onClick={() => onTagClick(tag)}
            />
          )
        );
      })}
    </Box>
  );
};

export default Tags;
