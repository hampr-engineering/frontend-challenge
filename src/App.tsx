import React, {useState} from 'react'
import Header from './components/Header/Header'
import CharactersSearch from './components/CharactersSearch/CharactersSearch'
import Squad from './components/Squad/Squad'
import type { Character } from './types'
import './App.css'

function App() {
  const [selectedChampions, setSelectedChampions] = useState<Character[]>([])

  const handleChampionSelect = (ev : React.ChangeEvent<HTMLInputElement>, char : Character) => {
    ev.target.checked ?
      setSelectedChampions([...selectedChampions, char]) :
      setSelectedChampions(selectedChampions.filter((selectedChar) => selectedChar.id !== char.id))
  }

  return (
    <div className="App">
      <Header />
      <Squad selectedChampions={selectedChampions}/>
      <CharactersSearch selectedChampions={selectedChampions} handleChampionSelect={handleChampionSelect}/>
    </div>
  )
}

export default App
