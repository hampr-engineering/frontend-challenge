import './App.css'
import 'bootstrap/dist/css/bootstrap.css';
import Chip from '@mui/material/Chip';
import Checkbox from '@mui/material/Checkbox';
import jsonData from './data/characters.json'
import logo from './img/Mortal-Kombat-Logo.png'
import { useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import type { Character } from './types';
const data: Character[] = jsonData as Character[]

function App() {
  const [selectedCharacters, setSelectedCharacters] = useState(data);
  const [selectedTag, setSelectedTag] = useState(null);
  const [searchText, setSearchText] = useState('');
  const tags = getAllTags(data);
  const loaded = false;
  
  function getAllTags(data) {
    let result = [];
    data?.forEach((charactor) => {
      charactor?.tags?.forEach((tag) => {
        result.push(tag.tag_name);
      })
    });
    return result.filter((value, index, self) => {
      return self.indexOf(value) === index
    });
  }
  
  function getAbilityScoreWithColor(hero, ability) {
    let score = hero.abilities.find((searchAbility) => { return searchAbility.abilityName == 'Mobility' ? searchAbility.abilityScore : ''; })?.abilityScore;    
    return parseInt(score) >= 10 ? <label className="text-red">{score}</label> : score;
  };

  function selectTag(selectedTagName:string) {
    if (selectedTag == selectedTagName) {
      setSelectedTag(null);
      searchCharacter(null);
    } else {
      setSelectedTag(selectedTagName);
      searchCharacter(selectedTagName);
    }
  }

  function changeSearch() {    
    setSearchText(document.getElementById("js-searchbox")?.value);
    searchCharacter(selectedTag);
  }

  function searchCharacter(tagName) {
    let characters =  data;
    if (searchText != "") {
      characters =  characters.filter((charactor, index) => {
        return charactor.name.toLowerCase().includes(document.getElementById("js-searchbox").value.toLowerCase());
      });
    }
    if (tagName != null) {
      characters =  characters.filter((charactor, index) => {
        if (charactor?.tags?.find((tag) => { return tag.tag_name == tagName })) {
          return true;
        }
      });
    }
    setSelectedCharacters(characters);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h5>Select your squad to defend your earthrealm</h5>
      </header>
      <div className="mt-2">
        <TextField id="js-searchbox" label="Search Your Character" onKeyPress={changeSearch} />
      </div>
      <div className="mt-2">
        {tags.map((tag, index) => (
          <Chip key={index} label={tag} color={selectedTag == tag ? "primary" : "default"} onClick={function() {selectTag(tag)}} />
        ))}
      </div>
      <div>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>#</TableCell>
                <TableCell>Character</TableCell>
                <TableCell>Tags</TableCell>
                <TableCell>Power</TableCell>
                <TableCell>Mobility</TableCell>
                <TableCell>Technique</TableCell>
                <TableCell>Survivability</TableCell>
                <TableCell>Energy</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {selectedCharacters.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    <Checkbox/>
                  </TableCell>
                  <TableCell>
                    {row.name}
                  </TableCell>
                  <TableCell>{row?.tags?.map((tag, index) => { return <Chip key={index} label={tag.tag_name}/>; })}</TableCell>
                  <TableCell>{getAbilityScoreWithColor(row, 'Power')}</TableCell>
                  <TableCell>{getAbilityScoreWithColor(row, 'Mobility')}</TableCell>
                  <TableCell>{getAbilityScoreWithColor(row, 'Technique')}</TableCell>
                  <TableCell>{getAbilityScoreWithColor(row, 'Survivability')}</TableCell>
                  <TableCell>{getAbilityScoreWithColor(row, 'Energy')}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
      </TableContainer>
      </div>
    </div>
  )
}

export default App

