import * as React from 'react'
import './SelectedChamps.css'
import AvgChampAbility from '../AvgChampsAbility/AvgChampsAbility'
import type { Character } from '../../types'

const SelectedChamps = ({ charactersSelected }: { charactersSelected: Character[] }) => {
  return (
    <div className='selected-champs-container'>
      <div className='champs-text'>Your Champions!</div>

      <div className='selected-characters-image-container'>
        {charactersSelected.map((character: Character, i: number) => {
          return (
            <img
              src={character.image}
              key={character.name + '-' + i}
              alt={'image of' + character.name}
              className='selected-character-image'
            />
          )
        })}
      </div>
      <table className='ability-average-table'>
        <tr>
          <th>Power</th>
          <th>Mobility</th>
          <th>Technique</th>
          <th>Survivability</th>
          <th>Energy</th>
        </tr>
        <tr>
          <td>
            <AvgChampAbility charactersSelected={charactersSelected} ability={'Power'} />
          </td>
          <td>
            <AvgChampAbility charactersSelected={charactersSelected} ability={'Mobility'} />
          </td>
          <td>
            <AvgChampAbility charactersSelected={charactersSelected} ability={'Technique'} />
          </td>
          <td>
            <AvgChampAbility charactersSelected={charactersSelected} ability={'Survivability'} />
          </td>
          <td>
            <AvgChampAbility charactersSelected={charactersSelected} ability={'Energy'} />
          </td>
        </tr>
      </table>
    </div>
  )
}

export default SelectedChamps
