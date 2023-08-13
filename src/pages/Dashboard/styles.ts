import { Paper, Typography, styled } from "@mui/material";

export const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export const Card = styled(Paper)(() => ({
  display: "flex",
  alignItems: "center",
  gap: "12px",
  height: "250px",
  borderRadius: "32px",
  padding: "32px",
  background: "linear-gradient(90deg, rgba(4,71,176,1) 0%, rgba(3,145,210,1) 100%)}))",
}));

export const CardTitle = styled(Typography)(() => ({
  color: "white",
  fontWeight: "700",
  marginLeft: "5px",
}));

export const CardText = styled(Typography)(() => ({
  color: "white",
  fontWeight: "500",
  marginLeft: "5px",
}));
