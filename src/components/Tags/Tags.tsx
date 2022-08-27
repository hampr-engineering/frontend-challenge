import React, { useState } from 'react'
import './Tags.css'
import { CharacterTag } from '../../types'

const Tags = ({
  tag,
  forFilter,
  handleTagsSelection,
}: {
  tag: CharacterTag
  handleTagsSelection: any
  forFilter?: boolean
}) => {
  const [selected, setSelected] = useState(false)

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
