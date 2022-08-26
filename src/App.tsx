import React, { useEffect, useState } from 'react'
import './App.css'
import LogoHeader from './components/LogoHeader/LogoHeader'
import SelectedChamps from './components/SelectedChamps/SelectedChamps'
import SearchBox from './components/SearchBox/SearchBox'
import CharactersTable from './components/CharactersTable/CharactersTable'
import TagsFilter from './components/TagsFilter/TagsFilter'
import jsonData from './data/characters.json'
import type { Character } from './types'
const data: Character[] = jsonData as Character[]

function App() {
  const [charactersSelected, setCharactersSelected] = useState([])
  const [rowSelection, setRowSelection] = useState({})
  // will be used to as key to reference row number of character for unticking of checkbox in table
  const [tableRowKeys, setTableRowKeys] = useState([])
  // filter from search box
  const [globalFilter, setGlobalFilter] = useState('')

  const handleRowSelection = (rowSelect: any) => {
    setRowSelection(rowSelect)
  }

  const handleSearch = (event: any) => {
    setGlobalFilter(event.target.value)
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

  return (
    <div className='App'>
      <LogoHeader />
      <SelectedChamps
        charactersSelected={charactersSelected}
        handleRemoveChamp={handleRemoveChamp}
      />
      <SearchBox globalFilter={globalFilter} handleSearch={handleSearch} />
      <TagsFilter characters={data} />
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
