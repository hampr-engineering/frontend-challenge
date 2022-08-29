import type { CharacterAbility } from '../types'

const abilityScoreHelper = (abilities: CharacterAbility[], abilityFilter: string) => {
  return (
    abilities.find((ability: CharacterAbility) => {
      if (ability.abilityName === abilityFilter) {
        return true
      }
      return false
    })?.abilityScore || 0
  )
}

export default abilityScoreHelper
