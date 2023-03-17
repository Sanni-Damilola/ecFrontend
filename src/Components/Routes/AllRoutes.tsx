import React from "react";
import { useRoutes } from "react-router";
import SignIn from "../Auth/SignIn/SignIn";
import SignUp from "../Auth/SignUp/SignUp";
import HomeScreen from "../Home/LandingPage/HomeScreen";
import NotFoudPage from "../Home/NotFoudPage/NotFoudPage";

const AllRoutes = () => {
  // done
  const element = useRoutes([
    {
      path: "/",
      element: <HomeScreen />,
    },
    {
      path: "/signin",
      element: <SignIn />,
    },
    {
      path: "/signup",
      element: <SignUp />,
    },
    // {
    //     path: "/dashboard",
    //     element: <DashBoard />
    // },
    // {
    //     path: "*",
    //     element: <NotFoudPage />
    // },
  ]);

  return element;
};

export default AllRoutes;
