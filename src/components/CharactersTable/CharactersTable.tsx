import React, { useState, useEffect, HTMLAttributes, HTMLProps } from 'react'
import type { Character, CharacterAbility, CharacterTag } from '../../types'
import './CharactersTable.css'
import Tags from '../Tags/Tags'
import AbilityScore from '../AbilityScore/AbilityScore'
import {
  useReactTable,
  getCoreRowModel,
  createColumnHelper,
  flexRender,
} from '@tanstack/react-table'

const columnHelper = createColumnHelper<Character>()

// const filterAbilitiesValues = (ability: CharacterAbility) => {
//   if (ability.abilityName === 'Power') {
//     return true
//   }
//   return false
// }

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
  }),

  columnHelper.accessor('name', {
    header: () => <span>Character</span>,
    id: 'character',
    cell: (info: any) => info.getValue(),
  }),

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
    header: () => <span>Tags</span>,
    cell: (info: any) => (
      <div className='tags-container'>
        <Tags tags={info.getValue()} />
      </div>
    ),
  }),
]

const CharactersTable = ({
  characters,
  handleCharacterSelect,
  rowSelection,
}: {
  characters: Character[]
  handleCharacterSelect: any
  rowSelection: any
}) => {
  //const [rowSelection, setRowSelection] = useState({})

  //useEffect(() => {
  //  // console.log(rowSelection)

  //  //
  //  // console.log(Object.keys(rowSelection))

  //  handleCharacterSelect(Object.keys(rowSelection))
  //}, [rowSelection])

  const table = useReactTable({
    data: characters,
    columns,
    getCoreRowModel: getCoreRowModel(),
    state: {
      rowSelection,
    },
    onRowSelectionChange: setRowSelection,
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
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default CharactersTable
