import React, { useState } from "react";
import styled from "styled-components";
import { BsCheck } from "react-icons/bs";
const Pricing = () => {
  const [show, setShow] = useState(false);

  const toggle = () => {
    setShow(!show);
  };

  return (
    <div>
      <Container>
        <Head>
          <Wrapper1>
            <Text1>Simple and Affordable Pricing </Text1>
            <Text2>
              There are many variations of passages of Lorem Ipsum available but
              the majority have suffered alteration in some form.
            </Text2>
            <MonthsHolder>
              <Div1>Months</Div1>
              {show ? (
                <Div2>
                  <Empty1
                    onClick={() => {
                      toggle();
                    }}
                    wd=""
                    bg="red"
                  ></Empty1>
                  <Empty2 bg1="darkblue"></Empty2>
                </Div2>
              ) : (
                <Div2>
                  <Empty1
                    onClick={() => {
                      toggle();
                    }}
                    wd="0"
                    bg="#fff"
                  ></Empty1>
                  <Empty2 bg1="green"></Empty2>
                </Div2>
              )}
              <Div3>Yearly</Div3>
            </MonthsHolder>
          </Wrapper1>

          <Wrapper2>
            <CardHolder>
              {/* This is the first card */}
              <Card>
                <Dollarholder>
                  <Dollar>
                    {" "}
                    $589<span>/mon</span>
                  </Dollar>
                  <Plus>Plus</Plus>
                </Dollarholder>
                <Text3>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Quasi, adipisci.
                </Text3>
                <Btn>Start Free Trail</Btn>
                <Line></Line>

                <AllHolder>
                  <Holder1>
                    <Icons>
                      <BsCheck />
                    </Icons>
                    <IconsText>All UI Components</IconsText>
                  </Holder1>
                  <Holder1>
                    <Icons>
                      <BsCheck />
                    </Icons>
                    <IconsText>Use with Unlimited Projects</IconsText>
                  </Holder1>
                  <Holder1>
                    <Icons>
                      <BsCheck />
                    </Icons>
                    <IconsText>Commercial Use</IconsText>
                  </Holder1>
                  <Holder1>
                    <Icons>
                      <BsCheck />
                    </Icons>
                    <IconsText>Email Support</IconsText>
                  </Holder1>
                  <Holder1>
                    <Icons>
                      <BsCheck />
                    </Icons>
                    <IconsText>Lifetime Access</IconsText>
                  </Holder1>
                  <Holder1>
                    <Icons>
                      <BsCheck />
                    </Icons>
                    <IconsText>Free LifeTime Updates</IconsText>
                  </Holder1>
                </AllHolder>
              </Card>
              {/* Second card  begins here */}
              <Card>
                <Dollarholder>
                  <Dollar>
                    {" "}
                    $589<span>/mon</span>
                  </Dollar>
                  <Plus>Plus</Plus>
                </Dollarholder>
                <Text3>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Quasi, adipisci.
                </Text3>
                <Btn>Start Free Trail</Btn>
                <Line></Line>

                <AllHolder>
                  <Holder1>
                    <Icons>
                      <BsCheck />
                    </Icons>
                    <IconsText>All UI Components</IconsText>
                  </Holder1>
                  <Holder1>
                    <Icons>
                      <BsCheck />
                    </Icons>
                    <IconsText>Use with Unlimited Projects</IconsText>
                  </Holder1>
                  <Holder1>
                    <Icons>
                      <BsCheck />
                    </Icons>
                    <IconsText>Commercial Use</IconsText>
                  </Holder1>
                  <Holder1>
                    <Icons>
                      <BsCheck />
                    </Icons>
                    <IconsText>Email Support</IconsText>
                  </Holder1>
                  <Holder1>
                    <Icons>
                      <BsCheck />
                    </Icons>
                    <IconsText>Lifetime Access</IconsText>
                  </Holder1>
                  <Holder1>
                    <Icons>
                      <BsCheck />
                    </Icons>
                    <IconsText>Free LifeTime Updates</IconsText>
                  </Holder1>
                </AllHolder>
              </Card>
              {/* Third card begins here too */}
              <Card>
                <Dollarholder>
                  <Dollar>
                    {" "}
                    $589<span>/mon</span>
                  </Dollar>
                  <Plus>Plus</Plus>
                </Dollarholder>
                <Text3>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Quasi, adipisci.
                </Text3>
                <Btn>Start Free Trail</Btn>
                <Line></Line>

                <AllHolder>
                  <Holder1>
                    <Icons>
                      <BsCheck />
                    </Icons>
                    <IconsText>All UI Components</IconsText>
                  </Holder1>

                  <Holder1>
                    <Icons>
                      <BsCheck />
                    </Icons>
                    <IconsText>Use with Unlimited Projects</IconsText>
                  </Holder1>
                  <Holder1>
                    <Icons>
                      <BsCheck />
                    </Icons>
                    <IconsText>Commercial Use</IconsText>
                  </Holder1>
                  <Holder1>
                    <Icons>
                      <BsCheck />
                    </Icons>
                    <IconsText>Email Support</IconsText>
                  </Holder1>
                  <Holder1>
                    <Icons>
                      <BsCheck />
                    </Icons>
                    <IconsText>Lifetime Access</IconsText>
                  </Holder1>
                  <Holder1>
                    <Icons>
                      <BsCheck />
                    </Icons>
                    <IconsText>Free LifeTime Updates</IconsText>
                  </Holder1>
                </AllHolder>
              </Card>
            </CardHolder>
          </Wrapper2>
        </Head>
      </Container>
    </div>
  );
};

