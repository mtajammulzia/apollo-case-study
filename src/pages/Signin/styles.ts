import { Input, styled } from "@mui/material";

export const SignInWrapper = styled("div")(() => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
  width: "100vw",
}));

export const CardWrapper = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: "12px",
  padding: "18px 12px",
}));

export const InputComponent = styled(Input)(() => ({
  height: "52px",
  width: "300px",
}));
