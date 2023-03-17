import React from "react";
import styled from "styled-components";
import shape from "../../images/shape.svg";
import video1 from "../../images/undraw3.svg";
import video from "../../images/undraw4.svg";

const Video = () => {
  return (
    <Container>
      <Wrapper>
        <Pic>
          <img src={video1} alt="" />
        </Pic>
        <Pic2>
          <img src={video} alt="" />
        </Pic2>
      </Wrapper>
    </Container>
  );
};

export default Video;

const Pic = styled.div`
  /* background-color: blue; */
`;
const Pic2 = styled.div`
  /* background-color: green; */
  margin-left: 5px;
`;

const Wrapper = styled.div`
  width: 100%;
  /* background-color: yellow; */
  height: fit-content;
  display: flex;

  img {
    width: 100%;
    height: 100%;
  }

  @media screen and (max-width: 768px) {
    /* flex-wrap: wrap; */
    width: 100%;
  }
  @media screen and (max-width: 500px) {
    flex-wrap: wrap;
  }
`;
const Container = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  background-image: url(${shape});
  background-position: center;
  background-repeat: no-repeat;
  justify-content: center;
  align-items: center;
  /* padding-bottom: 50px; */
  /* background-color: red; */
`;
