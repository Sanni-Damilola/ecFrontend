/** @format */

import React from "react";
import styled from "styled-components";
import DashBoardRoutes from "../Routes/DashBoardRoutes";
import DashSiderBar from "./DashSiderBar";
import { AiOutlinePlus } from "react-icons/ai";

const DashBoard = () => {
  return (
    <Container>
      <SideBar>
        <DashSiderBar />
      </SideBar>
      <Left>
        <DashBoardRoutes />
      </Left>
      <AddDevice>
        {/* 
        <AddButton>
          <AiOutlinePlus />
        </AddButton>
        */}
      </AddDevice>
    </Container>
  );
};

export default DashBoard;

const AddDevice = styled.div`
  position: absolute;
  display: flex;
  height: 100%;
  backdrop-filter: blur(2px);
`;
const AddButton = styled.div``;

const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  height: 100vh;
  align-items: center;
  position: relative;
`;
const SideBar = styled.div`
  width: 200px;
  height: 100%;
`;
const Left = styled.div`
  width: calc(100% - 220px);
  display: flex;
  height: 100vh;
  background-color: rgb(0, 0, 0);
  justify-content: center;
  align-items: center;
`;
