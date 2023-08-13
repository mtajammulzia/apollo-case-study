import { ChangeEvent, FC, useMemo, useState } from "react";
import { useDebounce } from "../../hooks/useDebounce";
import { IRow, TodoTableFields } from "../../utilities/types/table";
import { useListTodos } from "../../hooks/useListTodos";
import { Table } from "../../UI";
import { TODO_TABLE_COLUMNS } from "../../utilities/constants/table";
import { HeadSection, Heading, SearchResult, SearchResultsWrapper } from "./styles";
import { Box, TextField, Paper, FormGroup, FormControlLabel, Checkbox } from "@mui/material";

const Todos: FC = () => {
  const [query, setQuery] = useState("");
  const debouncedQuery = useDebounce(query, 500);
  const { todosList, isLoading } = useListTodos();
  const [searchFilters, setSearchFilters] = useState({
    title: true,
  });

  const rows = useMemo<IRow<TodoTableFields>[]>(() => {
    // We can use rest operator or directly pass userList to Table since
    // all fields are same here as well, but this way enforces type safety.
    return todosList.map((item) => {
      const row: IRow<TodoTableFields> = {
        id: item.id,
        userId: item.userId,
        title: item.title,
        completed: item.completed,
        "action-detailView": item.id,
      };
      return row;
    });
  }, [todosList, isLoading]);

  const searchResults = useMemo<string[]>(() => {
    const emptyResults: string[] = [];
    if (query === "") return emptyResults;
    return todosList.reduce<string[]>((acc, curr) => {
      if (searchFilters.title && curr.title.toLowerCase().indexOf(query.toLowerCase()) !== -1)
        return [...acc, curr.title];
      return acc;
    }, emptyResults);
  }, [todosList, debouncedQuery]);

  const handleFilterChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSearchFilters({
      ...searchFilters,
      [name]: !(value === "true"),
    });
  };

  return (
    <div>
      <HeadSection>
        <Heading variant="h4">Todos</Heading>
        <Box sx={{ display: "flex", flexDirection: "row" }}>
          <div style={{ position: "relative", marginRight: "24px" }}>
            <TextField
              style={{ width: "400px" }}
              label="Search input"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              InputProps={{
                type: "search",
              }}
            />
            {searchResults.length > 0 && (
              <SearchResultsWrapper>
                <Paper sx={{ p: 2 }}>
                  {searchResults.map((item) => {
                    return <SearchResult>{item}</SearchResult>;
                  })}
                </Paper>
              </SearchResultsWrapper>
            )}
          </div>
          <FormGroup sx={{ flexDirection: "row" }}>
            <FormControlLabel
              control={
                <Checkbox
                  name="title"
                  value={searchFilters.title}
                  checked={searchFilters.title}
                  onChange={handleFilterChange}
                />
              }
              label="Title"
            />
          </FormGroup>
        </Box>
      </HeadSection>
      <Table columns={TODO_TABLE_COLUMNS} data={rows}></Table>;
    </div>
  );
};

export default Todos;
