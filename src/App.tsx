import React, { useEffect, useState } from 'react'
import './App.css'
import { Checkbox, FormControlLabel } from '@mui/material'
import LogoHeader from './components/LogoHeader/LogoHeader'
import SelectedChamps from './components/SelectedChamps/SelectedChamps'
import SearchBox from './components/SearchBox/SearchBox'
import CharactersTable from './components/CharactersTable/CharactersTable'
import TagsFilter from './components/TagsFilter/TagsFilter'
import jsonData from './data/characters.json'
import type { Character, CharacterFilters } from './types'
const data: Character[] = jsonData as Character[]
import tagsContext from './context/tagsContext'

function App() {
  const maxChampions = 6
  const [charactersSelected, setCharactersSelected] = useState<Character[]>([])
  const [rowSelection, setRowSelection] = useState<Record<string, boolean>>({})
  // will be used to as key to reference row number of character for unticking of checkbox in table
  const [tableRowKeys, setTableRowKeys] = useState<string[]>([])
  // filter from search box
  const [globalFilter, setGlobalFilter] = useState<CharacterFilters>({
    search: '',
    tags: [],
    showChampions: false,
  })

  const handleRowSelection = (rowSelect: Record<string, boolean>) => {
    setRowSelection(rowSelect)
  }

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setGlobalFilter({ ...globalFilter, search: event.target.value })
  }

  const handleTagsSelection = (tag: string) => {
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
    const selectedLength = charactersSelected.length
    const rowKeys = Object.keys(rowSelection)
    // don't add champs if limit of max Champions is reached
    // Second conditional is for the removal of selected characters during max.
    if (selectedLength >= maxChampions && selectedLength < rowKeys.length) {
      return
    }
    setTableRowKeys(rowKeys)
    handleCharacterSelect(rowKeys)
  }, [rowSelection])

  // will find the character info in data based on index
  const handleCharacterSelect = (charIndex: string[]) => {
    const charactersInfo: Character[] = []

    charIndex.forEach((index: string) => {
      charactersInfo.push(data[parseInt(index)])
    })

    setCharactersSelected(charactersInfo)
    setGlobalFilter({ ...globalFilter, characters: charactersInfo })
  }

  const handleRemoveChamp = (index: number) => {
    const key = tableRowKeys[index]

    const newRowSelection = { ...rowSelection }

    // remove key/value deleted.
    delete newRowSelection[key]

    setRowSelection(newRowSelection)

    const newCharactersSelected = [...charactersSelected]
    newCharactersSelected.splice(parseInt(key), 1)
    setGlobalFilter({ ...globalFilter, characters: newCharactersSelected })
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
        maxChampions={maxChampions}
      />
    </div>
  )
}

export default App
