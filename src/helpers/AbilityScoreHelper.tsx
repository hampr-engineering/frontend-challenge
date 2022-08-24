import type { Character, CharacterAbility, CharacterTag } from '../types'

const abilityScoreHelper = (abilities: CharacterAbility[], abilityFilter: string) => {
  return abilities.find((ability: CharacterAbility) => {
    if (ability.abilityName === abilityFilter) {
      return true
    }
    return false
  }).abilityScore
}

export default abilityScoreHelper
