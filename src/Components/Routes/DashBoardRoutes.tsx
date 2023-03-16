import React from "react";
import { useNavigate, useRoutes } from "react-router-dom";
import styled from "styled-components";
import DashBoardHome from "../Dashboard/DashBoardHome";
import DashHeader from "../Dashboard/DashHeader";
import MobileHeader from "../Dashboard/MobileHeader";
import PSpaces from "../Dashboard/PSpaces";

// import DashHeader from "../Dashboard.tsx/DashHeader";

// import NotFoudPage from "../Home/NotFoudPage/NotFoudPage";

const DashBoardRoutes = () => {
  let element = useRoutes([
    {
      path: "/dashboard",
      element: <DashBoardHome />,
    },
    {
      path: "/dashboard/pspaces",
      element: <PSpaces />,
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
