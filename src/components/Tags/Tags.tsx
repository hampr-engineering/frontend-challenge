import React, { useEffect, useState, useContext } from 'react'
import './Tags.css'
import { CharacterTag } from '../../types'
import tagsContext from '../../context/tagsContext'

const Tags = ({ tag, forFilter }: { tag: CharacterTag; forFilter?: boolean }) => {
  const [selected, setSelected] = useState(false)
  const { handleTagsSelection, tagsSelected } = useContext(tagsContext)

  const handleOnClick = () => {
    if (!forFilter) {
      return
    }
    handleTagsSelection?.(tag.tag_name)
  }

  // will rerender selected styling for tags if list of tags selected changes
  useEffect(() => {
    if (!forFilter) {
      return
    }
    setSelected(tagsSelected ? tagsSelected.includes(tag.tag_name) : false)
  }, [tagsSelected])

  return (
    <>
      {forFilter ? (
        <div
          className={
            'badge' +
            (forFilter ? ' ' + 'badge-filter' : '') +
            (selected ? ' ' + 'tag-selected' : '')
          }
          onClick={handleOnClick}
        >
          {selected ? '✓' : ''} {tag.tag_name}
        </div>
      ) : (
        <div className='badge'>{tag.tag_name}</div>
      )}
    </>
  )
}

export default Tags
