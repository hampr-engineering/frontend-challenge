import React, { useEffect, useState } from 'react'
import './App.css'
import { Checkbox, FormControlLabel } from '@mui/material'
import LogoHeader from './components/LogoHeader/LogoHeader'
import SelectedChamps from './components/SelectedChamps/SelectedChamps'
import SearchBox from './components/SearchBox/SearchBox'
import CharactersTable from './components/CharactersTable/CharactersTable'
import TagsFilter from './components/TagsFilter/TagsFilter'
import jsonData from './data/characters.json'
import type { Character } from './types'
const data: Character[] = jsonData as Character[]
import tagsContext from './context/tagsContext'

function App() {
  const [charactersSelected, setCharactersSelected] = useState([])
  const [rowSelection, setRowSelection] = useState({})
  // will be used to as key to reference row number of character for unticking of checkbox in table
  const [tableRowKeys, setTableRowKeys] = useState([])
  // filter from search box
  const [globalFilter, setGlobalFilter] = useState({ search: '', tags: [], showChampions: false })

  const handleRowSelection = (rowSelect: any) => {
    setRowSelection(rowSelect)
  }

  const handleSearch = (event: any) => {
    setGlobalFilter({ ...globalFilter, search: event.target.value })
  }

  const handleTagsSelection = (tag: any) => {
    const tagIndex = globalFilter.tags.indexOf(tag)
    const newTags = [...globalFilter.tags]

    if (tagIndex === -1) {
      // if tag doesn't exist in global filter add it
      newTags.push(tag)
    } else {
      // will remove it
      newTags.splice(tagIndex, 1)
    }
    setGlobalFilter({ ...globalFilter, tags: newTags })
  }

  useEffect(() => {
    const rowKeys = Object.keys(rowSelection)
    setTableRowKeys(rowKeys)
    handleCharacterSelect(rowKeys)
  }, [rowSelection])

  // will find the character info in data based on index
  const handleCharacterSelect = (charIndex: number[]) => {
    const charactersInfo: Character[] = []

    charIndex.forEach((index) => {
      charactersInfo.push(data[index])
    })

    setCharactersSelected(charactersInfo)
  }

  const handleRemoveChamp = (index: number) => {
    const key = tableRowKeys[index]

    const newRowSelection = { ...rowSelection }

    // remove key/value deleted.
    delete newRowSelection[key]

    setRowSelection(newRowSelection)
  }

  const handleClearFilters = () => {
    setGlobalFilter({ search: '', tags: [], showChampions: false })
  }

  const handleShowChampions = () => {
    setGlobalFilter({ ...globalFilter, showChampions: !globalFilter.showChampions })
  }

  return (
    <div className='App'>
      <LogoHeader />
      <SelectedChamps
        charactersSelected={charactersSelected}
        handleRemoveChamp={handleRemoveChamp}
      />
      <div className='show-champs-container'>
        <FormControlLabel
          label='Show Champions Only'
          control={
            <Checkbox
              value={'Show My Champions Only'}
              checked={globalFilter.showChampions}
              onChange={handleShowChampions}
            />
          }
        />
      </div>
      <SearchBox searchString={globalFilter?.search || ''} handleSearch={handleSearch} />

      <tagsContext.Provider value={{ handleTagsSelection, tagsSelected: globalFilter.tags }}>
        <TagsFilter characters={data} />
      </tagsContext.Provider>

      <button className='clear-button' onClick={handleClearFilters}>
        Clear All Filters
      </button>

      <CharactersTable
        characters={data}
        rowSelection={rowSelection}
        handleRowSelection={handleRowSelection}
        globalFilter={globalFilter}
      />
    </div>
  )
}

export default App
