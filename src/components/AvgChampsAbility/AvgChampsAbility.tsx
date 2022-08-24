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
  console.log(charactersSelected)
  const average: number =
    charactersSelected.reduce(
      (total: number, next: Character) => total + abilityScoreHelper(next.abilities, ability),
      0,
    ) / charactersSelected.length

  return <div>{average.toFixed(2)}</div>
}
export default AvgChampAbility
