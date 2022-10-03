import { Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material"
import { Character } from "../../types"
import { AbilityCell } from "./Cells"
import { CharacterCell } from "./Cells/CharacterCell"
import { TagCell } from "./Cells/TagCell"

export const CharactersTable = ({ data }: {data: Character[]}) =>  ( <Table aria-label="characters table">
        <TableHead>
          <TableRow>
            <TableCell>Character</TableCell>
            <TableCell>Tags</TableCell>
            <TableCell>Power</TableCell>
            <TableCell>Mobility</TableCell>
            <TableCell>Technique</TableCell>
            <TableCell>Survivability</TableCell>
            <TableCell>Energy</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((character) => (
            <TableRow
              key={character.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
             <CharacterCell character={character} />
             <TagCell tags={character.tags} />
             <AbilityCell abilityName='Power' abilities={character.abilities} />
             <AbilityCell abilityName='Mobility' abilities={character.abilities} />
             <AbilityCell abilityName='Survivability' abilities={character.abilities} />
             <AbilityCell abilityName='Technique' abilities={character.abilities} />
             <AbilityCell abilityName='Energy' abilities={character.abilities} />
            </TableRow>
          ))}
        </TableBody>
      </Table>)