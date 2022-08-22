import * as React from 'react'
import Tags from '../Tags/Tags'
import './TagsFilter.css'
import type { Character, CharacterAbility, CharacterTag } from '../../types'

const uniqueTag = (characters: Character[]) => {
  const tagsArray: CharacterTag[] = []

  characters.map((character: Character) => {
    if (!character.tags) {
      return
    }

    character.tags.map((tag: CharacterTag) => {
      const found: boolean = tagsArray.some((tagInArray: CharacterTag) => {
        if (tag.tag_name === tagInArray.tag_name) {
          return true
        }

        return false
      })

      if (found) {
        return
      }

      tagsArray.push(tag)
    })
  })

  return tagsArray
}

const TagsFilter = ({ characters }: { characters: Character[] }) => {
  return (
    <div className='tag-filter-container'>
      {/* FIXME check error*/}
      <Tags tags={uniqueTag(characters)} />
    </div>
  )
}

export default TagsFilter
