import React, { useEffect, useMemo, useState } from "react";
import {
  Paper,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  TablePagination,
  TableSortLabel,
  IconButton,
  Tooltip,
  Checkbox,
} from "@mui/material";
import {
  UserTableFields,
  IColumn,
  IRow,
  TodoTableFields,
  AlbumTableFields,
} from "../../utilities/types/table";
import { RemoveRedEye } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

interface CustomTableProps {
  columns: IColumn<UserTableFields>[] | IColumn<TodoTableFields>[] | IColumn<AlbumTableFields>[];
  data: IRow<UserTableFields>[] | IRow<TodoTableFields>[] | IRow<AlbumTableFields>[];
}

function CustomTable(props: CustomTableProps) {
  const { columns, data } = props;

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(20);
  const [rows, setRows] = useState<{ [key: string]: string | number | boolean }[]>(
    data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
  );
  const [sortBy, setSortBy] = useState("id");
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("desc");

  const navigate = useNavigate();

  useEffect(() => {
    setRows(data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage));
  }, [data]);

  const handlePageChange = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent> | null,
    newPage: number
  ) => {
    setPage(newPage);
    setRows(data.slice(newPage * rowsPerPage, newPage * rowsPerPage + rowsPerPage));
  };

  const handleRowsPerPageChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const newRowsPerPage = +event.target.value;
    setRowsPerPage(newRowsPerPage);
    setPage(0);
    setRows(data.slice(0, newRowsPerPage));
  };

  const handleSort = (key: string) => {
    const activeFieldClick = key === sortBy;
    // If clicked on same column, toggle direction.
    if (activeFieldClick) {
      setSortDirection((prevDirection) => (prevDirection === "asc" ? "desc" : "asc"));
      return;
    }
    // If clicked on different column, set sort by and reset direction.
    setSortBy(key);
    setSortDirection("desc");
  };

  const sorterFunction = (
    data: { [key: string]: string | number | boolean }[],
    orderBy: string,
    orderDirection: "asc" | "desc"
  ) => {
    // eslint-disable-next-line
    return data.slice().sort((a: any, b: any) => {
      if (a[orderBy] < b[orderBy]) {
        return orderDirection === "asc" ? 1 : -1;
      }
      if (a[orderBy] > b[orderBy]) {
        return orderDirection === "asc" ? -1 : 1;
      }
      return 0;
    });
  };

  const sortedRows = useMemo(() => {
    return sorterFunction(rows, sortBy, sortDirection);
  }, [rows, sortBy, sortDirection]);

  return (
    <Paper>
      <TableContainer sx={{ maxHeight: "600px" }}>
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              {columns.map((column) => {
                const { id, name, isSortable } = column;
                return (
                  <TableCell key={id} sx={{ fontWeight: "600" }}>
                    {isSortable ? (
                      <TableSortLabel
                        active={sortBy === id}
                        direction={sortBy === id ? sortDirection : "desc"}
                        onClick={() => handleSort(id)}
                      >
                        {name}
                      </TableSortLabel>
                    ) : (
                      name
                    )}
                  </TableCell>
                );
              })}
            </TableRow>
          </TableHead>
          <TableBody>
            {sortedRows.map((row, index) => (
              <TableRow key={index}>
                {columns.map((column, index) => {
                  const cellValue = row[column.id];
                  if (column.id === "action-detailView") {
                    return (
                      <TableCell key={`${cellValue}-${index}`} style={{ padding: "10px" }}>
                        <Tooltip title="View Details">
                          <IconButton onClick={() => navigate(cellValue.toString())}>
                            <RemoveRedEye sx={{ color: "green", fontSize: "18px" }} />
                          </IconButton>
                        </Tooltip>
                      </TableCell>
                    );
                  }
                  if (column.id === "completed") {
                    return (
                      <TableCell key={`${cellValue}-${index}`} style={{ padding: "10px" }}>
                        <Checkbox name="username" checked={!!cellValue} />
                      </TableCell>
                    );
                  }
                  return (
                    <TableCell key={`${cellValue}-${index}`} style={{ padding: "10px" }}>
                      {cellValue}
                    </TableCell>
                  );
                })}
              </TableRow>
            ))}
            <TableRow></TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[20, 30, 50, 100]}
        page={page}
        rowsPerPage={rowsPerPage}
        component="div"
        count={data.length}
        onPageChange={handlePageChange}
        onRowsPerPageChange={handleRowsPerPageChange}
      ></TablePagination>
    </Paper>
  );
}

export default CustomTable;
