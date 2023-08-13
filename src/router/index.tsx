import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  About,
  Dashboard,
  SignIn,
  Todos,
  UserDetails,
  Users,
  Albums,
  AlbumDetails,
} from "../pages";
import { RequireAuth } from "./RequireAuth";
import { ROUTES } from "./constants";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTES.SIGN_IN} element={<SignIn />}></Route>

        {/* Protected routes. */}
        <Route path="/" element={<RequireAuth />}>
          <Route path={ROUTES.DASHBOARD} element={<Dashboard />}></Route>
          <Route path={ROUTES.USERS} element={<Users />}></Route>
          <Route path={ROUTES.USER} element={<UserDetails />}></Route>
          <Route path={ROUTES.ALBUMS} element={<Albums />}></Route>
          <Route path={ROUTES.ALBUM} element={<AlbumDetails />}></Route>
          <Route path={ROUTES.TODOS} element={<Todos />}></Route>
          <Route path={ROUTES.ABOUT} element={<About />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
