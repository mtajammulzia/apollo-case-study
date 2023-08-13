import { FC, PropsWithChildren } from "react";
import { useLocation } from "react-router-dom";
import { Drawer } from "../UI";
import { capitalizeAll } from "../utilities/helpers/general";

const MainLayout: FC<PropsWithChildren> = ({ children }) => {
  const { pathname } = useLocation();

  const pageHeading = capitalizeAll(pathname.replaceAll("/", " ").replaceAll("-", " "));

  return (
    <Drawer heading={pageHeading.trim() === "" ? "Dashboard" : pageHeading}>{children}</Drawer>
  );
};

export default MainLayout;
