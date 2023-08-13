import { Navigate, Outlet, useLocation } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import { useAuth } from "../contexts/Auth";

export function RequireAuth() {
  const { isConnected, isLoading } = useAuth();

  const location = useLocation();

  if (!isConnected) return <Navigate to="/signin" state={{ from: location }} />;

  if (isLoading) return <></>;

  return (
    <MainLayout>
      <Outlet />
    </MainLayout>
  );
}
