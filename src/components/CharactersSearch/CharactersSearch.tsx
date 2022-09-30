import React, {useState} from 'react'
import type { Character } from '../../types'
import {TextField, InputAdornment, Checkbox, Avatar, Chip, Pagination} from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import jsonData from '../../data/characters.json'
import charStyles from './CharactersSearch.module.css'

const data: Character[] = jsonData as Character[]
const ALL_TAGS = ['Monster', 'Melee', 'Human', 'Ninja', 'Agile', 'God', 'Aerial', 'Strong', 'Grappling', 'Defend', 'Attack', 'Block', 'Mercenary', 'Demon', 'Robot', 'Magic', 'Ranged', 'Alien', 'Ghost', 'Grapple', 'Animal', 'My Team']



const CharactersSearch = () => {

  const [searchQuery, setSearchQuery] = useState('')
  const [searchResults, setSearchResults] = useState(data)


  const handleInput = (ev) => {
    const searchString = ev.target.value.trim().toLowerCase()
    const filteredData = data.filter((char) => {
      let tag
      if(char.tags){
        tag = char.tags.find((tag)=> tag.tag_name.toLowerCase().includes(searchString))
        return tag || char.name.toLowerCase().includes(searchString)
      }
      return char.name.toLowerCase().includes(searchString)
    })
    console.log(filteredData)
    setSearchQuery(ev.target.value)
    setSearchResults(filteredData)
  }

  const renderRows = () => (
    searchResults?.map((char: Character)=> (
        <div key={char.id} className={charStyles.row}>
          <div className={charStyles.character}>
            <Checkbox sx={{color: '#227aff'}} color='primary'/>
            <Avatar alt={char.name} src={char.thumbnail} style={{
              border: '0.3px solid #227aff'
            }}/>
            <span>{char.name}</span>
          </div>

          <div className={charStyles.tags}>
            {char.tags?.map((tag, index)=>(
              <Chip key={index} clickable label={tag.tag_name} color="primary" variant="outlined"/>
            ))}
          </div>
          <div className={charStyles.abilities}>
            {char.abilities?.map((ability, index )=>(
              <span key={index} className={charStyles.score}>{ability.abilityScore}</span>
            ))}
          </div>
        </div>
    ))
  )
  console.log(searchResults)
  return (
    <div>
      <TextField value={searchQuery} onInput={(ev) => handleInput(ev)} placeholder='Search Characters...' InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        ),
      }}/>
      <div className={charStyles.charListContainer}>
        <div className={charStyles.charList}>
          {searchResults.length ? renderRows() : null}
        </div>
      </div>




    </div>
  )
}

export default CharactersSearch