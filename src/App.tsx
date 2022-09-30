import React, {useState} from 'react'
import Header from './components/Header/Header'
import CharactersSearch from './components/CharactersSearch/CharactersSearch'
import Squad from './components/Squad/Squad'
import type { Character } from './types'
import './App.css'

function App() {
  const [selectedChampions, setSelectedChampions] = useState<Character[]>([])
  const [selectedChampionIds, setSelectedChampionIds] = useState<number[]>([])

  const handleChampionRemove = (id : number) => {
    setSelectedChampions(selectedChampions.filter((selectedChar) => selectedChar.id !== id))
    setSelectedChampionIds(selectedChampionIds.filter((selectedCharId) => selectedCharId !== id))
  }

  const handleChampionSelect = (ev : React.ChangeEvent<HTMLInputElement>, char : Character) => {
    if(ev.target.checked){
      setSelectedChampions([...selectedChampions, char])
      setSelectedChampionIds([...selectedChampionIds, char.id])
    }
    else {
      setSelectedChampions(selectedChampions.filter((selectedChar) => selectedChar.id !== char.id))
      setSelectedChampionIds(selectedChampionIds.filter((selectedCharId) => selectedCharId !== char.id))
    }
  }

  return (
    <div className="App">
      <Header />
      <Squad selectedChampions={selectedChampions} handleChampionRemove={handleChampionRemove}/>
      <CharactersSearch selectedChampionIds={selectedChampionIds} selectedChampions={selectedChampions} handleChampionSelect={handleChampionSelect}/>
    </div>
  )
}

export default App
