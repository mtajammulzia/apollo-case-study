import { ChangeEvent, FC, useMemo, useState } from "react";
import { UserTableFields, IRow } from "../../utilities/types/table";
import { Table } from "../../UI";
import { USER_TABLE_COLUMNS } from "../../utilities/constants/table";
import { useListUsers } from "../../hooks/useListUsers";
import { HeadSection, Heading, SearchResult, SearchResultsWrapper } from "./styles";
import { Box, Checkbox, FormControlLabel, FormGroup, Paper, TextField } from "@mui/material";
import { useDebounce } from "../../hooks/useDebounce";

const Users: FC = () => {
  const [query, setQuery] = useState("");
  const debouncedQuery = useDebounce(query, 500);
  const { userList, isLoading } = useListUsers();
  const [searchFilters, setSearchFilters] = useState({
    username: true,
    name: true,
    email: true,
  });

  const rows = useMemo<IRow<UserTableFields>[]>(() => {
    // We can use rest operator or directly pass userList to Table since
    // all fields are same here as well, but this way enforces type safety.
    return userList.map((item) => {
      const row: IRow<UserTableFields> = {
        id: item.id,
        name: item.name,
        username: item.username,
        phone: item.phone,
        email: item.email,
        website: item.website,
        address: item.address,
        company: item.company,
        "action-detailView": item.id,
      };
      return row;
    });
  }, [userList, isLoading]);

  const searchResults = useMemo<string[]>(() => {
    const emptyResults: string[] = [];
    if (query === "") return emptyResults;
    return userList.reduce<string[]>((acc, curr) => {
      if (searchFilters.username && curr.username.toLowerCase().indexOf(query.toLowerCase()) !== -1)
        return [...acc, curr.name];
      if (searchFilters.name && curr.name.toLowerCase().indexOf(query.toLowerCase()) !== -1)
        return [...acc, curr.name];
      if (searchFilters.email && curr.email.toLowerCase().indexOf(query.toLowerCase()) !== -1) {
        console.log(curr.email.indexOf(query));
        return [...acc, curr.name];
      }
      return acc;
    }, emptyResults);
  }, [userList, debouncedQuery]);

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
        <Heading variant="h4">Users</Heading>
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
                  name="username"
                  value={searchFilters.username}
                  checked={searchFilters.username}
                  onChange={handleFilterChange}
                />
              }
              label="Username"
            />
            <FormControlLabel
              control={
                <Checkbox
                  name="name"
                  value={searchFilters.name}
                  checked={searchFilters.name}
                  onChange={handleFilterChange}
                />
              }
              label="Name"
            />
            <FormControlLabel
              control={
                <Checkbox
                  name="email"
                  value={searchFilters.email}
                  checked={searchFilters.email}
                  onChange={handleFilterChange}
                />
              }
              label="Email"
            />
          </FormGroup>
        </Box>
      </HeadSection>
      <Table columns={USER_TABLE_COLUMNS} data={rows}></Table>;
    </div>
  );
};

export default Users;
