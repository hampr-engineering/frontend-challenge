import React from 'react'
import Tags from '../Tags/Tags'
import type { CharacterTag } from '../../types'

const TagsGenerator = ({
  tags,
  forFilter,
  handleTagsSelection,
}: {
  tags: CharacterTag[]
  handleTagsSelection: any
  forFilter?: boolean
}) => {
  if (!tags) {
    return
  }

  return (
    <>
      {tags.map((tag) => (
        <Tags
          tag={tag}
          key={tag.tag_name}
          forFilter={forFilter}
          handleTagsSelection={handleTagsSelection}
        />
      ))}
    </>
  )
}

export default TagsGenerator
