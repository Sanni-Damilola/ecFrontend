/** @format */

import React, { useState } from "react";
import styled from "styled-components";
import { BsPersonCircle } from "react-icons/bs";
import { RiLogoutCircleRFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import { useAppSelector } from "../Global/ReduxState/Store";
import { useQuery } from "@tanstack/react-query";
import { GetOneUser } from "../Api/Api";

const DashSiderBar = () => {
  const [all, setAll] = useState(false);
  const [phone, setPhone] = useState(false);
  const [battery, setBattery] = useState(false);
  const [personal, setPersonal] = useState(false);
  const [dash, setDash] = useState(true);

  const gotoDash = () => {
    setPhone(false);
    setBattery(false);
    setPersonal(false);
    setAll(false);
    setDash(true);
  };
  const gotoAll = () => {
    setPhone(false);
    setBattery(false);
    setPersonal(false);
    setAll(true);
    setDash(false);
  };
  const gotoPhone = () => {
    setPhone(true);
    setBattery(false);
    setPersonal(false);
    setAll(false);
    setDash(false);
  };
  const gotoBattery = () => {
    setBattery(true);
    setPhone(false);
    setDash(false);
    setAll(false);
    setPersonal(false);
  };
  const gotoPersonal = () => {
    setPersonal(true);
    setPhone(false);
    setBattery(false);
    setDash(false);
    setAll(false);
  };

  const user = useAppSelector((state) => state.currentUser);

  const fetchUser = useQuery({
    queryKey: ["user"],
    queryFn: () => GetOneUser(user?._id),
  });

  return (
    <Container>
      <Wrapper>
        <Ups>
          <Logo>ECHARGING</Logo>
          <Profile>
            <div>
              <Circle>
                <BsPersonCircle />
              </Circle>
              <Name>{user?.userName?.toUpperCase()}</Name>
              <Title>Attendant</Title>
            </div>
          </Profile>

          <Dashboard>
            <Link style={{ textDecoration: "none" }} to={"/"}>
              <MainDashboard
                onClick={gotoDash}
                cl={dash ? "black" : "gray"}
                bdl={dash ? "3px solid black" : ""}>
                Dashboard
              </MainDashboard>
            </Link>

            <Link style={{ textDecoration: "none" }} to={"/all"}>
              <DashHolds
                onClick={gotoAll}
                cl={all ? "black" : "gray"}
                bdl={all ? "3px solid black" : ""}>
                All
              </DashHolds>
            </Link>
            <Link style={{ textDecoration: "none" }} to={"/phone"}>
              <DashHolds
                onClick={gotoPhone}
                cl={phone ? "black" : "gray"}
                bdl={phone ? "3px solid black" : ""}>
                Phone
              </DashHolds>
            </Link>
            <Link style={{ textDecoration: "none" }} to={"/battery"}>
              <DashHolds
                onClick={gotoBattery}
                cl={battery ? "black" : "gray"}
                bdl={battery ? "3px solid black" : ""}>
                Batttery
              </DashHolds>
            </Link>
            <Link style={{ textDecoration: "none" }} to={"/personal"}>
              <DashHolds
                onClick={gotoPersonal}
                cl={personal ? "black" : "gray"}
                bdl={personal ? "3px solid black" : ""}>
                Personal
              </DashHolds>
            </Link>
          </Dashboard>
        </Ups>
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
  height: 100%;
  width: 220px;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fffff9;
`;

const Wrapper = styled.div`
  height: 90%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const Ups = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 40px;
`;
const Logo = styled.h2`
  display: flex;
  font-weight: 700;
  margin: 0;
  padding-left: 50px;
  color: #170708;
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
  width: 80px;
  height: 80px;
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
  font-size: 19px;
  font-weight: 600;
  text-transform: capitalize;
  margin-top: 5px;
  color: #170708;
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
  font-size: 17px;
`;
const MainDashboard = styled.div<{ cl: string; bdl: string }>`
  font-weight: bold;
  color: ${(props) => props.cl};
  border-left: ${(props) => props.bdl};
  padding-left: 50px;
  height: 30px;
  display: flex;
  cursor: pointer;
  align-items: center;
`;
const DashHolds = styled.div<{ cl: string; bdl: string }>`
  color: ${(props) => props.cl};
  border-left: ${(props) => props.bdl};
  padding-left: 50px;
  display: flex;
  align-items: center;
  font-weight: 600;
  font-size: 17px;
  cursor: pointer;
`;
const Logout = styled.div`
  display: flex;
  padding-left: 50px;
  font-size: 20px;
  font-weight: 600;
  color: gray;
  align-items: center;
  cursor: pointer;
`;
