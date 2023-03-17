/** @format */

import React from "react";
import { Link } from "react-scroll";
import AllRoutes from "./Components/Routes/AllRoutes";
import { HiArrowUp } from "react-icons/hi";
import styled from "styled-components";
import DashBoard from "./Components/Dashboard/DashBoard";

function App() {
  const [scroll, setScroll] = React.useState(false);

  const showArrowUp = () => {
    if (window.scrollY >= 1) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  window.addEventListener("scroll", showArrowUp);

  return (
    <Container>
      {/* <AllRoutes /> */}
      <DashBoard />
      {scroll ? (
        <Up offset={-100} duration={500} smooth={true} to="/home">
          <Icon>
            <HiArrowUp />
          </Icon>
        </Up>
      ) : null}
    </Container>
  );
}

export default App;

const Up = styled(Link)`
  padding: 14px 15px;
  border-radius: 4px;
  cursor: pointer;
  background-color: #4a6cf7;
  right: 1%;
  box-shadow: #4a6cf7 0px 8px 24px;
  position: fixed;
  bottom: 2%;
  transition: all 360ms;
`;

const Icon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
`;

const Container = styled.div``;
