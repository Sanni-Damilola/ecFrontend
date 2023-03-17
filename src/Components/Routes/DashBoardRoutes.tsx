/** @format */

import React from "react";
import {useRoutes } from "react-router-dom";
import AllDevices from "../Dashboard/AllDevices";
import Battery from "../Dashboard/Battery";
import HomeDash from "../Dashboard/HomeDash";
import Personal from "../Dashboard/Personal";
import Phone from "../Dashboard/Phone";


const DashBoardRoutes = () => {
  let element = useRoutes([
    {
      path: "/",
      element: <HomeDash />,
    },
    {
      path: "/all",
      element: <AllDevices />,
    },
    {
      path: "/phone",
      element: <Phone />,
    },
    {
      path: "/battery",
      element: <Battery />,
    },
    {
      path: "/personal",
      element: <Personal />,
    },
  ]);
  return element;
};

export default DashBoardRoutes;
