/** @format */

import React from "react";
import styled from "styled-components";

interface props {
  text: string;
  paragraph: string;
  image: string;
}

const Box: React.FC<props> = ({ text, paragraph, image }) => {
  return (
    <Container>
      <Image src={image} />
      <h6>{text}</h6>
      <span>{paragraph}</span>
    </Container>
  );
};

export default Box;

const Container = styled.div`
  width: 350px;
  height: fit-content;
  padding-bottom: 10px;
  margin: 10px;

  @media screen and (max-width: 768px) {
    font-size: 15px;
    width: fit-content;
  }

  h6 {
    color: rgb(9, 14, 52);
    font-size: 1.5em;
    font-weight: 900;
    margin: 0;
    margin-bottom: 20px;
  }

  span {
    font-size: 15px;
    font-weight: 600;
    color: rgb(149, 158, 177);
  }
`;
const Image = styled.img`
  object-fit: cover;
  width: 40px;
  height: 40px;
  margin-bottom: 10px;
`;
