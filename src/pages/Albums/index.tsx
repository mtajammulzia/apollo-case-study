import { ChangeEvent, FC, useMemo, useState } from "react";
import { AlbumTableFields, IRow } from "../../utilities/types/table";
import { Table } from "../../UI";
import { ALBUM_TABLE_COLUMNS } from "../../utilities/constants/table";
import { Box, Checkbox, FormControlLabel, FormGroup, Paper, TextField } from "@mui/material";
import { useDebounce } from "../../hooks/useDebounce";
import {
  HeadSection,
  Heading,
  SearchResultsWrapper,
  SearchResult,
} from "../../utilities/styles/conmon";
import { useListAlbum } from "../../hooks/useListAlbums";

const Albums: FC = () => {
  const [query, setQuery] = useState("");
  const debouncedQuery = useDebounce(query, 500);
  const { albumList, isLoading } = useListAlbum();
  const [searchFilters, setSearchFilters] = useState({
    title: true,
  });

  const rows = useMemo<IRow<AlbumTableFields>[]>(() => {
    // We can use rest operator or directly pass userList to Table since
    // all fields are same here as well, but this way enforces type safety.
    return albumList.map((item) => {
      const row: IRow<AlbumTableFields> = {
        id: item.id,
        userId: item.userId,
        title: item.title,
        "action-detailView": `/album/${item.id}`,
      };
      return row;
    });
  }, [albumList, isLoading]);

  const searchResults = useMemo<string[]>(() => {
    const emptyResults: string[] = [];
    if (query === "") return emptyResults;
    return albumList.reduce<string[]>((acc, curr) => {
      if (searchFilters.title && curr.title.toLowerCase().indexOf(query.toLowerCase()) !== -1)
        return [...acc, curr.title];
      return acc;
    }, emptyResults);
  }, [albumList, debouncedQuery]);

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
        <Heading variant="h4">Albums</Heading>
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
      <Table columns={ALBUM_TABLE_COLUMNS} data={rows}></Table>;
    </div>
  );
};

export default Albums;
