import * as React from 'react'
import TagsGenerator from '../TagsGenerator/TagsGenerator'
import './TagsFilter.css'
import type { Character, CharacterTag } from '../../types'

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

  tagsArray.sort((a, b) => (a.tag_name.toLowerCase() > b.tag_name.toLowerCase() ? 1 : -1))

  return tagsArray
}

const TagsFilter = ({ characters }: { characters: Character[] }) => {
  return (
    <div className='tags-filter-container'>
      <TagsGenerator tags={uniqueTag(characters)} forFilter={true} />
    </div>
  )
}

export default TagsFilter
