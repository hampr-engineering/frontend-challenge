import * as React from 'react'
import type { Character, CharacterAbility, CharacterTag } from '../../types'
import './Tags.css'

const Tags = ({ tags }: { tags: CharacterTag[] }) => {
  if (!tags) {
    return
  }

  return (
    <>
      {tags.map((tag) => {
        return (
          <span key={tag.slot} className='badge'>
            {tag.tag_name}
          </span>
        )
      })}
    </>
  )
}

export default Tags
