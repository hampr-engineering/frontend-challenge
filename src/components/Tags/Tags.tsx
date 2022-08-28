import React, { useEffect, useState, useContext } from 'react'
import './Tags.css'
import { CharacterTag } from '../../types'
import tagsContext from '../../context/tagsContext'

const Tags = ({ tag, forFilter }: { tag: CharacterTag; forFilter?: boolean }) => {
  const [selected, setSelected] = useState(false)

  const { handleTagsSelection, tagsSelected } = useContext(tagsContext)

  useEffect(() => {
    if (!forFilter) {
      return
    }
    setSelected(tagsSelected?.includes(tag.tag_name))
  }, [tagsSelected])

  const handleOnClick = () => {
    if (!forFilter) {
      return
    }
    handleTagsSelection(tag.tag_name)
  }

  return (
    <>
      {forFilter ? (
        <span
          className={
            'badge' +
            (forFilter ? ' ' + 'badge-filter' : '') +
            (selected ? ' ' + 'tag-selected' : '')
          }
          onClick={handleOnClick}
        >
          {selected ? '✓' : ''} {tag.tag_name}
        </span>
      ) : (
        <span className='badge'>{tag.tag_name}</span>
      )}
    </>
  )
}

export default Tags
