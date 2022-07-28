import FilterByTagsWrapper from "./style";
import Button from "../Ui/Button/Button";

type FilterByTagsProps = {
  tags: string[];
  activeTags: string[];
  setActiveTags: (tags: string[]) => void;
  setCurrentPage: (page: number) => void;
};

const FilterByTags = (props: FilterByTagsProps) => {
  const { tags, activeTags, setActiveTags, setCurrentPage } = props;

  const handleSelectTag = (tag: string) => {
    // bring user back to page 1 when selecting tag
    setCurrentPage(1);

    if (activeTags.includes(tag)) {
      // is already there? remove it from array
      const filteredTags = activeTags.filter(
        (currentTag) => currentTag !== tag
      );

      setActiveTags(filteredTags);

      return;
    }

    // otherwise add it
    setActiveTags([...activeTags, tag]);
  };

  return (
    <FilterByTagsWrapper>
      <ul className="tags">
        {tags.map((tag) => (
          <li key={tag} className="tags__each">
            <Button
              active={activeTags.includes(tag)}
              onClick={() => handleSelectTag(tag)}
            >
              {tag}
            </Button>
          </li>
        ))}

        {!!activeTags.length && (
          <li
            className="tags__each tags__each--clear-btn"
            role="button"
            onClick={() => setActiveTags([])}
          >
            Clear all
          </li>
        )}
      </ul>
    </FilterByTagsWrapper>
  );
};

export default FilterByTags;
