import type { Character, CharacterAbility } from "../../types";
import { AbilityName } from "../../types";
import ActiveSquadResultWrapper from "./style";
import Avatar from "../Ui/Avatar/Avatar";

type ActiveSquadResultProps = {
  activeSquad: Character[];
  handleSelectSquad: (character: Character) => void;
  setActiveSquad: (characters: []) => void;
};

const abilities: AbilityName[] = [
  "Power",
  "Mobility",
  "Technique",
  "Survivability",
  "Energy",
];

const ActiveSquadResult = (props: ActiveSquadResultProps) => {
  const { activeSquad, setActiveSquad, handleSelectSquad } = props;

  const isActiveSquad = !!activeSquad.length;

  const currentAbilities =
    activeSquad && activeSquad.map((character) => character.abilities).flat();

  const getEachTotalScore = (
    abilities: CharacterAbility[],
    ability: string
  ) => {
    // to be incremented by current ability score
    let score = 0;

    abilities.forEach((currentAbility) => {
      if (currentAbility.abilityName === ability) {
        score += currentAbility.abilityScore;
      }
    });

    const total = score / activeSquad.length;

    // has decimal
    if (total % 1 !== 0) {
      return total.toFixed(2);
    }

    // whole number
    return total;
  };

  return (
    <ActiveSquadResultWrapper>
      <h1 className="heading">
        {isActiveSquad
          ? "Your champions!"
          : "Select your squad to defend earthrealm"}
      </h1>

      {isActiveSquad && (
        <ul className="characters">
          {activeSquad.map((character) => (
            <li className="characters__each" key={character.id}>
              <Avatar
                name={character.name}
                src={character.image || character.thumbnail}
                size="lg"
                onClick={() => handleSelectSquad(character)}
                title={`Remove ${character.name}?`}
              />
            </li>
          ))}
        </ul>
      )}

      {isActiveSquad && (
        <span
          className="clear-btn"
          role="button"
          onClick={() => setActiveSquad([])}
        >
          Clear champions
        </span>
      )}

      <div className="metrics">
        {abilities.map((ability) => (
          <div className="metrics__each" key={ability}>
            <span className="label">{ability}</span>

            <span className="value">
              {isActiveSquad
                ? getEachTotalScore(currentAbilities, ability)
                : "-"}
            </span>
          </div>
        ))}

        {isActiveSquad && (
          <span className="metrics__footnote">
            * Totals as average for squad
          </span>
        )}
      </div>
    </ActiveSquadResultWrapper>
  );
};

export default ActiveSquadResult;
