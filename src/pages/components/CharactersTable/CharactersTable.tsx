import { FC } from "react";
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
  const {} = useCharactersTable(props);

  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={data}
        columns={charactersColumns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableColumnMenu={true}
      />
    </div>
  );
};

export default CharactersTable;
