import * as React from 'react'
import type { Character, CharacterAbility, CharacterTag } from '../../types'
import Tags from '../Tags/Tags'
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

const columns = [
  columnHelper.accessor('name', {
    header: () => <span>Character</span>,
    cell: (info: any) => info.getValue(),
  }),

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

  columnHelper.accessor('abilities', {
    header: () => <span>Power</span>,
    id: 'power',
    cell: (info: any) =>
      info.getValue().find((ability: CharacterAbility) => {
        if (ability.abilityName === 'Power') {
          return true
        }
        return false
      }).abilityScore,
  }),

  columnHelper.accessor('abilities', {
    header: () => <span>Mobility</span>,
    id: 'mobility',
    cell: (props: any) =>
      props.row.original.abilities.find((ability: CharacterAbility) => {
        if (ability.abilityName === 'Mobility') {
          return true
        }
        return false
      }).abilityScore,
  }),
  columnHelper.accessor('abilities', {
    header: () => <span>Technique</span>,
    id: 'technique',
    cell: (props: any) =>
      props.row.original.abilities.find((ability: CharacterAbility) => {
        if (ability.abilityName === 'Technique') {
          return true
        }
        return false
      }).abilityScore,
  }),
  columnHelper.accessor('abilities', {
    header: () => <span>Survivability</span>,
    id: 'survivability',
    cell: (props: any) =>
      props.row.original.abilities.find((ability: CharacterAbility) => {
        if (ability.abilityName === 'Survivability') {
          return true
        }
        return false
      }).abilityScore,
  }),
  columnHelper.accessor('abilities', {
    header: () => <span>Energy</span>,
    id: 'energy',
    cell: (props: any) =>
      props.row.original.abilities.find((ability: CharacterAbility) => {
        if (ability.abilityName === 'Energy') {
          return true
        }
        return false
      }).abilityScore,
  }),

  columnHelper.accessor('tags', {
    header: () => <span>Tags</span>,
    cell: (info: any) => <Tags tags={info.getValue()} />,
    // cell: (info: any) => JSON.stringify(info.getValue()),
  }),
]

const CharactersTable = ({ characters }: { characters: Character[] }) => {
  const table = useReactTable({
    data: characters,
    columns,
    getCoreRowModel: getCoreRowModel(),
  })

  return (
    <div>
      <table>
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
