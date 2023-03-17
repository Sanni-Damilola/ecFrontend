import React from "react";
import { useNavigate, useRoutes } from "react-router-dom";
import styled from "styled-components";
import AllDevices from "../Dashboard/AllDevices";
import DashBoardHome from "../Dashboard/AllDevices";
import Battery from "../Dashboard/Battery";
import DashHeader from "../Dashboard/DashHeader";
import HomeDash from "../Dashboard/HomeDash";
import MobileHeader from "../Dashboard/MobileHeader";
import Personal from "../Dashboard/Personal";
import Phone from "../Dashboard/Phone";

// import DashHeader from "../Dashboard.tsx/DashHeader";

// import NotFoudPage from "../Home/NotFoudPage/NotFoudPage";

const DashBoardRoutes = () => {
  let element = useRoutes([
    {
      path: "/dashboard",
      element: <HomeDash />,
    },
    {
      path: "/dashboard/all",
      element: <AllDevices />,
    },
    {
      path: "/dashboard/phone",
      element: <Phone />,
    },
    {
      path: "/dashboard/battery",
      element: <Battery />,
    },
    {
      path: "/dashboard/personal",
      element: <Personal />,
    },
    // {
    //   path: "*",
    //   element: <NotFoudPage />,
    // },
  ]);
  return (
    <div style={{ overflowX: "hidden" }}>
      <Els>
        <Desc>
          <DashHeader />
        </Desc>
        <Mobile>
          <MobileHeader />
        </Mobile>
        {element}
      </Els>
    </div>
  );
};

export default DashBoardRoutes;

const Mobile = styled.div`
  @media screen and (min-width: 700px) {
    display: none;
  }
`;
const Els = styled.div`
  width: 100vw;
  @media screen and (min-width: 700px) {
    display: flex;
  }
`;
const Desc = styled.div`
  display: none;
  @media screen and (min-width: 700px) {
    display: block;
  }
`;
