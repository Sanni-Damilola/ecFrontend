import React from "react";
import styled from "styled-components";
import Card2x from "./Props/Card2x";
import { IoIosPeople } from "react-icons/io";
import { MdLaptopMac } from "react-icons/md";
import { GiElectric } from "react-icons/gi";
import { HiLockClosed } from "react-icons/hi";

const HomeDash = () => {
  return (
    <Container>
      <Left>
        Left
        <Up>Up</Up>
        <Down>
          <Wrapper2x>
            <div style={{ width: "80%" }}>
              <Title>
                <div>Data classification</div>
                <div>. . .</div>
              </Title>
              <Cards>
                <Card2x
                  iconx={<IoIosPeople />}
                  text="Public"
                  color="pink"
                  wide="90px"
                  high="38px"
                />
                <Card2x
                  iconx={<MdLaptopMac />}
                  text="Public"
                  color="#00b9a1"
                  wide="90px"
                  high="38px"
                />{" "}
                <Card2x
                  iconx={<HiLockClosed />}
                  text="Public"
                  color="#a3c002"
                  wide="90px"
                  high="38px"
                />{" "}
                <Card2x
                  iconx={<GiElectric />}
                  text="Public"
                  color="#c96d04"
                  wide="90px"
                  high="38px"
                />
              </Cards>
              <Rest></Rest>
            </div>
          </Wrapper2x>
        </Down>
      </Left>
      <Right>Right</Right>
    </Container>
  );
};

export default HomeDash;
const Left = styled.div`
  width: 50%;
`;
const Up = styled.div``;
const Down = styled.div``;
const Right = styled.div``;
const Wrapper2x = styled.div`
  display: flex;
  justify-content: center;
`;
const Title = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: bold;
  font-size: 14px;
`;
const Cards = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 50px;
`;
const Rest = styled.div``;

const Container = styled.div`
  background-color: #fafaff;
  display: flex;
  @media screen and (min-width: 700px) {
    width: calc(100vw - 220px);
    margin-left: 220px;
    margin-top: 0px;
  }
`;
