/** @format */

import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Button from "../../Global/Props/Button";

const About = () => {
  return (
    <Container id="/home">
      <Wrapper>
        <Div>
          E-Charging <br /> Built For Charging Gadgets
        </Div>
        <span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Cumque
          itaque error ipsum illum! Fugit, maxime, <br /> ut distinctio officiis
          natus dolorem possimus eius consectetur!
        </span>
        {/* <span>
          A Complete Tailwind CSS Web Template Crafted for - <br /> Startup,
          SaaS, Business, Software and Agencies. Comes <br /> with high-quality
          design and everything you need!
        </span> */}
        <ButtonWrapper>
          <Link style={{ textDecoration: "none" }} to={"/signup"}>
            <Button padding="18px 30px" title="Get Started" />
          </Link>

          <LearnMore>learn more</LearnMore>
        </ButtonWrapper>
      </Wrapper>
      <Image
        width="364"
        height="201"
        viewBox="0 0 364 201"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M5.88928 72.3303C33.6599 66.4798 101.397 64.9086 150.178 105.427C211.155 156.076 229.59 162.093 264.333 166.607C299.076 171.12 337.718 183.657 362.889 212.24"
          stroke="url(#paint0_linear_25:218)"
        ></path>
        <path
          d="M-22.1107 72.3303C5.65989 66.4798 73.3965 64.9086 122.178 105.427C183.155 156.076 201.59 162.093 236.333 166.607C271.076 171.12 309.718 183.657 334.889 212.24"
          stroke="url(#paint1_linear_25:218)"
        ></path>
        <path
          d="M-53.1107 72.3303C-25.3401 66.4798 42.3965 64.9086 91.1783 105.427C152.155 156.076 170.59 162.093 205.333 166.607C240.076 171.12 278.718 183.657 303.889 212.24"
          stroke="url(#paint2_linear_25:218)"
        ></path>
        <path
          d="M-98.1618 65.0889C-68.1416 60.0601 4.73364 60.4882 56.0734 102.431C120.248 154.86 139.905 161.419 177.137 166.956C214.37 172.493 255.575 186.165 281.856 215.481"
          stroke="url(#paint3_linear_25:218)"
        ></path>
        <circle
          opacity="0.8"
          cx="214.505"
          cy="60.5054"
          r="49.7205"
          transform="rotate(-13.421 214.505 60.5054)"
          stroke="url(#paint4_linear_25:218)"
        ></circle>
        <circle
          cx="220"
          cy="63"
          r="43"
          fill="url(#paint5_radial_25:218)"
        ></circle>
        <defs>
          <linearGradient
            id="paint0_linear_25:218"
            x1="184.389"
            y1="69.2405"
            x2="184.389"
            y2="212.24"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#4A6CF7" stop-opacity="0"></stop>
            <stop offset="1" stop-color="#4A6CF7"></stop>
          </linearGradient>
          <linearGradient
            id="paint1_linear_25:218"
            x1="156.389"
            y1="69.2405"
            x2="156.389"
            y2="212.24"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#4A6CF7" stop-opacity="0"></stop>
            <stop offset="1" stop-color="#4A6CF7"></stop>
          </linearGradient>
          <linearGradient
            id="paint2_linear_25:218"
            x1="125.389"
            y1="69.2405"
            x2="125.389"
            y2="212.24"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#4A6CF7" stop-opacity="0"></stop>
            <stop offset="1" stop-color="#4A6CF7"></stop>
          </linearGradient>
          <linearGradient
            id="paint3_linear_25:218"
            x1="93.8507"
            y1="67.2674"
            x2="89.9278"
            y2="210.214"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#4A6CF7" stop-opacity="0"></stop>
            <stop offset="1" stop-color="#4A6CF7"></stop>
          </linearGradient>
          <linearGradient
            id="paint4_linear_25:218"
            x1="214.505"
            y1="10.2849"
            x2="212.684"
            y2="99.5816"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#4A6CF7"></stop>
            <stop offset="1" stop-color="#4A6CF7" stop-opacity="0"></stop>
          </linearGradient>
          <radialGradient
            id="paint5_radial_25:218"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(220 63) rotate(90) scale(43)"
          >
            <stop offset="0.145833" stop-color="white" stop-opacity="0"></stop>
            <stop offset="1" stop-color="white" stop-opacity="0.08"></stop>
          </radialGradient>
        </defs>
      </Image>
      <Circle
        width="450"
        height="556"
        viewBox="0 0 450 556"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="277"
          cy="63"
          r="225"
          fill="url(#paint0_linear_25:217)"
        ></circle>
        <circle
          cx="17.9997"
          cy="182"
          r="18"
          fill="url(#paint1_radial_25:217)"
        ></circle>
        <circle
          cx="76.9997"
          cy="288"
          r="34"
          fill="url(#paint2_radial_25:217)"
        ></circle>
        <circle
          cx="325.486"
          cy="302.87"
          r="180"
          transform="rotate(-37.6852 325.486 302.87)"
          fill="url(#paint3_linear_25:217)"
        ></circle>
        <circle
          opacity="0.8"
          cx="184.521"
          cy="315.521"
          r="132.862"
          transform="rotate(114.874 184.521 315.521)"
          stroke="url(#paint4_linear_25:217)"
        ></circle>
        <circle
          opacity="0.8"
          cx="356"
          cy="290"
          r="179.5"
          transform="rotate(-30 356 290)"
          stroke="url(#paint5_linear_25:217)"
        ></circle>
        <circle
          opacity="0.8"
          cx="191.659"
          cy="302.659"
          r="133.362"
          transform="rotate(133.319 191.659 302.659)"
          fill="url(#paint6_linear_25:217)"
        ></circle>
        <defs>
          <linearGradient
            id="paint0_linear_25:217"
            x1="-54.5003"
            y1="-178"
            x2="222"
            y2="288"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#4A6CF7"></stop>
            <stop offset="1" stop-color="#4A6CF7" stop-opacity="0"></stop>
          </linearGradient>
          <radialGradient
            id="paint1_radial_25:217"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(17.9997 182) rotate(90) scale(18)"
          >
            <stop
              offset="0.145833"
              stop-color="#4A6CF7"
              stop-opacity="0"
            ></stop>
            <stop offset="1" stop-color="#4A6CF7" stop-opacity="0.08"></stop>
          </radialGradient>
          <radialGradient
            id="paint2_radial_25:217"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(76.9997 288) rotate(90) scale(34)"
          >
            <stop
              offset="0.145833"
              stop-color="#4A6CF7"
              stop-opacity="0"
            ></stop>
            <stop offset="1" stop-color="#4A6CF7" stop-opacity="0.08"></stop>
          </radialGradient>
          <linearGradient
            id="paint3_linear_25:217"
            x1="226.775"
            y1="-66.1548"
            x2="292.157"
            y2="351.421"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#4A6CF7"></stop>
            <stop offset="1" stop-color="#4A6CF7" stop-opacity="0"></stop>
          </linearGradient>
          <linearGradient
            id="paint4_linear_25:217"
            x1="184.521"
            y1="182.159"
            x2="184.521"
            y2="448.882"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#4A6CF7"></stop>
            <stop offset="1" stop-color="white" stop-opacity="0"></stop>
          </linearGradient>
          <linearGradient
            id="paint5_linear_25:217"
            x1="356"
            y1="110"
            x2="356"
            y2="470"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#4A6CF7"></stop>
            <stop offset="1" stop-color="white" stop-opacity="0"></stop>
          </linearGradient>
          <linearGradient
            id="paint6_linear_25:217"
            x1="118.524"
            y1="29.2497"
            x2="166.965"
            y2="338.63"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#4A6CF7"></stop>
            <stop offset="1" stop-color="#4A6CF7" stop-opacity="0"></stop>
          </linearGradient>
        </defs>
      </Circle>
      {/* done */}
    </Container>
  );
};

