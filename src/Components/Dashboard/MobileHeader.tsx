/** @format */
import React from "react";
import styled from "styled-components";
import logo from "../images/logo-2.svg";
import { FiMenu } from "react-icons/fi";
import { Link } from "react-router-dom";

const MobileHeader = () => {
  const [show, setShow] = React.useState(false);
  const toggle = () => {
    setShow(!show);
  };

  const [showBoxShadow, setBoxShadow] = React.useState(false);
  const changeHeaderBoxShadow = () => {
    if (window.scrollY) {
      setBoxShadow(true);
    } else {
      setBoxShadow(false);
    }
  };

  window.addEventListener("scroll", changeHeaderBoxShadow);

  return (
    <Container
      boxShadow={showBoxShadow ? "value" : ""}
      bc={showBoxShadow ? "value" : ""}>
      <Wrapper>
        <Logo src={logo} />
        <NavWrapper>
          <Nav>New Device</Nav>
          <Nav>Pending</Nav>
          <Nav>Collected</Nav>

          <Link to="/dashboard">
            <Nav>Home</Nav>
          </Link>
          <Nav>P-Spaces</Nav>

          <Nav>B-Spaces</Nav>

          <Nav>Personal</Nav>
          <Nav>Pending</Nav>
          <Nav>Collected</Nav>
        </NavWrapper>
        {show ? (
          <Cancel onClick={toggle}>X</Cancel>
        ) : (
          <HandBuggerMenu onClick={toggle}>
            <FiMenu />
          </HandBuggerMenu>
        )}
        <Authentication>
          <SignIn>sign in</SignIn>
          {/* <SignUpButton padding="15px 30px" title=" sign up" /> */}
        </Authentication>
      </Wrapper>
      {show ? (
        <MediaWrapper>
          <MediaNav>New Device</MediaNav>
          <Link to="/dashboard">
            <MediaNav>Home</MediaNav>
          </Link>
          <Link to="/dashboard/next">
            <MediaNav>P-Spaces</MediaNav>
          </Link>

          <MediaNav>B-Spaces</MediaNav>
          <MediaNav>Personal</MediaNav>
          <MediaNav>Pending</MediaNav>
          <MediaNav>Collected</MediaNav>
        </MediaWrapper>
      ) : null}

      {/* done */}
    </Container>
  );
};

export default MobileHeader;

const Cancel = styled.pre`
  border: 2px solid #4a6cf7;
  padding: 3px 16px;
  font-weight: 500;
  border-radius: 5px;
  display: none;
  font-size: 30px;
  @media screen and (max-width: 768px) {
    display: flex;
  }
  cursor: pointer;
`;

const MediaNav = styled.div`
  cursor: pointer;
  transition: all 350ms;
  font-weight: 400;
  font-size: 16px;
  margin-top: 30px;
  width: fit-content;
  :hover {
    color: rgb(0, 0, 0, 0.5);
  }
`;

const MediaWrapper = styled.div`
  position: absolute;
  right: 10%;
  display: none;

  top: 70.5px;
  background-color: white;
  width: fit-content;
  width: 180px;
  height: fit-content;
  padding-top: 20px;
  padding-left: 30px;
  padding-bottom: 30px;
  flex-direction: column;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

  @media screen and (max-width: 768px) {
    display: flex;
  }
`;

const HandBuggerMenu = styled.div`
  font-size: 30px;
  cursor: pointer;
  border: 2px solid #4a6cf7;
  align-items: center;
  padding: 6px 10px;
  border-radius: 5px;
  display: none;
  z-index: 3;
  @media screen and (max-width: 768px) {
    display: flex;
  }
`;

const Container = styled.div<{ boxShadow: string; bc: string }>`
  width: 100%;
  height: 70px;
  transition: all 360ms;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  z-index: 4;
  background-color: ${({ bc }) => (bc ? "white" : "transparent")};
  box-shadow: ${({ boxShadow }) =>
    boxShadow
      ? "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px"
      : "none"};
`;
const Wrapper = styled.div`
  width: 95%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 768px) {
    width: 80%;
  }
`;
const Logo = styled.img`
  height: 35px;
  cursor: pointer;
`;
const NavWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 700px) {
    display: none;
  }
`;
const Authentication = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 40px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
const SignIn = styled.button`
  color: black;
  font-weight: 700;
  font-size: 17px;
  border: 0;
  margin-right: 20px;
  outline: none;
  cursor: pointer;
  background-color: transparent;
  text-transform: capitalize;
`;
const Nav = styled.div`
  cursor: pointer;
  transition: all 350ms;
  font-weight: 400;
  font-size: 16px;
  margin-right: 60px;
  @media screen and (max-width: 768px) {
    margin-top: 10px;
    background-color: red;
  }
  :hover {
    color: rgb(0, 0, 0, 0.5);
  }
`;
