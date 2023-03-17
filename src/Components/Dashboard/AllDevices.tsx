/** @format */

import React from "react";
import styled from "styled-components";
import { useAppSelector } from "../Global/ReduxState/Store";
import { useQuery } from "@tanstack/react-query";
import { getAllDevice } from "../Api/Api";
import { GiElectric } from "react-icons/gi";
import { BsArrowUpRight } from "react-icons/bs";
import Card2x from "./Props/Card2x";
import { HiLockClosed } from "react-icons/hi";
import { MdLaptopMac } from "react-icons/md";
import { IoIosPeople } from "react-icons/io";
import pic from "../images/sso.jpg";
import { RiDeleteBin6Line } from "react-icons/ri";

const AllDevices = () => {
  const fetchAlDevice = useQuery({
    queryKey: ["allDevice"],
    queryFn: getAllDevice,
  });

  console.log("Data", fetchAlDevice);

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
          <div style={{ display: "flex", alignItems: "center" }}>
            <Discover>
              Discover
              <Icon>
                <BsArrowUpRight />
              </Icon>
            </Discover>
          </div>
        </Up>
        <Down>
          <Wrapper2x>
            <div style={{ width: "96%" }}>
              <Title>
                <div>Data classification</div>
                <div>. . .</div>
              </Title>
              <Cards>
                <Card2x
                  iconx={<IoIosPeople />}
                  text="Public"
                  color="#db009ace"
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
              <Rest>
                <Title>
                  <div>Top Devices</div>
                  <div>. . .</div>
                </Title>
                <Items>
                  <OtherItemz>
                    <Picz>
                      <img src={pic} />
                    </Picz>
                    <Detailz>
                      <Boldz>Tecno Spark9 pro</Boldz>
                      <Faintz>01.00pm CAT</Faintz>
                    </Detailz>
                  </OtherItemz>
                  <OtherItemz>
                    <Numberz>P001</Numberz>
                    <Indicator>
                      <GiElectric />
                    </Indicator>
                  </OtherItemz>
                </Items>
              </Rest>
            </div>
          </Wrapper2x>
        </Down>
      </Left>
      <Right>
        <RightUp>
          <Box>
            <Circle>76</Circle>
            <Text>Operations ststus</Text>
            <p>
              13/27 completed <br /> running process
            </p>
          </Box>
          <Box2>
            <Pro>pro</Pro>
            <Upgrade>
              upgrade <br /> your <br /> crowd
            </Upgrade>
            <p>
              your pro plan for open <br /> better result
            </p>
          </Box2>
        </RightUp>
        <RightDown>
          <Wrap>
            <Data>
              <Position>
                <Radio checked type={"radio"} />
                <Titles>p40</Titles>
                <Titles>| |</Titles>
                <Titles>p40</Titles>
              </Position>
              <DateAndTime>Today At 20 : 30</DateAndTime>
            </Data>
            <Button>
              <DeleteWrap>
                delete{" "}
                <DeleteIcon>
                  <RiDeleteBin6Line />
                </DeleteIcon>
              </DeleteWrap>
            </Button>
          </Wrap>
          <Wrap>
            <Data>
              <Position>
                <Radio checked type={"radio"} />
                <Titles>p40</Titles>
                <Titles>| |</Titles>
                <Titles>p40</Titles>
              </Position>
              <DateAndTime>Today At 20 : 30</DateAndTime>
            </Data>
            <Button>
              <DeleteWrap>
                delete{" "}
                <DeleteIcon>
                  <RiDeleteBin6Line />
                </DeleteIcon>
              </DeleteWrap>
            </Button>
          </Wrap>
          <Wrap>
            <Data>
              <Position>
                <Radio checked type={"radio"} />
                <Titles>p40</Titles>
                <Titles>| |</Titles>
                <Titles>p40</Titles>
              </Position>
              <DateAndTime>Today At 20 : 30</DateAndTime>
            </Data>
            <Button>
              <DeleteWrap>
                delete{" "}
                <DeleteIcon>
                  <RiDeleteBin6Line />
                </DeleteIcon>
              </DeleteWrap>
            </Button>
          </Wrap>
        </RightDown>
      </Right>
    </Container>
  );
};

