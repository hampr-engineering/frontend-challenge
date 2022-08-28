import { createContext } from 'react'

const tagsContext = createContext<{
  handleTagsSelection?: (tag: string) => void
  tagsSelected?: string[]
}>({})

export default tagsContext
