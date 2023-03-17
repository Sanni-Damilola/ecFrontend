/** @format */

import React from "react";
import styled from "styled-components";
import Box from "../../Global/Box/Box";
import img1 from "../../images/11.png";
import img2 from "../../images/1.png";
import img3 from "../../images/22.png";
import img4 from "../../images/33.png";
import img5 from "../../images/44.png";
import img6 from "../../images/ap_resize.png";
import Ready from "./Ready";
import Video from "./Video";

const MailFeatures = () => {
  return (
    <Container>
      <Wrapper>
        <Div>Main Features</Div>
        <span>
          There are many variations of passages of Lorem Ipsum <br /> available
          but the majority have suffered alteration in some form.
        </span>
        <BoxWrapper>
          <Box
            image={img1}
            text="Deliver Electrical Energy"
            paragraph="Tuae nam ex similique incidunt expedita exerci tationem laudantium. Repellendus quisquam numquam perferendis earum sapiente non tempore? Fugit repellat ut maiores."
          />
          <Box
            image={img2}
            text="Maintain battries State"
            paragraph="Tuae nam ex similique incidunt expedita exerci tationem laudantium. Repellendus quisquam numquam perferendis earum sapiente non tempore? Fugit repellat ut maiores."
          />
          <Box
            image={img3}
            text="Very Convenient"
            paragraph="Tuae nam ex similique incidunt expedita exerci tationem laudantium. Repellendus quisquam numquam perferendis earum sapiente non tempore? Fugit repellat ut maiores."
          />
          <Box
            image={img4}
            text="Environment Friendly"
            paragraph="Tuae nam ex similique incidunt expedita exerci tationem laudantium. Repellendus quisquam numquam perferendis earum sapiente non tempore? Fugit repellat ut maiores."
          />
          <Box
            image={img5}
            text="Save Time"
            paragraph="Tuae nam ex similique incidunt expedita exerci tationem laudantium. Repellendus quisquam numquam perferendis earum sapiente non tempore? Fugit repellat ut maiores."
          />
          <Box
            image={img6}
            text="Less Cost"
            paragraph="Tuae nam ex similique incidunt expedita exerci tationem laudantium. Repellendus quisquam numquam perferendis earum sapiente non tempore? Fugit repellat ut maiores."
          />
        </BoxWrapper>
      </Wrapper>
      <Ready />
      <Video />
    </Container>
  );
};

export default MailFeatures;
const BoxWrapper = styled.div`
  height: fit-content;
  padding-bottom: 40px;
  flex-wrap: wrap;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 95%;
  margin-top: 60px;
`;

const Container = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 200px;
  @media screen and (max-width: 500px) {
    margin-top: 10px;
  }
  padding-top: 100px;
  background-color: #f9faff;
  flex-wrap: wrap;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: fit-content;
  height: 100%;
  @media screen and (max-width: 768px) {
    width: 90%;
  }
  span {
    font-size: 18px;
    color: rgb(149, 156, 177);
    font-weight: 550;
    text-align: center;
    @media screen and (max-width: 500px) {
      font-size: 15px;
      width: 230px;
    }
  }
`;

const Div = styled.h1`
  color: rgb(9, 14, 52);
  font-size: 3em;
  font-weight: bolder;
  text-align: center;
  margin: 0;
  margin-bottom: 20px;
  @media screen and (max-width: 500px) {
    font-size: 20px;
  }
`;