export default Pricing;

const MonthsHolder = styled.div`
  width: 200px;

  /* background-color: red; */
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin-top: 20px;
`;
const Empty2 = styled.div<{ bg1: string }>`
  width: 75px;
  height: 18px;
  border-radius: 30px;
  background-color: ${(props) => props.bg1};
  position: relative;
  /* right: 35%; */
`;
const Empty1 = styled.div<{ wd: string; bg: string }>`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.bg};
  border: 5px solid darkslateblue;
  position: absolute;
  z-index: 9999;
  top: -30%;
  right: ${(props) => props.wd};
  transition: all 500ms;
`;
const Div1 = styled.div``;
const Div2 = styled.div`
  position: relative;
  /* width: 100%; */
  /* background-color: green; */
`;
const Div3 = styled.div``;
const Btn = styled.button`
  padding: 10px 100px;
  font-size: 16px;
  font-weight: 600;
  text-transform: capitalize;
  border: 0;
  outline: none;
  transition: all 360ms;
  color: white;
  background-color: #4a6cf7;
  cursor: pointer;
  border-radius: 5px;
  margin-bottom: 20px;

  @media screen and (max-width: 500px) {
    padding: 10px 50px;
  }
`;
const Icons = styled.div`
  width: 25px;
  height: 25px;
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #edf0fe;
  color: #4a6cf7;
  margin-right: 10px;
`;
const IconsText = styled.div``;
const Holder1 = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  color: #b6b4b4;
  font-weight: 600;

  @media screen and (max-width: 500px) {
    font-size: 14px;
  }
`;
const AllHolder = styled.div``;
const Line = styled.div`
  height: 1px;
  width: 100%;
  background-color: #e2e2e2;
  margin-bottom: 20px;
`;
const Text3 = styled.div`
  margin-top: 10px;
  margin-bottom: 10px;
  color: #b6b4b4;
  font-weight: 600;

  @media screen and (max-width: 500px) {
    font-size: 14px;
  }
`;
const Plus = styled.div`
  font-size: 20px;
  color: #dedada;
  /* margin-left: 170px; */

  @media screen and (max-width: 500px) {
    font-size: 18px;
  }
`;
const Dollarholder = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: bold;
  /* background-color: red; */
`;
const Dollar = styled.div`
  /* background-color: red; */
  font-size: 30px;
  color: #dedada;
  /* margin-left: 30px; */
  margin-right: 30px;

  span {
    color: grey;
  }

  @media screen and (max-width: 500px) {
    font-size: 25px;
    /* margin-left: 30px; */
  }
`;

const Card = styled.div`
  width: 330px;
  height: fit-content;
  margin: 5px;
  padding: 10px;
  border-radius: 5px;
  background-color: #ffff;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;

  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;

  @media screen and (max-width: 760px) {
    width: 400px;
    height: 400px;
  }
  @media screen and (max-width: 500px) {
    width: 270px;
    height: 400px;
  }
  @media screen and (max-width: 330px) {
    width: 200px;
    height: 450px;
  }
`;
const CardHolder = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: #fff;
  align-items: center;
  flex-wrap: wrap;

  @media screen and (max-width: 500px) {
    display: block;
    width: 100%;
    align-items: center;
    justify-content: center;

    background-color: green;
  }
  @media screen and (max-width: 780px) {
    display: block;
    width: 80%;
    align-items: center;

    justify-content: center;
  }
`;
const Text2 = styled.div`
  width: 200px;
  font-size: 18px;
  color: #b7b6b6;
  font-weight: 600;
  /* margin-bottom: 20px; */

  @media screen and (max-width: 760px) {
    font-size: 14px;
  }

  @media screen and (max-width: 500px) {
    font-size: 16px;
  }
  @media screen and (max-width: 330px) {
    font-size: 14px;
  }
`;
const Text1 = styled.div`
  width: 100%;
  font-size: 40px;
  font-weight: bolder;
  color: #000;

  @media screen and (max-width: 500px) {
    font-size: 30px;
    width: 200px;
    line-height: 35px;
    margin-bottom: 10px;
  }
`;
const Wrapper2 = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  /* background-color: yellow; */
`;
const Wrapper1 = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-top: 30px;
  margin-bottom: 30px;
  flex-direction: column;

  @media screen and (max-width: 500px) {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    /* background-color: red; */
    /* margin-left: 30px; */
  }
`;
const Head = styled.div`
  width: 95%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 500px) {
    width: 90%;
    display: flex;
  }
`;
const Container = styled.div`
  width: 100%;
  /* height: 100vh; */
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
  @media screen and (max-width: 500px) {
    width: 100%;
    display: flex;
    justify-content: center;
    background-color: aliceblue;
  }
`;
