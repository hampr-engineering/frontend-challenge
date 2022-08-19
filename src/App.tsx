import React from 'react'
import logo from './logo.svg'
import './App.css'
import CharactersTable from './components/CharactersTable/CharactersTable'
import jsonData from './data/characters.json'
import type { Character } from './types'
const data: Character[] = jsonData as Character[]

function App() {
  return (
    <div className='App'>
      <CharactersTable characters={data} />
    </div>
  )
}

export default App
