import React from "react";
import styled from "styled-components";

const HomeDash = () => {
  return (
    <Container>
      <Left>
        Left
        <Up>Up</Up>
        <Down>
          <Title>
            <div>Data classification</div>
            <div>...</div>
          </Title>
          <Cards></Cards>
          <Rest></Rest>
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
const Title = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Cards = styled.div``;
const Rest = styled.div``;

const Container = styled.div`
  background-color: #f1f1fd;
  display: flex;
  @media screen and (min-width: 700px) {
    width: calc(100vw - 220px);
    margin-left: 220px;
    margin-top: 0px;
  }
`;
