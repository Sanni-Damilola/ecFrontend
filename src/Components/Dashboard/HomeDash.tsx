import React from "react";
import { BsArrowUpRight } from "react-icons/bs";
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
        <Up>
          <h2>
            just turn data <br /> into revenue!
          </h2>
          <span>
            watch your progress and learn everything we <br /> know about you
            and your information
          </span>
          <Discover>
            Discover
            <Icon>
              <BsArrowUpRight />
            </Icon>
          </Discover>
        </Up>
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
      <Right>
        <RightUp></RightUp>
      </Right>
    </Container>
  );
};

export default HomeDash;

const RightUp = styled.div``;

const Discover = styled.button`
  padding: 12px 30px;
  border-radius: 50px;
  font-size: 20px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;
  cursor: pointer;
  margin-top: 20px;
`;
const Icon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 3px;
  margin-left: 20px;
`;

const Left = styled.div`
  width: 50%;
  padding-left: 60px;
  margin-top: 50px;
`;
const Up = styled.div`
  width: 100%;

  h2 {
    font-size: 50px;
    font-weight: 700;
    text-transform: capitalize;
    margin: 5px;
  }

  span {
    font-size: 15px;
    font-weight: 600;
    color: rgb(0, 0, 0, 0.5);
  }
`;
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

  background-color: #f1f1fd;
  width: 100%;
  height: fit-content;
  padding-bottom: 30px;
  display: flex;
  @media screen and (min-width: 700px) {
    width: calc(100vw - 220px);
    margin-left: 220px;
    margin-top: 0px;
  }
`;
