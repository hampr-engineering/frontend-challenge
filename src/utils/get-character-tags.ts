import type { Character } from "../types";

const getCharacterTags = (characters: Character[]): string[] => {
  const tags: string[] = [];

  characters.forEach((characters) => {
    // is tags prop there?
    if (characters.tags) {
      characters.tags.forEach((tag) => {
        // is tag name not there yet? otherwise add it
        if (!tags.includes(tag.tag_name)) {
          tags.push(tag.tag_name);
        }
      });
    }
  });

  // return tags with no duplicate
  return tags;
};

export default getCharacterTags;
