import React from "react";
import styled from "styled-components";
import pics from "../../images/happy1.jpg";

const Lastest = () => {
  return (
    <Container>
      <Wrapper>
        <Upper>
          <Text>Our Gadgets</Text>
          <P>
            This are the differents gadgets that we have can accomdate on your
            platform
          </P>
        </Upper>
        <Lower>
          <CardHolder>
            <Card>
              <Pic>
                <img src={pics} alt="" />
              </Pic>
              <ImgText>Best Service</ImgText>
              <ImgText2>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
                quidem nesciunt esse voluptates placeat id autem quod molestias
                aperiam dolores?
              </ImgText2>
            </Card>
            <Card>
              <Pic>
                <img src={pics} alt="" />
              </Pic>
              <ImgText>Best Service Afforable</ImgText>
              <ImgText2>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
                quidem nesciunt esse voluptates placeat id autem quod molestias
                aperiam dolores?
              </ImgText2>
            </Card>
            <Card>
              <Pic>
                <img src={pics} alt="" />
              </Pic>
              <ImgText>Best Service</ImgText>
              <ImgText2>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
                quidem nesciunt esse voluptates placeat id autem quod molestias
                aperiam dolores?
              </ImgText2>
            </Card>
          </CardHolder>
        </Lower>
      </Wrapper>
    </Container>
  );
};

export default Lastest;
const Pic = styled.div`
  width: 300px;
  height: 200px;
  /* background-color: yellow; */
  border-radius: 5px;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    border-radius: 8px 8px 0px 0px;
  }

  @media screen and (max-width: 500px) {
    width: 250px;
  }
`;
const ImgText2 = styled.div`
  margin-left: 20px;
  margin-bottom: 20px;
`;
const ImgText = styled.div`
  font-weight: 900;
  font-size: 20px;
  margin-top: 10px;
  margin-bottom: 10px;
  display: flex;
  margin-left: 20px;

  align-items: center;
`;
const Card = styled.div`
  width: 300px;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;
  background-color: white;
  margin: 5px 25px;
  border-radius: 8px;

  @media screen and (max-width: 500px) {
    width: 250px;
  }
`;
const CardHolder = styled.div`
  width: 100%;
  /* height: fit-content; */
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;
const Text = styled.div`
  margin: 0;
  margin-top: 20px;
  width: 200px;
  font-size: 40px;
  font-weight: bolder;
  /* background-color: red; */

  @media screen and (max-width: 500px) {
    font-size: 30px;
  }
`;
const P = styled.div`
  margin: 0;
  width: 200px;
  font-weight: 600;
  color: rgb(0, 0, 0, 0.6);

  @media screen and (max-width: 500px) {
    font-size: 14px;
    display: flex;
    justify-content: center;
    align-items: center;
    /* text-align: center; */
  }
`;
const Lower = styled.div``;
const Upper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* text-align: center; */
  margin-bottom: 20px;
`;
const Wrapper = styled.div`
  /* background-color: blue; */
  width: 85%;
`;
const Container = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;
`;
