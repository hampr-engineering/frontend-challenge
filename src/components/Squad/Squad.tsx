import React, {useState} from 'react'
import type { Character } from '../../types'
import {Avatar} from '@mui/material'
import squadStyles from './Squad.module.css'

const Squad = ({selectedChampions}) => {

  return (
    <div className={squadStyles.squad}>
      {selectedChampions.map((char)=> (
        <Avatar key={char.id} alt={char.name} src={char.thumbnail} style={{
          border: '0.3px solid #227aff'
        }}/>
      ))}
    </div>
  )
}

export default Squad