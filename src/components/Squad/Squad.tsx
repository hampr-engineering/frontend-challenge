import React, {FC, useEffect, useState} from 'react'
import {Avatar} from '@mui/material'
import squadStyles from './Squad.module.css'
import {ABILITY_AVERAGES} from '../../constants/common'
import {AbilityName, AverageAbility, Character, CharacterAbility} from '../../types'

interface ISquad {
  selectedChampions: Character[]
  handleChampionRemove: (id: number) => void
}

const Squad: FC<ISquad> = ({selectedChampions, handleChampionRemove}) => {
  const [abilityAverages, setAbilityAverages] = useState<AverageAbility>(ABILITY_AVERAGES)

  useEffect(() => {
    const updateAbilitiesAverage = {...ABILITY_AVERAGES}
    if(selectedChampions.length > 0){
      selectedChampions.forEach((char: Character) => {
        char.abilities.forEach((ability: CharacterAbility) => {
          updateAbilitiesAverage[ability.abilityName] = updateAbilitiesAverage[ability.abilityName] ?
            updateAbilitiesAverage[ability.abilityName] + ability.abilityScore :
            ability.abilityScore
        })
      })
      Object.entries(updateAbilitiesAverage).forEach(([key, value] ) => {
        updateAbilitiesAverage[key as AbilityName] = Math.round(value / selectedChampions.length * 10) / 10
      });
      setAbilityAverages(updateAbilitiesAverage)
    }
    else {
      setAbilityAverages(ABILITY_AVERAGES)
    }
  }, [selectedChampions])

  return (
    <div>
      <div className={squadStyles.title}>
        {selectedChampions.length ? 'Your champions!' : 'Select your squad to defend earthrealm'}
      </div>
      <div className={squadStyles.squad}>
        {selectedChampions.map((char) => (
          <div onClick={() => handleChampionRemove(char.id)} className={squadStyles.avatar}>
            <Avatar key={char.id} alt={char.name} src={char.thumbnail} style={{
              border: '0.3px solid #227aff',
              width: '60px',
              height: '60px'
            }}/>
            <div className={squadStyles.remove}><span>Remove</span></div>
          </div>
        ))}
      </div>
      <div className={squadStyles.abilities}>
        <div className={squadStyles.list}>
          {Object.entries(abilityAverages).map(([key, value], index)=> (
            <div key={index} className={squadStyles.results}>
              <span>{key}</span>
              <span className={squadStyles.numbers}>{selectedChampions.length ? value :  '-' }</span>
            </div>

          ))}
        </div>
        <div className={squadStyles.leftLign}/>
        <div className={squadStyles.rightLign}/>
      </div>
    </div>
  )
}

export default Squad