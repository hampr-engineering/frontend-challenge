import React, {FC} from 'react'
import {Avatar} from '@mui/material'
import squadStyles from './Squad.module.css'
import { CHAR_TITLES } from '../../constants/common'
import {Character} from '../../types'

interface ISquad {
  selectedChampions: Character[]
}

const Squad : FC<ISquad> = ({selectedChampions}) => {

  const numbers = [
    65,
    70,
    44,
    4,
    10
  ]

  return (
    <div>
      <div className={squadStyles.title}>Your champions!</div>
      <div className={squadStyles.squad}>
        {selectedChampions.map((char)=> (
          <Avatar key={char.id} alt={char.name} src={char.thumbnail} style={{
            border: '0.3px solid #227aff',
            width: '60px',
            height: '60px'
          }}/>
        ))}
      </div>
      <div className={squadStyles.abilities}>
        <div className={squadStyles.list}>{CHAR_TITLES.map((title) => {
          return <span>{title}</span>
        })}</div>
        <div className={squadStyles.numbers}>{numbers.map((title) => {
          return <span>{title}</span>
        })}</div>
        <div className={squadStyles.leftLign}/>
        <div className={squadStyles.rightLign}/>
      </div>
    </div>
  )
}

export default Squad