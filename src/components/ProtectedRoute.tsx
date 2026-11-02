import React from "react";
import { Navigate, useLocation } from "react-router";
import { useAuth } from "../context/useAuth";

interface ProtectedRouteProps {
  children?: React.ReactNode;
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const { isAuthenticated } = useAuth();
  const location = useLocation();

  if (!isAuthenticated) {
    // Сохраняем путь, с которого пользователя перенаправили, чтобы вернуть его после логина
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children ? <>{children}</> : null;
};

export default ProtectedRoute;
