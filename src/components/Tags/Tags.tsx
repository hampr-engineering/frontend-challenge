import React, { useState, useContext } from 'react'
import './Tags.css'
import { CharacterTag } from '../../types'
import tagsContext from '../../context/tagsContext'

const Tags = ({ tag, forFilter }: { tag: CharacterTag; forFilter?: boolean }) => {
  const [selected, setSelected] = useState(false)

  const { handleTagsSelection } = useContext(tagsContext)

  const handleOnClick = () => {
    if (!forFilter) {
      return
    }
    // reverse the state of selected
    setSelected(!selected)
    handleTagsSelection(tag.tag_name)
  }

  return (
    <span
      className={
        'badge' + (forFilter ? ' ' + 'badge-filter' : '') + (selected ? ' ' + 'tag-selected' : '')
      }
      onClick={handleOnClick}
    >
      {selected ? '✓' : ''} {tag.tag_name}
    </span>
  )
}

export default Tags
