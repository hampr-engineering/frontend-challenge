import React from 'react'
import logo from './logo.svg'
import './App.css'
import LogoHeader from './components/LogoHeader/LogoHeader'
import SearchBox from './components/SearchBox/SearchBox'
import CharactersTable from './components/CharactersTable/CharactersTable'
import TagsFilter from './components/TagsFilter/TagsFilter'
import jsonData from './data/characters.json'
import type { Character, CharacterAbility, CharacterTag } from './types'
const data: Character[] = jsonData as Character[]

function App() {
  return (
    <div className='App'>
      <LogoHeader />
      <SearchBox />
      <TagsFilter characters={data} />
      <CharactersTable characters={data} />
    </div>
  )
}

export default App
