import { createBrowserRouter } from "react-router";

import MainLayout from "../components/layout/MainLayout";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import About from "../pages/home/About";
import Basket from "../pages/basket/Basket";
import UserProfile from "../pages/userprofile/UserProfile";
import BasketHistory from "../pages/home/BasketHistory/BasketHistory";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "login", element: <Login /> },
      { path: "about", element: <About /> },
      { path: "basket", element: <Basket /> },
      { path: "baskethistory", element: <BasketHistory /> },
      { path: "userprofile", element: <UserProfile /> },
    ],
  },
]);
