import React from 'react'
import './SearchBox.css'

const SearchBox = ({ globalFilter, handleSearch }: { globalFilter: string; handleSearch: any }) => {
  return (
    <div className='search-box-container'>
      <input
        value={globalFilter}
        onChange={handleSearch}
        type='text'
        className='search-box'
        placeholder='🔍 Search characters...'
      />
    </div>
  )
}

export default SearchBox
