import { useMemo } from "react";
import { Character, CharacterTag } from "../../ChampionsSquad.types";
import charactersJson from "../../../assets/data/characters.json";

const data: Character[] = charactersJson as Character[];
const useTags = () => {
  const tagsArray = useMemo(() => {
    let flatTags = data.flatMap((_item: Character) => _item?.tags);
    return Array.from(
      new Set(flatTags.flatMap((_item: CharacterTag) => _item?.tag_name))
    );
  }, []);

  return { tagsArray };
};

export default useTags;
