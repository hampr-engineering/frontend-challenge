import React, { useState, useEffect, HTMLAttributes, HTMLProps } from 'react'
import type { Character, CharacterAbility, CharacterTag } from '../../types'
import './CharactersTable.css'
import TagsGenerator from '../TagsGenerator/TagsGenerator'
import AbilityScore from '../AbilityScore/AbilityScore'
import {
  useReactTable,
  getCoreRowModel,
  getFilteredRowModel,
  ColumnFiltersState,
  createColumnHelper,
  flexRender,
} from '@tanstack/react-table'

import { RankingInfo, rankItem, compareItems } from '@tanstack/match-sorter-utils'

const columnHelper = createColumnHelper<Character>()

const IndeterminateCheckbox = ({
  indeterminate,
  className = '',
  ...rest
}: { indeterminate?: boolean } & HTMLProps<HTMLInputElement>) => {
  const ref = React.useRef<HTMLInputElement>(null!)

  React.useEffect(() => {
    if (typeof indeterminate === 'boolean') {
      ref.current.indeterminate = !rest.checked && indeterminate
    }
  }, [ref, indeterminate])

  return <input type='checkbox' ref={ref} className={className + ' cursor-pointer'} {...rest} />
}

const tagsFilter: FilterFn<any> = (row, columnId, filter, addMeta) => {
  const tagsRow = row.original.tags

  let itemRank

  // go through each tag and if rankResult is passed then break out of loop and return the rankResult
  tagsRow.every((tag: CharacterTag) => {
    const rankResult = rankItem(tag.tag_name, filter)

    if (rankResult.passed) {
      itemRank = rankResult
      return false
    }

    itemRank = rankResult
    return true
  })

  return itemRank.passed
}

const fuzzyFilter: FilterFn<any> = (row, columnId, filter, addMeta) => {
  // console.log(addMeta)
  // Rank the item
  //
  console.log(row)
  console.log(row.getValue)
  console.log(columnId)

  const itemRank = rankItem(row.getValue(columnId), filter)

  console.log(itemRank.passed)
  // Store the itemRank info
  // addMeta({
  //   itemRank,

  // if row did not pass character filter then go to tags
  if (!itemRank.passed && row.original.tags) {
    console.log('seaching for tags')
    return tagsFilter(row, columnId, filter, addMeta)
  }

  console.log(itemRank)
  // Return if the item should be filtered in/out
  return itemRank.passed
}

const columns = [
  {
    id: 'select',
    cell: ({ row }: { row: any }) => (
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
    cell: (props: any) => {
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
    cell: (info: any) => info.getValue(),
  }),

  columnHelper.accessor('abilities', {
    header: () => <span>Power</span>,
    id: 'power',
    cell: (props: any) => {
      return <AbilityScore abilities={props.row.original.abilities} abilityFilter='Power' />
    },
  }),
  columnHelper.accessor('abilities', {
    header: () => <span>Mobility</span>,
    id: 'mobility',
    cell: (props: any) => {
      return <AbilityScore abilities={props.row.original.abilities} abilityFilter='Mobility' />
    },
  }),
  columnHelper.accessor('abilities', {
    header: () => <span>Technique</span>,
    id: 'technique',
    cell: (props: any) => {
      return <AbilityScore abilities={props.row.original.abilities} abilityFilter='Technique' />
    },
  }),
  columnHelper.accessor('abilities', {
    header: () => <span>Survivability</span>,
    id: 'survivability',
    cell: (props: any) => {
      return <AbilityScore abilities={props.row.original.abilities} abilityFilter='Survivability' />
    },
  }),
  columnHelper.accessor('abilities', {
    header: () => <span>Energy</span>,
    id: 'energy',
    cell: (props: any) => {
      return <AbilityScore abilities={props.row.original.abilities} abilityFilter='Energy' />
    },
  }),

  columnHelper.accessor('tags', {
    id: 'tags',
    header: () => <span>Tags</span>,
    cell: (info: any) => {
      return (
        <div className='tags-container'>
          <TagsGenerator tags={info.getValue()} />
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
  rowSelection: any
  handleCharacterSelect: any
  handleRowSelection: any
}) => {
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([])

  const table = useReactTable({
    data: characters,
    columns,
    fillterFns: {
      fuzzy: fuzzyFilter,
      tags: tagsFilter,
    },
    getCoreRowModel: getCoreRowModel(),
    state: {
      rowSelection,
      globalFilter,
      columnFilters,
    },
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    globalFilterFn: fuzzyFilter,
    onRowSelectionChange: (details) => {
      handleRowSelection(details)
    },
  })

  return (
    <div>
      <table className='character-table'>
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
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
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id} className={row.getIsSelected() ? 'selected-row-color' : ''}>
              {row.getVisibleCells().map((cell) => (
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
//   cell: (props: any) => {
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
//   cell: (props: any) =>
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
