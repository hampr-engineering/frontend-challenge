import * as React from 'react'
import './SelectedChamps.css'
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
    </div>
  )
}

export default SelectedChamps
