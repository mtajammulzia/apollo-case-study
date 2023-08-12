import { BrowserRouter, Route, Routes } from "react-router-dom";
import { About, Dashboard, Posts, SignIn, Todos, Users } from "../pages";
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
          <Route path={ROUTES.POSTS} element={<Posts />}></Route>
          <Route path={ROUTES.TODOS} element={<Todos />}></Route>
          <Route path={ROUTES.ABOUT} element={<About />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
