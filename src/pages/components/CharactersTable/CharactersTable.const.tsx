import { GridColDef, GridRenderCellParams } from "@mui/x-data-grid";
import type { Character } from "../../ChampionsSquad.types";
import { Avatar, Box, Chip, Typography } from "@mui/material";

export const charactersColumns: GridColDef[] = [
  {
    field: "name",
    sortable: false,
    width: 250,
    headerName: "Character",
    renderCell: (_item: GridRenderCellParams<any, Character, any>) => (
      <>
        <Avatar src={_item.row.image} />
        <Typography variant={"h6"} fontWeight={700} marginLeft={3}>
          {_item.row.name}
        </Typography>
      </>
    ),
  },
  {
    field: "tags",
    sortable: false,
    width: 200,
    headerName: "Tags",
    renderCell: (_item: GridRenderCellParams<any, Character, any>) => (
      <>
        {_item.row.tags.map((tag: any) => (
          <Box marginRight={1.5}>
            <Chip color={"primary"} variant={"outlined"} label={tag.tag_name} />
          </Box>
        ))}
      </>
    ),
  },
  {
    field: "Mobility",
    sortable: false,
    headerName: "Mobility",
    renderCell: (_item: GridRenderCellParams<any, Character, any>) => (
      <Typography
        variant={"h6"}
        fontWeight={700}
        color={_item.row.abilities[0].abilityScore === 10 ? "red" : "black"}
      >
        {_item.row.abilities[0].abilityScore}
      </Typography>
    ),
  },
  {
    field: "Technique",
    sortable: false,
    headerName: "Technique",
    renderCell: (_item: GridRenderCellParams<any, Character, any>) => (
      <Typography
        variant={"h6"}
        fontWeight={700}
        color={_item.row.abilities[1].abilityScore === 10 ? "red" : "black"}
      >
        {_item.row.abilities[1].abilityScore}
      </Typography>
    ),
  },
  {
    field: "Survivability",
    sortable: false,
    headerName: "Survivability",
    renderCell: (_item: GridRenderCellParams<any, Character, any>) => (
      <Typography
        variant={"h6"}
        fontWeight={700}
        color={_item.row.abilities[2].abilityScore === 10 ? "red" : "black"}
      >
        {_item.row.abilities[2].abilityScore}
      </Typography>
    ),
  },
  {
    field: "Power",
    sortable: false,
    headerName: "Power",
    renderCell: (_item: GridRenderCellParams<any, Character, any>) => (
      <Typography
        variant={"h6"}
        fontWeight={700}
        color={_item.row.abilities[3].abilityScore === 10 ? "red" : "black"}
      >
        {_item.row.abilities[3].abilityScore}
      </Typography>
    ),
  },
  {
    field: "Energy",
    sortable: false,
    headerName: "Energy",
    align: "center",
    renderCell: (_item: GridRenderCellParams<any, Character, any>) => (
      <Typography
        variant={"h6"}
        fontWeight={700}
        color={_item.row.abilities[4].abilityScore === 10 ? "red" : "black"}
      >
        {_item.row.abilities[4].abilityScore}
      </Typography>
    ),
  },
];
