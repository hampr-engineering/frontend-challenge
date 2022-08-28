import React from 'react'
import './SearchBox.css'

const SearchBox = ({
  searchString,
  handleSearch,
}: {
  searchString: string
  handleSearch: (event: React.ChangeEvent<HTMLInputElement>) => void
}) => {
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
