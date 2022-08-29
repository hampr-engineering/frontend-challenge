import React, { useState, HTMLProps } from 'react'
import type { Character, CharacterTag, CellProps, CharacterFilters, TableCell } from '../../types'
import './CharactersTable.css'
import TagsGenerator from '../TagsGenerator/TagsGenerator'
import AbilityScore from '../AbilityScore/AbilityScore'
import abilityScoreHelper from '../../helpers/AbilityScoreHelper'
import {
  useReactTable,
  getCoreRowModel,
  getSortedRowModel,
  getFilteredRowModel,
  createColumnHelper,
  flexRender,
  HeaderGroup,
  Header,
  RowSelection,
  SortingState,
} from '@tanstack/react-table'

import { rankItem } from '@tanstack/match-sorter-utils'

const columnWidth = { checkbox: 30, image: 70, character: 180, ability: 65, tags: 245 }

const columnHelper = createColumnHelper<Character>()

const IndeterminateCheckbox = ({
  indeterminate,
  className = '',
  ...rest
}: { indeterminate?: boolean } & HTMLProps<HTMLInputElement>) => {
  const ref = React.useRef<HTMLInputElement>(null)

  React.useEffect(() => {
    if (typeof indeterminate === 'boolean' && ref && ref.current) {
      ref.current.indeterminate = !rest.checked && indeterminate
    }
  }, [ref, indeterminate])

  return <input type='checkbox' ref={ref} className={className + ' cursor-pointer'} {...rest} />
}

const tagsSelectFilter = (tags: CharacterTag[], tagFilters: string[]) => {
  let itemRank

  // will check if any of the tags match any of the Tagfilters
  for (let i = 0; i < tags.length; i++) {
    let found

    for (let j = 0; j < tagFilters.length; j++) {
      itemRank = rankItem(tags[i].tag_name, tagFilters[j])

      if (itemRank.passed) {
        found = true
        break
      }
    }

    if (found) {
      break
    }
  }

  return itemRank?.passed
}

const tagsSearchFilter = (tags: CharacterTag[], filter: string) => {
  let itemRank

  // go through each tag and if rankResult is passed then break out of loop and return the rankResult
  for (let i = 0; i < tags.length; i++) {
    itemRank = rankItem(tags[i].tag_name, filter)

    if (itemRank.passed) {
      break
    }
  }

  return itemRank?.passed
}

const fuzzyFilter = (row: RowSelection, columnId: string, filters: string) => {
  const parsedFilter: CharacterFilters = JSON.parse(filters)

  // will showChampions only if enabled in filter
  if (parsedFilter.showChampions && !row.getIsSelected()) {
    // disregard row if not selected
    return false
  }

  // will process tags filter selcted.
  if (
    parsedFilter.tags?.length &&
    (!row.original.tags ||
      (row.original.tags && !tagsSelectFilter(row.original.tags, parsedFilter.tags)))
  ) {
    // if it does not exist character is excluded

    return false
  }

  const itemRank = rankItem(row.getValue(columnId), parsedFilter.search)

  // if row did not pass character filter then go to tags
  // would not run if filter has tags selected from TagsFilter component. Prevent double processing.
  if (!parsedFilter.tags?.length && !itemRank.passed && row.original.tags) {
    return tagsSearchFilter(row.original.tags, parsedFilter.search)
  }

  return itemRank.passed
}

const sortSymbols = { asc: ' 🔼', desc: ' 🔽' }
const sortAbilityScore = (
  rowA: RowSelection,
  rowB: RowSelection,
  columnId: string,
  desc: boolean,
) => {
  const abilityKey = columnId.charAt(0).toUpperCase() + columnId.slice(1)

  const a = abilityScoreHelper(rowA.original.abilities, abilityKey)
  const b = abilityScoreHelper(rowB.original.abilities, abilityKey)

  if (desc) {
    return b - a
  }

  return a - b
}

