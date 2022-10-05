import './App.css';
import jsonData from './data/characters.json';
import type { Character } from './types';
import { CharactersTable } from './components/CharactersTable';
import { Box } from '@mui/material';
import { Champions } from './components/Champions';
import { ChampionStats } from './components/ChampionStats';
import { useState } from 'react';
import { Header } from './components';
const data: Character[] = jsonData as Character[];

function App() {
  const startingChampions = data.slice(0, 6);
  const [champions, setChampions] = useState(startingChampions as Character[]);

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
        <Champions characters={champions} setChampions={setChampions} />
        <ChampionStats characters={champions} />
        <CharactersTable characters={data} champions={champions} setChampions={setChampions} />
      </Box>
    </div>
  );
}

export default App;
