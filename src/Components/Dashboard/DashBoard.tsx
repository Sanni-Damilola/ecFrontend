/** @format */

import React from "react";
import styled from "styled-components";
import DashBoardRoutes from "../Routes/DashBoardRoutes";
import DashSiderBar from "./DashSiderBar";

const DashBoard = () => {
  return (
    <Container>
      <SideBar>
        <DashSiderBar />
      </SideBar>
      <Left>
        <DashBoardRoutes />
      </Left>
    </Container>
  );
};

export default DashBoard;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const SideBar = styled.div`
  height: 100vh;
  width: fit-content;
`;
const Left = styled.div`
width: 100%;
display: flex;
justify-content: center;
align-items: center;
background-color: red;
height: 100vh;
`;
