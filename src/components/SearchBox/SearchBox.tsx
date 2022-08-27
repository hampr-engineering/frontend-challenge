import React from 'react'
import './SearchBox.css'

const SearchBox = ({ searchString, handleSearch }: { searchString: string; handleSearch: any }) => {
  return (
    <div className='search-box-container'>
      <input
        value={searchString || ''}
        onChange={handleSearch}
        type='text'
        className='search-box'
        placeholder='🔍 Search characters...'
      />
    </div>
  )
}

export default SearchBox
