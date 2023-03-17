import React from "react";
import styled from "styled-components";

const HomeDash = () => {
  return (
    <Container>
      <Left>
        Left
        <Up>
          
        </Up>
        <Down>Down</Down>
      </Left>
      <Right>Right</Right>
    </Container>
  );
};

export default HomeDash;
const Left = styled.div``;
const Up = styled.div``;
const Down = styled.div``;
const Right = styled.div``;

const Container = styled.div`
  background-color: #f1f1fd;
  display: flex;
  @media screen and (min-width: 700px) {
    width: calc(100vw - 220px);
    margin-left: 220px;
    margin-top: 0px;
  }
`;
