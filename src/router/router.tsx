import { createBrowserRouter } from "react-router";

import MainLayout from "../components/layout/MainLayout";
import Home from "../pages/home/Home";
import About from "../pages/home/About";
import Profile from "../pages/home/Profile";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [{ index: true, element: <Home /> }],
  },
  {
    path: "/about",
    element: <MainLayout />,
    children: [{ index: true, element: <About /> }],
  },
  {
    path: "/profile",
    element: <MainLayout />,
    children: [{ index: true, element: <Profile
       /> }],
  },
]);
