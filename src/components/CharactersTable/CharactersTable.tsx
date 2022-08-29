import React, { HTMLProps } from 'react'
import type { Character, CharacterTag, CellProps, CharacterFilters, TableCell } from '../../types'
import './CharactersTable.css'
import TagsGenerator from '../TagsGenerator/TagsGenerator'
import AbilityScore from '../AbilityScore/AbilityScore'
import {
  useReactTable,
  getCoreRowModel,
  getFilteredRowModel,
  createColumnHelper,
  flexRender,
  HeaderGroup,
  Header,
  RowSelection,
} from '@tanstack/react-table'

import { rankItem } from '@tanstack/match-sorter-utils'

const columnHelper = createColumnHelper<Character>()

const IndeterminateCheckbox = ({
  indeterminate,
  className = '',
  ...rest
}: { indeterminate?: boolean } & HTMLProps<HTMLInputElement>) => {
  const ref = React.useRef<HTMLInputElement>()

  React.useEffect(() => {
    if (typeof indeterminate === 'boolean') {
      ref.current.indeterminate = !rest.checked && indeterminate
    }
  }, [ref, indeterminate])

  return <input type='checkbox' ref={ref} className={className + ' cursor-pointer'} {...rest} />
}

const tagsSelectFilter = (tags: CharacterTag[], tagFilters: string[]) => {
  let itemRank
  //
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
  }),

  columnHelper.accessor('name', {
    header: () => <span>Character</span>,
    id: 'character',
    cell: (props: CellProps) => props.getValue(),
  }),

  columnHelper.accessor('abilities', {
    header: () => <span>Power</span>,
    id: 'power',
    cell: (props: CellProps) => {
      return <AbilityScore abilities={props.row.original.abilities} abilityFilter='Power' />
    },
  }),
  columnHelper.accessor('abilities', {
    header: () => <span>Mobility</span>,
    id: 'mobility',
    cell: (props: CellProps) => {
      return <AbilityScore abilities={props.row.original.abilities} abilityFilter='Mobility' />
    },
  }),
  columnHelper.accessor('abilities', {
    header: () => <span>Technique</span>,
    id: 'technique',
    cell: (props: CellProps) => {
      return <AbilityScore abilities={props.row.original.abilities} abilityFilter='Technique' />
    },
  }),
  columnHelper.accessor('abilities', {
    header: () => <span>Survivability</span>,
    id: 'survivability',
    cell: (props: CellProps) => {
      return <AbilityScore abilities={props.row.original.abilities} abilityFilter='Survivability' />
    },
  }),
  columnHelper.accessor('abilities', {
    header: () => <span>Energy</span>,
    id: 'energy',
    cell: (props: CellProps) => {
      return <AbilityScore abilities={props.row.original.abilities} abilityFilter='Energy' />
    },
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
  }),
]

const CharactersTable = ({
  characters,
  globalFilter,
  rowSelection,
  handleRowSelection,
}: {
  characters: Character[]
  globalFilter: string
  rowSelection: Record<string, boolean>
  handleCharacterSelect: (charIndex: number[]) => void
  handleRowSelection: (rowSelect: Record<string, boolean>) => void
}) => {
  const table = useReactTable({
    data: characters,
    columns,
    fillterFns: {
      fuzzy: fuzzyFilter,
    },
    getCoreRowModel: getCoreRowModel(),
    state: {
      rowSelection,
      // globalFilter values only accepts string. Objects causes the table to fail.
      globalFilter: JSON.stringify(globalFilter),
    },
    getFilteredRowModel: getFilteredRowModel(),
    globalFilterFn: fuzzyFilter,
    onRowSelectionChange: (details: Record<string, boolean>) => {
      handleRowSelection(details)
    },
  })

  return (
    <div>
      <table className='character-table'>
        <thead>
          {table.getHeaderGroups().map((headerGroup: HeaderGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header: Header) => (
                <th key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(header.column.columnDef.header, header.getContext())}
                </th>
              ))}
            </tr>
          ))}
        </thead>

        <tbody>
          {table.getRowModel().rows.map((row: RowSelection) => (
            <tr
              key={row.id}
              onClick={row.getToggleSelectedHandler()}
              className={row.getIsSelected() ? 'selected-row-color' : ''}
            >
              {row.getVisibleCells().map((cell: TableCell) => (
                <td key={cell.id + cell.name}>
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

// columnHelper.accessor('name', {
//   header: () => <span>Character</span>,
//   id: 'character',
//   cell: ( props: CellProps) => {
//     return <div>{props.row.original.name}</div>
//   },
// }),

// columnHelper.accessor(
//   (row: Character) => row.abilities.find(filterAbilitiesValues).abilityScore,
//   {
//     header: () => <span>Power</span>,
//     cell: (info) => info.getValue(),
//   },
// ),

// columnHelper.accessor((row: Character) => row.quote, {
//   id: 'power',
// }),
// columnHelper.accessor(
//   (row: Character) => row.abilities.find(filterAbilitiesValues).abilityScore,
//   {
//     id: 'power',
//   },
// ),

// { id: 'power', accessorFn: (row) => row.quote },

// columnHelper.accessor('abilities', {
//   header: () => <span>Power</span>,
//   cell: ( props: CellProps) =>
//     JSON.stringify(
//       props.row.original.abilities.find((ability: CharacterAbility) => {
//         if (ability.abilityName === 'Power') {
//           return true
//         }
//         return false
//       }).abilityScore,
//     ),
// }),

// columnHelper.accessor('abilities', {
//   header: () => <span>Power</span>,
//   id: 'power',
//   cell: (info: any) =>
//     info.getValue().find((ability: CharacterAbility) => {
//       if (ability.abilityName === 'Power') {
//         return true
//       }
//       return false
//     }).abilityScore,
// }),
//
//
//
// const filterAbilitiesValues = (ability: CharacterAbility) => {
//   if (ability.abilityName === 'Power') {
//     return true
//   }
//   return false
// }
