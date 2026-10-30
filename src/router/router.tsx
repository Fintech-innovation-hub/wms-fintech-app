import { createBrowserRouter } from "react-router";

import MainLayout from "../components/layout/MainLayout";
import Home from "../pages/home/Home";
import About from "../pages/home/About";

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
]);
