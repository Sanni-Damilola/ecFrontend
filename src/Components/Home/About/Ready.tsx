import React from "react";
import styled from "styled-components";

const Ready = () => {
  return (
    <div>
      <Container>
        <Wrapper>
          <Div>We are ready to help</Div>
          <span>
            There are many variations of passages of Lorem Ipsum available{" "}
            <br /> but the majority have suffered alteration in some form.
          </span>
        </Wrapper>
      </Container>
    </div>
  );
};

export default Ready;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Div = styled.h1`
  color: rgb(9, 14, 52);
  font-size: 3em;
  font-weight: bolder;
  text-align: center;
  margin: 0;
  margin-bottom: 20px;
  @media screen and (max-width: 768px) {
    font-size: 1.8em;
  }

  @media screen and (max-width: 500px) {
    font-size: 20px;
  }
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: fit-content;
  height: fit-content;
  margin-top: 100px;
  padding-bottom: 100px;
  @media screen and (max-width: 500px) {
    padding-bottom: 0px;
  }
  span {
    font-size: 18px;
    color: rgb(149, 156, 177);
    font-weight: 550;
    text-align: center;
    @media screen and (max-width: 500px) {
      font-size: 15px;
      width: 300px;
    }
    @media screen and (max-width: 768px) {
      font-size: 15px;
    }
  }
`;
