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

  return tagsArray
}

const TagsFilter = ({
  characters,
  handleTagsSelection,
}: {
  characters: Character[]
  handleTagsSelection: any
}) => {
  return (
    <div className='tags-filter-container'>
      {/* FIXME check error*/}
      <div>
        <TagsGenerator
          tags={uniqueTag(characters)}
          forFilter={true}
          handleTagsSelection={handleTagsSelection}
        />
      </div>
      <div>
        <button className='clear-button'>Clear All Tags</button>
      </div>
    </div>
  )
}

export default TagsFilter
