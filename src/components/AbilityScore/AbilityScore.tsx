import * as React from 'react'
import Tags from '../Tags/Tags'
import type { Character, CharacterAbility, CharacterTag } from '../../types'
import './AbilityScore.css'

const AbilityScore = ({
  abilities,
  abilityFilter,
}: {
  abilities: CharacterAbility[]
  abilityFilter: string
}) => {
  const score: number = abilities.find((ability: CharacterAbility) => {
    if (ability.abilityName === abilityFilter) {
      return true
    }
    return false
  }).abilityScore

  return <div className={score === 10 ? 'perfect-score' : ''}>{score}</div>
}

export default AbilityScore
