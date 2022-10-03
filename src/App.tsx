import logo from './logo.svg'
import './App.css'
import jsonData from './data/characters.json'
import type { Character } from './types'
import { CharactersTable } from './components/CharactersTable'
import { Box } from '@mui/material'
const data: Character[] = jsonData as Character[]

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
      </header>
      <Box sx={{display: 'flex', justifyContent: 'center'}}>
        <CharactersTable data={data} />
      </Box>
    </div>
  )
}

export default App
