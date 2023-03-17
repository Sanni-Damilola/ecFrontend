import React from "react";
import styled from "styled-components";

const Battery = () => {
  return <Container>Battery</Container>;
};

export default Battery;

const Container = styled.div`
  margin-top: 70px;
  background-color: #f1f1fd;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media screen and (min-width: 700px) {
    width: calc(100vw - 220px);
    margin-left: 220px;
    margin-top: 0px;
  }
`;
