/** @format */
import React from "react";
import styled from "styled-components";
import logo from "../../images/logo-2.svg";
import SignUpButton from "../../Global/Props/Button";
import { FiMenu } from "react-icons/fi";
import { Link } from "react-router-dom";

const Header = () => {
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
      bc={showBoxShadow ? "value" : ""}
    >
      <Wrapper>
        <Logo>E-charging</Logo>
        <NavWrapper>
          <Link to={"/"}>
            <Nav>Home</Nav>
          </Link>
          <Nav>About</Nav>

          <Nav>Pricing</Nav>

          <Nav>Support</Nav>
        </NavWrapper>
        {show ? (
          <Cancel onClick={toggle}>X</Cancel>
        ) : (
          <HandBuggerMenu onClick={toggle}>
            <FiMenu />
          </HandBuggerMenu>
        )}
        <Authentication>
          <Link to={"/signin"}>
            <SignIn>sign in</SignIn>
          </Link>
          <Link to={"/signup"}>
            <SignUpButton padding="15px 30px" title=" sign up" />
          </Link>
        </Authentication>
      </Wrapper>
      {show ? (
        <MediaWrapper>
          <MediaNav>Home</MediaNav>
          <MediaNav>About</MediaNav>
          <MediaNav>Pricing</MediaNav>
          <MediaNav>Support</MediaNav>
        </MediaWrapper>
      ) : null}

      {/* done */}
    </Container>
  );
};

export default Header;

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
  margin-top: 10px;
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
const Logo = styled.h1`
  /* height: 35px; */
  font-size: 30px;
  font-weight: bolder;
  cursor: pointer;
`;
const NavWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 768px) {
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
