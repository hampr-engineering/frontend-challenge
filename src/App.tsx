import React, { useState } from 'react'
import './App.css'
import LogoHeader from './components/LogoHeader/LogoHeader'
import SelectedChamps from './components/SelectedChamps/SelectedChamps'
import SearchBox from './components/SearchBox/SearchBox'
import CharactersTable from './components/CharactersTable/CharactersTable'
import TagsFilter from './components/TagsFilter/TagsFilter'
import jsonData from './data/characters.json'
import type { Character } from './types'
const data: Character[] = jsonData as Character[]

function App() {
  const [charactersSelected, setCharactersSelected] = useState([])
  const handleCharacterSelect = (charIndex: number[]) => {
    const charactersInfo: Character[] = []

    charIndex.forEach((index) => {
      charactersInfo.push(data[index])
    })

    setCharactersSelected(charactersInfo)
  }

  return (
    <div className='App'>
      <LogoHeader />
      <SelectedChamps charactersSelected={charactersSelected} />
      <SearchBox />
      <TagsFilter characters={data} />
      <CharactersTable characters={data} handleCharacterSelect={handleCharacterSelect} />
    </div>
  )
}

export default App
