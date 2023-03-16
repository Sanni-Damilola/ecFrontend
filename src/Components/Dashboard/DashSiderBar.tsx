import React, { useState } from "react";
import styled from "styled-components";
import { BsPersonCircle } from "react-icons/bs";
import { RiLogoutCircleRFill } from "react-icons/ri";

const DashSiderBar = () => {
  return (
    <Container>
      <Wrapper>
        <Logo>
          <div>CompANY</div>
        </Logo>

        <Profile>
          <div>
            <Circle>
              <BsPersonCircle />
            </Circle>
            <Name>John Doe</Name>
            <Title>Attendant</Title>
          </div>
        </Profile>

        <Dashboard>
          <MainDashboard>Dashboard</MainDashboard>
          <DashHolds></DashHolds>
        </Dashboard>
        <Logout>
          <div style={{ fontSize: "16px", color: "black" }}>
            <RiLogoutCircleRFill />
          </div>
          <div style={{ marginLeft: "8px", marginBottom: "5px" }}>Log Out</div>
        </Logout>
      </Wrapper>
    </Container>
  );
};

export default DashSiderBar;

const Container = styled.div`
  height: 100vh;
  width: 220px;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  height: 90%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const Logo = styled.div`
  display: flex;
  font-weight: bold;
  padding-left: 50px;
`;
const Profile = styled.div`
  display: flex;
  padding-left: 50px;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
const Circle = styled.div`
  width: 45px;
  height: 45px;
  padding: 3px;
  border-radius: 50%;
  background-color: #0066ff7a;
  color: #0066fffb;
  font-size: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Name = styled.div`
  font-size: 14px;
  font-weight: 600;
  margin-top: 5px;
`;
const Title = styled.div`
  padding: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 7px;
  font-weight: bold;
  border-radius: 15px;
  background-color: #d1d1048b;
`;
const Dashboard = styled.div`
  display: flex;
  flex-direction: column;
  height: 35%;
  justify-content: space-between;
  font-size: 12px;
`;
const MainDashboard = styled.div`
  font-weight: bold;
  border-left: 3px solid black;
  padding-left: 50px;
  height: 30px;
  display: flex;
  align-items: center;
`;
const DashHolds = styled.div``;
const Logout = styled.div`
  display: flex;
  padding-left: 50px;
  font-size: 12px;
  font-weight: 600;
  color: gray;
  align-items: center;
`;
