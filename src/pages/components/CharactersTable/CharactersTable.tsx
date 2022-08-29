import { FC } from "react";
import { Box } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import useCharactersTableStyle from "./CharactersTable.style";
import useCharactersTable from "./CharactersTable.biz";
import { ICharactersTableProps } from "./CharactersTable.types";
import charactersJson from "../../../assets/data/characters.json";
import type { Character } from "../../ChampionsSquad.types";
import { charactersColumns } from "./CharactersTable.const";
const data: Character[] = charactersJson as Character[];

const CharactersTable: FC<ICharactersTableProps> = (props) => {
  const classes = useCharactersTableStyle(props);
  const { cellClickHandler } = useCharactersTable(props);

  return (
    <Box
      bgcolor={"White"}
      height={520}
      marginX={12}
      borderRadius={1}
      boxShadow={"0px 2px 4px 0px #00000040"}
    >
      <DataGrid
        className={classes.table}
        rows={data}
        columns={charactersColumns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        rowHeight={80}
        disableColumnMenu={true}
        onCellClick={(_cell) => cellClickHandler(_cell.row)}
      />
    </Box>
  );
};

export default CharactersTable;
