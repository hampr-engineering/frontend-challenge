import React from 'react'
import type { Character } from '../../types'
import abilityScoreHelper from '../../helpers/AbilityScoreHelper'

const AvgChampAbility = ({
  charactersSelected,
  ability,
}: {
  charactersSelected: Character[]
  ability: string
}) => {
  const countCharacters = charactersSelected.length
  const average: number =
    charactersSelected.reduce(
      (total: number, next: Character) => total + abilityScoreHelper(next.abilities, ability),
      0,
    ) / countCharacters

  return <div>{countCharacters ? average.toFixed(2) : 0.0}</div>
}
export default AvgChampAbility
