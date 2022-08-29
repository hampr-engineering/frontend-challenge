import { Table, Row, Column, Cell, RowSelection } from '@tanstack/react-table'

export type AbilityName = 'Mobility' | 'Technique' | 'Survivability' | 'Power' | 'Energy'

export interface CharacterAbility {
  abilityName: AbilityName
  abilityScore: number
}

export interface CharacterTag {
  slot: number
  tag_name: string
}

export interface Character {
  id: number
  name: string
  quote: string
  image: string
  thumbnail: string
  universe: string
  abilities: CharacterAbility[]
  tags: CharacterTag[]
}

export interface CharacterFilters {
  search: string
  tags: string[]
  showChampions: boolean
  characters?: Character[]
}

export interface CellProps {
  table: Table<any>
  row: Row<any>
  column: Column<any>
  cell: Cell<any, any>
  getValue: () => any
  renderValue: () => any
}

export interface TableRow {
  id: string
  depth: string
  index: number
  original: any
  getValue: (columnId: string) => any
}

export interface TableCell {
  id: string
  name: string
  getValue: () => any
  row: TableRow
  column: Column<any>
  getContext: () => CellProps
}
