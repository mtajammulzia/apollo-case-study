import { FC, useState } from "react";
import { CardWrapper, InputComponent, SignInWrapper } from "./styles";
import { Button, Typography } from "@mui/material";
import { useAuth } from "../../contexts/Auth";
import { Navigate } from "react-router-dom";

const SignIn: FC = () => {
  const { isConnected, login, isLoading } = useAuth();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    login(username, password);
  };

  if (isLoading) return <></>;

  if (isConnected) return <Navigate to="/" />;

  return (
    <SignInWrapper>
      <CardWrapper>
        <Typography variant="h4">Sign In</Typography>
        <InputComponent
          type="text"
          placeholder="Username"
          name="username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <InputComponent
          type="password"
          placeholder="Password"
          name="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button sx={{ mt: 4 }} variant="contained" onClick={handleLogin}>
          Continue
        </Button>
      </CardWrapper>
    </SignInWrapper>
  );
};

export default SignIn;