export default About;

const Image = styled.svg`
  position: absolute;
  left: 0;
  bottom: -45%;

  @media screen and (max-width: 500px) {
    width: 350px;
  }
`;
const Circle = styled.svg`
  position: absolute;
  top: -36%;
  right: -0%;
  z-index: 2;
`;

const LearnMore = styled.button`
  padding: 18px 30px;
  margin-left: 20px;
  border-radius: 5px;
  border: 0;
  outline: none;
  font-weight: 500;
  font-size: 17px;
  text-transform: capitalize;
  background-color: #dddfea;
  cursor: pointer;
  transition: all 360ms;
  @media screen and (max-width: 500px) {
    font-size: 16px;
    padding: 18px 20px;
  }
  :hover {
    background-color: #dddfeadd;
  }
`;

const Container = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
  position: relative;
`;
const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: fit-content;
  margin-top: 40px;
  z-index: 3;
  @media screen and (max-width: 500px) {
    width: 300px;
  }
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: fit-content;
  height: 100%;

  span {
    font-size: 18px;
    color: rgb(149, 156, 177);
    font-weight: 550;
    text-align: center;
    @media screen and (max-width: 500px) {
      font-size: 13px;
      width: 230px;
    }
    @media screen and (max-width: 768px) {
      font-size: 16px;
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
  @media screen and (max-width: 768px) {
    font-size: 2em;
  }

  @media screen and (max-width: 500px) {
    font-size: 20px;
  }
`;