export default AllDevices;

const Wrap = styled.div`
  width: 250px;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 10px;
  margin: 5px;
  background-color: #ffc0cb;
`;

const DeleteIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 3px;
  margin-left: 10px;
`;

const Button = styled.button`
  margin-top: 10px;
  width: 100%;
  cursor: pointer;
  height: 55px;
  border-radius: 0px 0px 12px 12px;
  border: 0;
  outline: none;
  border-top: 1px solid rgb(0, 0, 0, 0.1);
  background-color: transparent;
`;

const DeleteWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  height: 80px;
  width: 100%;
  font-weight: 500;
  color: red;
  text-transform: capitalize;
`;

const Position = styled.div`
  display: flex;
  margin-bottom: 10px;
  width: 100%;
`;

const Radio = styled.input`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  cursor: pointer;
  width: 22px;
  height: 22px;
  border-radius: 8px;
  /* border: 3px solid #ac6dde; */
  border: 3px solid #eb72bb;
  margin-right: 5px;
`;

const Titles = styled.div`
  color: white;
  margin-right: 20px;
  margin-left: 5px;
  font-weight: 600;
  font-size: 18px;
  text-transform: uppercase;
`;

const DateAndTime = styled.div`
  margin-left: 40px;
  font-size: 13px;
  font-weight: 600;
  color: rgb(0, 0, 0, 0.5);
`;

const Data = styled.div``;

const RightDown = styled.div`
  width: 100%;
  height: 600px;
  /* background-color: red; */
  padding-bottom: 30px;
  padding-top: 40px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const Box = styled.div`
  width: 200px;
  height: 250px;
  border-radius: 10px;
  background-color: #07b307;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  p {
    font-size: 13px;
    font-weight: 600;
    color: rgb(0, 0, 0, 0.5);
  }
`;
const Box2 = styled.div`
  width: 300px;
  height: 250px;
  border-radius: 10px;
  background-color: pink;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 20px;
  padding-left: 30px;

  p {
    font-size: 13px;
    font-weight: 600;
    color: rgb(0, 0, 0, 0.5);
  }
`;
const Pro = styled.div`
  cursor: pointer;
  background-color: black;
  width: 30px;
  height: 18px;
  font-size: 8px;
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  margin-bottom: 6px;
`;
const Upgrade = styled.div`
  font-weight: 600;
  text-transform: uppercase;
  font-size: 25px;
`;
const Text = styled.div`
  font-size: 15px;
  font-weight: 600;
`;
const Circle = styled.div`
  width: 60px;
  height: 60px;
  margin-bottom: 13px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 5px solid lavender;
  border-top: 5px solid black;
  border-radius: 50%;
`;
const RightUp = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

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
  padding-top: 60px;
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

const Down = styled.div`
  margin-top: 40px;
`;
const Right = styled.div`
  height: 100%;
  padding-right: 50px;
  padding-top: 40px;
  flex-direction: column;
  background-color: #eeeeee;
`;
const Heading = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
const Items = styled.div`
  margin-top: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const OtherItemz = styled.div`
  display: flex;
  align-items: center;
`;
const Picz = styled.div`
  width: 30px;
  height: 30px;
  padding: 6px;
  border-radius: 50%;
  img {
    object-fit: cover;
    border-radius: 50%;
    width: 100%;
  }
`;
const Detailz = styled.div``;
const Boldz = styled.div`
  font-size: 13px;
  font-weight: bold;
`;
const Faintz = styled.div`
  font-size: 10px;
  font-weight: bold;
  color: silver;
`;
const Numberz = styled.div`
  font-weight: bold;
  font-size: 16px;
`;
const Indicator = styled.div`
  margin-left: 15px;
  color: #ccae04;
  font-size: 25px;
`;
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
  margin-top: 40px;
`;
const Rest = styled.div`
  margin-top: 40px;
`;

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
    height: 100vh;
  }
`;
