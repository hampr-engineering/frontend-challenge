import logo from './logo.svg'
import './App.css'
import jsonData from './data/characters.json'
import type { Character } from './types'
import Header from './components/Header/Header'
import CharactersSearch from './components/CharactersSearch/CharactersSearch'
const data: Character[] = jsonData as Character[]

function App() {
  return (
    <div className="App">
      <Header />
      <CharactersSearch />
    </div>
  )
}

export default App
