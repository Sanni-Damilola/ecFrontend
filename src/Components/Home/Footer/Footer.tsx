/** @format */

import React from "react";
import styled from "styled-components";
import logo from "../../images/logo-2.svg";

const Footer = () => {
  return (
    <Container>
      <Wrapper>
        <Wrap>
          <Logo src={logo} />
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            lobortis.
          </Text>
          <Social></Social>
        </Wrap>
        <Div>
          <h3>Useful Links</h3>
          <Nav>Blog</Nav>
          <Nav>Pricing</Nav>
          <Nav>About</Nav>
        </Div>
        <Div>
          <h2>Terms</h2>
          <Nav>TOS</Nav>
          <Nav>Privacy Policy</Nav>
          <Nav>Refund Policy</Nav>
        </Div>
        <Div>
          <h2>Support & Help</h2>
          <Nav>Open Support Ticket</Nav>
          <Nav>Terms of Use</Nav>
          <Nav>About</Nav>
        </Div>
      </Wrapper>
      <Hold>© eCharging by CodeLab for You! (No Idea is Built Alone)</Hold>

      {/* almost done 90% */}
    </Container>
  );
};

export default Footer;

const Hold = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80px;

  /* background-color: #e4e9ff; */
  /* overflow-x: hidden; */
  white-space: nowrap;
  /* text-overflow: ellipsis; */

  color: rgb(149, 158, 177);
  @media screen and (max-width: 500px) {
    font-size: 10px;
  }
`;

const Div = styled.div`
  flex-direction: column;
  h2 {
    text-transform: capitalize;
    font-size: 17px;
  }
  display: flex;
  height: 200px;
  justify-content: center;
`;

const Wrap = styled.div`
  width: 300px;
  margin-right: 250px;
  margin-top: 22px;

  @media screen and (max-width: 768px) {
    margin: 0;
  }
`;

const Nav = styled.div`
  font-weight: 600;
  font-size: 15px;
  color: rgb(149, 158, 177);
  transition: all 360ms;
  cursor: pointer;
  margin-top: 18px;

  width: fit-content;
  :hover {
    color: rgb(74, 108, 247);
  }
`;
const Text = styled.div`
  font-weight: 600;
  font-size: 15px;
  color: rgb(149, 158, 177);
  transition: all 360ms;
  cursor: pointer;
  width: fit-content;
  margin-top: 18px;
  :hover {
    color: rgb(74, 108, 247);
  }
`;

const Social = styled.div``;

const Container = styled.div`
  /* background-color: #f6f7ff; */
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 60px;
  height: 300px;
  position: relative;
  flex-wrap: wrap;
  @media screen and (max-width: 768px) {
    flex-wrap: wrap;
  }
`;

const Logo = styled.img`
  height: 30px;
  cursor: pointer;
`;

const Wrapper = styled.div`
  width: 90%;
  display: grid;
  justify-content: center;
  align-items: center;
  grid-gap: 10px;
  margin-bottom: 50px;
  grid-template-columns: repeat(4, 1fr);

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
