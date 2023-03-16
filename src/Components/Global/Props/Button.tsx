import React from 'react'
import styled from 'styled-components'

interface props {
    title: string;
    padding: string
}

const Button: React.FC<props> = ({ title, padding }) => {
  return <ButtonProps padding={padding}>{title}</ButtonProps>;
};

export default Button;

const ButtonProps = styled.button<{ padding: string }>`
  background-color: #4a6cf7;
  padding: ${(props) => props.padding};
  font-size: 16px;
  font-weight: 600;
  text-transform: capitalize;
  border: 0;
  outline: none;
  transition: all 360ms;
  color: white;
  cursor: pointer;
  border-radius: 5px;

  :hover {
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  }
`;
