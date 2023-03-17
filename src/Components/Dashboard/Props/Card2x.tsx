import React from "react";
import styled from "styled-components";

interface iProps {
  iconx: any;
  text: string;
  color: string;
  wide: string;
  high: string;
}

const Card2x: React.FC<iProps> = ({ iconx, text, color, wide, high }) => {
  return (
    <Container wd={wide} hh={high}>
      <Icon cl={color}>{iconx}</Icon>
      <Text>{text}</Text>
    </Container>
  );
};

export default Card2x;

const Container = styled.div<{ wd: string; hh: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 10px;
  padding-top: 10px;
  padding-bottom: 10px;
  border: 1px solid #d8d7d7;
  border-radius: 10px;
  width: ${(props) => props.wd};
  height: ${(props) => props.hh};
`;
const Icon = styled.div<{ cl: string }>`
  color: ${(props) => props.cl};
  font-size: 25px;
  height: 20px;
`;
const Text = styled.div`
  font-size: 13px;
`;
