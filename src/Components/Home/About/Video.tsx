/** @format */

import React from "react";
import styled from "styled-components";
import shape from "../../images/shape.svg";
import video from "../../video/video.mp4";

const Video = () => {
  return (
    <Container>
      <VideoPlay src={video} loop autoPlay={true} muted />
    </Container>
  );
};

export default Video;

const Container = styled.div`
  width: 100%;
  height: 570px;
  display: flex;
  background-image: url(${shape});
  background-position: center;
  background-repeat: no-repeat;
  justify-content: center;
  align-items: center;
  padding-bottom: 50px;
`;

const VideoPlay = styled.video`
  width: 770px;
  height: 400px;
  border-radius: 5px;
  z-index: 1;
  object-fit: cover;
  @media screen and (max-width: 768px) {
    width: 550px;
    height: 300px;
  }
  @media screen and (max-width: 500px) {
    width: 250px;
    height: 140px;
    object-fit: cover;
  }
`;
