import logo from './logo.svg'
import './App.css'
import jsonData from './data/characters.json'
import type { Character } from './types'
import Header from './components/Header/Header'
import CharactersSearch from './components/CharactersSearch/CharactersSearch'
import Squad from './components/Squad/Squad'
import {useState} from 'react'
const data: Character[] = jsonData as Character[]

function App() {
  const [selectedChampions, setSelectedChampions] = useState<Character[]>([])

  const handleChampionSelect = (ev, char) => {
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
