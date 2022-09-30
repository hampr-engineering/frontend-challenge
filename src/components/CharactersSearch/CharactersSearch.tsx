import React, {FC, useState} from 'react'
import type { Character } from '../../types'
import {TextField, InputAdornment, Checkbox, Avatar, Chip, Pagination} from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import jsonData from '../../data/characters.json'
import charStyles from './CharactersSearch.module.css'
import CheckIcon from '@mui/icons-material/Check'
import { CHAR_TITLES, ALL_TAGS } from '../../constants/common'

const data: Character[] = jsonData as Character[]

interface ICharactersSearch {
  selectedChampions: Character[]
  handleChampionSelect: (ev: React.ChangeEvent<HTMLInputElement>, char: Character) => void
}

const CharactersSearch : FC<ICharactersSearch> = ({handleChampionSelect, selectedChampions}) => {

  const [searchQuery, setSearchQuery] = useState('')
  const [searchResults, setSearchResults] = useState(data)
  const [selectedTags, setSelectedTags] = useState<string[]>([])
  const [page, setPage] = useState(1)

  const handleChangePage = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value)
  }

  console.log(selectedChampions)

  const filterData = (searchString : string, tags: string[]) => {
    const filteredData = data.filter((char) => {
      if(tags.length){
        if(char.tags?.find((tag)=> tags.includes(tag.tag_name.toLowerCase()))){
          return char.name.toLowerCase().includes(searchString)
        }
        else return false
      }
      else return char.name.toLowerCase().includes(searchString)
    })
    console.log(filteredData)
    setSearchResults(filteredData)
    setSelectedTags(tags)
    setPage(1)
  }

  const handleInput = (ev : React.ChangeEvent<HTMLInputElement>) => {
    const searchString = ev.target.value.trim().toLowerCase()
    filterData(searchString, selectedTags)
    setSearchQuery(ev.target.value)
  }

  const handleTagSelect = (tag: string) => {
    let updatedSelection = []
    if (selectedTags.includes(tag)){
      updatedSelection = selectedTags.filter(t => t !== tag)
    }
    else {
      updatedSelection = [...selectedTags, tag]
    }
    filterData(searchQuery, updatedSelection)
  }

  const handleCheckboxDisable = (char: Character) => {
    if(selectedChampions.length === 6){
      return !selectedChampions.find(({id} : {id: number}) => id === char.id);
    }
    return false
  }

  const renderTags = () => (
    ALL_TAGS.map((tag, index) => {
      if (selectedTags.includes(tag.toLowerCase())){
        return (
          <div key={index}>
            <Chip icon={<CheckIcon fontSize={'small'} />} onClick={() => handleTagSelect(tag.toLowerCase())} clickable label={tag} color="primary"/>
          </div>
        )
      }
      else{
        return (
          <div key={index}>
            <Chip onClick={() => handleTagSelect(tag.toLowerCase())} clickable label={tag} color="primary" variant="outlined"/>
          </div>
        )
      }
    })
  )

  const renderRows = () => (
    searchResults?.slice((page - 1) * 10, (page - 1) * 10 + 10).map((char: Character)=> (
      <div key={char.id} className={charStyles.row}>
        <div className={charStyles.character}>
          <Checkbox disabled={handleCheckboxDisable(char)}
                    onChange={(ev) => handleChampionSelect(ev, char)} sx={{color: '#227aff'}} color='primary'/>
          <Avatar alt={char.name} src={char.thumbnail} style={{
            border: '0.3px solid #227aff'
          }}/>
          <span>{char.name}</span>
        </div>

        <div className={charStyles.tags}>
          {char.tags?.map((tag, index)=>(
            <Chip key={index} label={tag.tag_name} color="primary" variant="outlined"/>
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
      <div className={charStyles.searchContainer}>
        <TextField className={charStyles.searchBar} value={searchQuery} onInput={(ev: React.ChangeEvent<HTMLInputElement>) => handleInput(ev)} placeholder='Search Characters...' InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}/>
        <div className={charStyles.line}/>
      </div>
      <div className={charStyles.allTags}>
        {renderTags()}
        <span className={charStyles.clearButton} onClick={() => filterData(searchQuery, [])}>Clear all</span>
      </div>
      <div className={charStyles.charListContainer}>
        <div className={charStyles.charTitles}>
          <span>Characters</span>
          <span className={charStyles.tagsTitle}>Tags</span>
          <div className={charStyles.titleList}>{CHAR_TITLES.map((title) => {
            return <span>{title}</span>
          })}</div>
        </div>
        <div className={charStyles.charList}>
          {searchResults.length ? renderRows() : null}
        </div>
      </div>

      {
        searchResults.length ?
          <Pagination className={charStyles.pagination} page={page} onChange={handleChangePage} count={Math.ceil(searchResults.length / 10) } variant="outlined" color="primary" />
          : null
      }


    </div>
  )
}

export default CharactersSearch