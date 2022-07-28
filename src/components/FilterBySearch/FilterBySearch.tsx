import FilterBySearchWrapper from "./style";
import IconSearch from "./IconSearch";

type FilterBySearchProps = {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  setCurrentPage: (page: number) => void;
};

const FilterBySearch = (props: FilterBySearchProps) => {
  const { searchTerm, setSearchTerm, setCurrentPage } = props;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);

    // bring user back to page 1 when searching
    setCurrentPage(1);
  };

  return (
    <FilterBySearchWrapper>
      <IconSearch />
      <input
        className="input"
        type="text"
        placeholder="Search Characters..."
        value={searchTerm}
        onChange={handleChange}
      />
    </FilterBySearchWrapper>
  );
};

export default FilterBySearch;
