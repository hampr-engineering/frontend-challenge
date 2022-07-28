import SelectionTableWrapper from "./style";
import type { Character, CharacterAbility } from "../../types";
import Button from "../Ui/Button/Button";
import Avatar from "../Ui/Avatar/Avatar";
import getPageNumbers from "../../utils/get-page-numbers";

type SelectionTableProps = {
  filteredCharacters: Character[];
  activeSquad: Character[];
  handleSelectSquad: (characters: Character) => void;
  currentPage: number;
  setCurrentPage: (page: number) => void;
  handleResetFilter: () => void;
};

const SelectionTable = (props: SelectionTableProps) => {
  const {
    currentPage,
    setCurrentPage,
    filteredCharacters,
    activeSquad,
    handleSelectSquad,
    handleResetFilter,
  } = props;

  const getAbilityScore = (
    abilities: CharacterAbility[],
    ability: string
  ): React.ReactNode => {
    const score = abilities.find(
      ({ abilityName }) => abilityName === ability
    )?.abilityScore;

    if (score && score > 9) {
      return <span className="score score--red">{score}</span>;
    }

    return <span className="score">{score}</span>;
  };

  const isCharacterActive = (id: number) => {
    const isActive = activeSquad.findIndex((character) => character.id === id);

    return isActive !== -1;
  };

  // start pagination handler
  const charactersPerPage = 30;

  const indexOfLastCharacter = currentPage * charactersPerPage;

  const indexOfFirstCharacter = indexOfLastCharacter - charactersPerPage;

  const renderCharacters = filteredCharacters.slice(
    indexOfFirstCharacter,
    indexOfLastCharacter
  );

  const pageNumbers = getPageNumbers(
    filteredCharacters.length,
    charactersPerPage
  );

  const isPageNumberActive = (number: number) => {
    return currentPage === number;
  };

  const handlePagination = (number: number) => {
    setCurrentPage(number);

    window.scrollTo(0, 0);
  };

  return (
    <SelectionTableWrapper>
      {!!renderCharacters.length && (
        <table className="table">
          <thead className="table__thead">
            <tr className="row">
              <th className="th th--characters">Characters</th>
              <th className="th">Tags</th>
              <th className="th th--center">Power</th>
              <th className="th th--center">Mobility</th>
              <th className="th th--center">Technique</th>
              <th className="th th--center">Survivability</th>
              <th className="th th--center">Energy</th>
            </tr>
          </thead>

          <tbody className="table__tbody">
            {renderCharacters.map((character) => (
              <tr
                key={character.id}
                onClick={() => handleSelectSquad(character)}
                className={
                  isCharacterActive(character.id) ? "row row--active" : "row"
                }
              >
                <td className="col col--characters">
                  <div className="flex-wrap">
                    <input
                      className="checkbox"
                      type="checkbox"
                      checked={isCharacterActive(character.id)}
                      readOnly
                    />
                    <Avatar
                      src={character.thumbnail || character.image}
                      name={character.name}
                      size="sm"
                      title={character.quote}
                    />
                    <span className="name" title={character.name}>
                      {character.name}
                    </span>
                  </div>
                </td>
                <td className="col col--tags">
                  <div className="flex-wrap">
                    {character.tags &&
                      character.tags.map((tag) => (
                        <Button key={tag.slot}>{tag.tag_name}</Button>
                      ))}
                  </div>
                </td>
                <td className="col col--abilities">
                  {getAbilityScore(character.abilities, "Power")}
                </td>
                <td className="col col--abilities">
                  {getAbilityScore(character.abilities, "Mobility")}
                </td>
                <td className="col col--abilities">
                  {getAbilityScore(character.abilities, "Technique")}
                </td>
                <td className="col col--abilities">
                  {getAbilityScore(character.abilities, "Survivability")}
                </td>
                <td className="col col--abilities">
                  {getAbilityScore(character.abilities, "Energy")}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {!renderCharacters.length && (
        <div className="feedback">
          <p>No characters found 😱</p>

          <span className="clear-btn" role="button" onClick={handleResetFilter}>
            Start over
          </span>
        </div>
      )}

      <div className="pagination">
        {pageNumbers.map((pageNumber) => (
          <button
            key={pageNumber}
            onClick={() => handlePagination(pageNumber)}
            disabled={isPageNumberActive(pageNumber)}
            className={
              isPageNumberActive(pageNumber)
                ? "pagination__each-btn pagination__each-btn--active"
                : "pagination__each-btn"
            }
          >
            {pageNumber}
          </button>
        ))}
      </div>
    </SelectionTableWrapper>
  );
};

export default SelectionTable;
