import { useState, useMemo, useCallback } from "react";
import jsonData from "./data/characters.json";
import type { Character } from "./types";
import "./css/globals.css";
import logo from "./img/Mortal-Kombat-Logo.png";
import styled from "@emotion/styled";
import getCharacterTags from "./utils/get-character-tags";
import Header from "./components/Ui/Header/Header";
import ActiveSquadResult from "./components/ActiveSquadResult/ActiveSquadResult";
import FilterBySearch from "./components/FilterBySearch/FilterBySearch";
import FilterByTags from "./components/FilterByTags/FilterByTags";
import SelectionTable from "./components/SelectionTable/SelectionTable";

// i'd put data & tags inside App component with useEffect if coming from get request
const data: Character[] = jsonData as Character[];
const tags = getCharacterTags(data);

function App() {
  const [activeSquad, setActiveSquad] = useState<Character[]>([]);

  const [searchTerm, setSearchTerm] = useState("");

  const [activeTags, setActiveTags] = useState<string[]>([]);

  // current active page for table pagination
  const [currentPage, setCurrentPage] = useState(1);

  const handleSelectSquad = (character: Character) => {
    // is already selected?
    const isSelected =
      activeSquad.findIndex(
        (selectedCharacter) => selectedCharacter.id === character.id
      ) !== -1;

    // remove it from array
    if (isSelected) {
      const filteredSquad = activeSquad.filter(
        (selectedCharacter) => selectedCharacter.id !== character.id
      );
      setActiveSquad(filteredSquad);

      return;
    }

    // prevent user selecting more than 6 champions
    if (activeSquad.length >= 6) {
      alert("You are now unstoppable! (Max characters: 6)");

      return;
    }

    setActiveSquad([...activeSquad, character]);
  };

  // basic reset for no result found feedback
  const handleResetFilter = () => {
    setSearchTerm("");
    setActiveTags([]);
  };

  // prioritize filter by search before filter by tags
  const handleFilterBySearch = useCallback(() => {
    let term = searchTerm.toLowerCase();

    if (searchTerm === "") {
      return data;
    }

    const filteredCharacters = data.filter((character) => {
      return (
        // either character name comparison
        character.name.toLowerCase().includes(term) ||
        // or tags comparison
        (character.tags &&
          character.tags.some(({ tag_name }) =>
            tag_name.toLowerCase().includes(term)
          ))
      );
    });

    return filteredCharacters;
  }, [searchTerm]);

  // filter tags based on filtered by search returned value
  const handleFilterByTags = useMemo(() => {
    const filteredBySearch = handleFilterBySearch();

    // if none active simply return to filtered by search returned value
    if (activeTags.length === 0) {
      return filteredBySearch;
    }

    const filteredByTags = filteredBySearch.filter((character) => {
      return (
        character.tags &&
        character.tags.some(({ tag_name }) => activeTags.includes(tag_name))
      );
    });

    return filteredByTags;
  }, [handleFilterBySearch, activeTags]);

  // final list to be handled by pagination
  const filteredCharacters = handleFilterByTags;

  return (
    <AppWrapper>
      <Header logoSrc={logo} />

      <ActiveSquadResult
        activeSquad={activeSquad}
        setActiveSquad={setActiveSquad}
        handleSelectSquad={handleSelectSquad}
      />

      <FilterBySearch
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        setCurrentPage={setCurrentPage}
      />

      <FilterByTags
        tags={tags}
        activeTags={activeTags}
        setActiveTags={setActiveTags}
        setCurrentPage={setCurrentPage}
      />

      <SelectionTable
        filteredCharacters={filteredCharacters}
        activeSquad={activeSquad}
        handleSelectSquad={handleSelectSquad}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        handleResetFilter={handleResetFilter}
      />
    </AppWrapper>
  );
}

const AppWrapper = styled.main`
  max-width: 1920px;
  margin: 0 auto;
  padding: 90px 60px;
`;

export default App;
