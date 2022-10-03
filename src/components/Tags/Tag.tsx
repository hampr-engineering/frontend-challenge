import { Chip } from "@mui/material";
import { useMemo } from "react";
import { CharacterTag } from "../../types";

export const Tag = ({tag}: {tag: CharacterTag}) => {
  const capitalisedName = useMemo(() => tag.tag_name.charAt(0).toUpperCase() + tag.tag_name.slice(1), [tag.tag_name]);

  return <Chip label={capitalisedName} key={tag.tag_name} sx={{ marginRight: 1 }} />;
};