const columns = [
  {
    id: 'select',
    cell: ({ row }: { row: RowSelection }) => (
      <div className='px-1'>
        <IndeterminateCheckbox
          {...{
            checked: row.getIsSelected(),
            indeterminate: row.getIsSomeSelected(),
            onChange: row.getToggleSelectedHandler(),
          }}
        />
      </div>
    ),
    enableGlobalFilter: false,
    enableSorting: false,
    size: columnWidth.checkbox,
  },

  columnHelper.accessor('image', {
    header: () => <span></span>,
    id: 'image',
    cell: (props: CellProps) => {
      return (
        <img
          src={props.row.original.image}
          alt={'image of ' + props.row.original.name}
          className='character-image'
        />
      )
    },
    enableGlobalFilter: false,
    enableSorting: false,
    size: columnWidth.image,
  }),

  columnHelper.accessor('name', {
    header: () => <span>Character</span>,
    id: 'character',
    cell: (props: CellProps) => props.getValue(),
    size: columnWidth.character,
  }),

  columnHelper.accessor('abilities', {
    header: () => <span>Power</span>,
    id: 'power',
    cell: (props: CellProps) => {
      return <AbilityScore abilities={props.row.original.abilities} abilityFilter='Power' />
    },
    sortingFn: sortAbilityScore,
    size: columnWidth.ability,
  }),
  columnHelper.accessor('abilities', {
    header: () => <span>Mobility</span>,
    id: 'mobility',
    cell: (props: CellProps) => {
      return <AbilityScore abilities={props.row.original.abilities} abilityFilter='Mobility' />
    },
    sortingFn: sortAbilityScore,
    size: columnWidth.ability,
  }),
  columnHelper.accessor('abilities', {
    header: () => <span>Technique</span>,
    id: 'technique',
    cell: (props: CellProps) => {
      return <AbilityScore abilities={props.row.original.abilities} abilityFilter='Technique' />
    },
    sortingFn: sortAbilityScore,
    size: columnWidth.ability,
  }),
  columnHelper.accessor('abilities', {
    header: () => <span>Survivability</span>,
    id: 'survivability',
    cell: (props: CellProps) => {
      return <AbilityScore abilities={props.row.original.abilities} abilityFilter='Survivability' />
    },
    sortingFn: sortAbilityScore,
    size: columnWidth.ability,
  }),
  columnHelper.accessor('abilities', {
    header: () => <span>Energy</span>,
    id: 'energy',
    cell: (props: CellProps) => {
      return <AbilityScore abilities={props.row.original.abilities} abilityFilter='Energy' />
    },
    sortingFn: sortAbilityScore,
    size: columnWidth.ability,
  }),

  columnHelper.accessor('tags', {
    id: 'tags',
    header: () => <span>Tags</span>,
    cell: (props: CellProps) => {
      return (
        <div className='tags-container'>
          <TagsGenerator tags={props.getValue()} />
        </div>
      )
    },
    enableGlobalFilter: true,
    filterFn: 'tags',
    enableSorting: false,
    size: columnWidth.tags,
  }),
]

const CharactersTable = ({
  characters,
  globalFilter,
  rowSelection,
  handleRowSelection,
  maxChampions,
}: {
  characters: Character[]
  globalFilter: CharacterFilters
  rowSelection: Record<string, boolean>
  handleRowSelection: (rowSelect: Record<string, boolean>) => void
  maxChampions: number
}) => {
  const [sorting, setSorting] = useState<SortingState>([
    {
      id: 'character',
      desc: false,
    },
  ])

  const table = useReactTable({
    data: characters,
    columns,
    fillterFns: {
      fuzzy: fuzzyFilter,
    },
    sortingFns: {
      sortAbilityScore,
    },
    getCoreRowModel: getCoreRowModel(),
    state: {
      rowSelection,
      // globalFilter values only accepts string. Objects causes the table to fail.
      globalFilter: JSON.stringify(globalFilter),
      sorting,
    },
    getFilteredRowModel: getFilteredRowModel(),
    globalFilterFn: fuzzyFilter,
    onRowSelectionChange: (details: Record<string, boolean>) => {
      handleRowSelection(details)
    },
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
  })

  return (
    <div>
      <table className='character-table'>
        <thead>
          {table.getHeaderGroups().map((headerGroup: HeaderGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header: Header) => {
                return (
                  <th key={header.id} colSpan={header.colSpan}>
                    {header.isPlaceholder ? null : (
                      <div
                        {...{
                          className: header.column.getCanSort() ? 'cursor-pointer select-none' : '',
                          onClick: header.column.getToggleSortingHandler(),
                        }}
                      >
                        {flexRender(header.column.columnDef.header, header.getContext())}
                        {sortSymbols[
                          header.column.getIsSorted() as string as keyof typeof sortSymbols
                        ] ?? null}
                      </div>
                    )}
                  </th>
                )
              })}
            </tr>
          ))}
        </thead>

        <tbody>
          {table.getRowModel().rows.map((row: RowSelection) => (
            <tr
              key={row.id}
              onClick={
                !row.getIsSelected() && Object.keys(rowSelection).length >= maxChampions
                  ? undefined
                  : row.getToggleSelectedHandler()
              }
              className={row.getIsSelected() ? 'selected-row-color' : ''}
            >
              {row.getVisibleCells().map((cell: TableCell) => (
                <td key={cell.id + cell.name} style={{ width: cell.column.getSize() }}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default CharactersTable
