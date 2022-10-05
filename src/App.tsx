import './App.css';
import jsonData from './data/characters.json';
import type { Character } from './types';
import { CharactersTable } from './components/CharactersTable';
import { Box } from '@mui/material';
import { Champions } from './components/Champions';
import { ChampionStats } from './components/ChampionStats';
import { useState } from 'react';
import { Header } from './components';
import { Filters } from './components/Filters';
import { useFilteredCharacters } from './hooks';
const data: Character[] = jsonData as Character[];

function App() {
  const startingChampions = data.slice(0, 6);
  const [champions, setChampions] = useState(startingChampions as Character[]);

  const {filteredCharacters, handleNameOnChange, filterState} = useFilteredCharacters();

  return (
    <div className="App">
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
        }}
      >
        <Header />
        <h1>Your Champions</h1>
        <Champions champions={champions} setChampions={setChampions} />
        <ChampionStats champions={champions} />
        <Filters handleNameOnChange={handleNameOnChange} filterState={filterState} />
        <CharactersTable characters={filteredCharacters} champions={champions} setChampions={setChampions} />
      </Box>
    </div>
  );
}

export default App;
