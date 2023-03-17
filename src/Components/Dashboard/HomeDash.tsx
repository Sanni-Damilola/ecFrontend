import React from "react";
import { BsArrowUpRight } from "react-icons/bs";
import styled from "styled-components";

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
              <Cards></Cards>
              <Rest></Rest>
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
      </Right>
    </Container>
  );
};

export default HomeDash;

const Box = styled.div`
  width: 200px;
  height: 250px;
  border-radius: 10px;
  background-color: green;
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
const Right = styled.div`
  margin-right: 50px;
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
const Cards = styled.div``;
const Rest = styled.div``;

const Container = styled.div`
  background-color: #f1f1fd;
  width: 100%;
  padding-top: 100px;
  height: fit-content;
  padding-bottom: 30px;
  display: flex;
  @media screen and (min-width: 700px) {
    width: calc(100vw - 220px);
    margin-left: 220px;
    margin-top: 0px;
  }
`;
