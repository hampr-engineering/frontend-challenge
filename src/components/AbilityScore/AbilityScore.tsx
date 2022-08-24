import * as React from 'react'
import Tags from '../Tags/Tags'
import type { Character, CharacterAbility, CharacterTag } from '../../types'
import './AbilityScore.css'
import abilityScoreHelper from '../../helpers/AbilityScoreHelper'

const AbilityScore = ({
  abilities,
  abilityFilter,
}: {
  abilities: CharacterAbility[]
  abilityFilter: string
}) => {
  const score: number = abilityScoreHelper(abilities, abilityFilter)

  return <div className={score === 10 ? 'perfect-score' : ''}>{score}</div>
}

export default AbilityScore
