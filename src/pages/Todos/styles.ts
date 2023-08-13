import { Typography, styled } from "@mui/material";

export const HeadSection = styled("div")(() => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  width: "100%",
  padding: "24px 12px",
}));

export const Heading = styled(Typography)(() => ({
  fontWeight: "600",
}));

export const SearchResultsWrapper = styled("div")(() => ({
  position: "absolute",
  zIndex: 10,
  background: "#FFF",
  width: "100%",
}));

export const SearchResult = styled(Typography)(() => ({
  padding: "10px 0px",
  cursor: "pointer",
  borderBottom: "1px solid rgba(0, 0, 0, 0.2)",

  "&:last-child": {
    border: "none",
  },
}));
