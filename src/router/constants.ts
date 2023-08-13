import {
  DashboardOutlined,
  PeopleOutline,
  DynamicFeedOutlined,
  FormatListNumberedOutlined,
  InfoOutlined,
} from "@mui/icons-material";

export const ROUTES = {
  SIGN_IN: "/signin",
  DASHBOARD: "/",
  // User routes
  USERS: "/users",
  USER: "/user/:userId",
  // Album routes
  ALBUMS: "/albums",
  ALBUM: "/album/:albumId",
  TODOS: "/todos",
  ABOUT: "/about",
};

export const NAV_LINKS = [
  {
    title: "Dashboard",
    route: ROUTES.DASHBOARD,
    Icon: DashboardOutlined,
  },
  {
    title: "Users",
    route: ROUTES.USERS,
    Icon: PeopleOutline,
  },
  {
    title: "Albums",
    route: ROUTES.ALBUMS,
    Icon: DynamicFeedOutlined,
  },
  {
    title: "Todos",
    route: ROUTES.TODOS,
    Icon: FormatListNumberedOutlined,
  },
  {
    title: "About",
    route: ROUTES.ABOUT,
    Icon: InfoOutlined,
  },
];
