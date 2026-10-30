import { createBrowserRouter } from "react-router";

import MainLayout from "../components/layout/MainLayout";
import Home from "../pages/home/Home";
import About from "../pages/home/About";
import ProfileAbduqodir from "../pages/profile-abduqodir/ProfileAbduqodir";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "profile-abduqodir", element: <ProfileAbduqodir /> },
    ],
  },
]);
