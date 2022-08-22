import React from 'react'
import './SearchBox.css'

const SearchBox = () => {
  return (
    <div className='search-box-container'>
      <input type='text' className='search-box' placeholder='🔍 Search characters...' />
    </div>
  )
}

export default SearchBox
