import { IconButton, Paper, Typography, styled } from "@mui/material";
import { Link } from "react-router-dom";

export const DetailsCard = styled(Paper)(() => ({
  display: "flex",
  alignItems: "center",
  //   gap: "12px",
  //   height: "250px",
  borderRadius: "32px",
  padding: "32px",
  background: "linear-gradient(90deg, rgba(4,71,176,1) 0%, rgba(3,145,210,1) 100%)}))",
}));

export const DetailKey = styled(Typography)(() => ({
  color: "white",
  fontSize: "12px",
  fontWeight: "600",
  marginTop: "12px",

  [`@media(min-width: 600px)`]: {
    marginLeft: "18px",
    fontSize: "18px",
  },
}));

export const DetailValue = styled(Typography)(() => ({
  color: "white",
  fontWeight: "600",
  marginLeft: "12px",
  marginTop: "12px",
  fontSize: "12px",

  [`@media(min-width: 600px)`]: {
    marginLeft: "18px",
    fontSize: "18px",
  },
}));

export const AlbumPhotosOverlay = styled("div")(() => ({
  padding: "12px",
  borderRadius: "18px",
  transition: "0.3s all ease",
  cursor: "pointer",
  position: "relative",

  "&:hover": {
    background: "rgba(0,0,0,0.2)",
    "& a": {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
  },
}));

export const ViewIcon = styled(Link)(() => ({
  position: "absolute",
  inset: "0",
  margin: "auto",
  display: "none",
}));
