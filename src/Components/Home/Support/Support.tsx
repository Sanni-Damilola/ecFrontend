/** @format */

import React from "react";
import styled from "styled-components";

const Support = () => {
  return (
    <div>
      <Container>
        <LeftContainer>
          <Wrapper>
            <First>
              <Title>Need Help? Open a Ticket</Title>
              <Content>
                Our support team will get back to you ASAP via email.
              </Content>
            </First>
            <Second>
              <InnerWrapper>
                <div>
                  <Label>Your Name</Label>
                  <Input2 placeholder="Enter your name" />
                </div>
                <div>
                  <Label>Your Email</Label>
                  <Input2 placeholder="Enter your email" />
                </div>
              </InnerWrapper>
            </Second>
            <Third>
              <Label>Your Message</Label>
              <TextArea placeholder="Enter your Message" />
              <Button>Submit Ticket</Button>
            </Third>
          </Wrapper>
        </LeftContainer>
        <RightContainer>
          <Wrapper>
            <First>
              <Title>Subscribe to receive future updates</Title>
              <Content>
                Lorem ipsum dolor sited Sed ullam corper consectur adipiscing
                Mae ornare massa quis lectus.
              </Content>
            </First>
            <br />
            <hr />
            <br />
            <RightSecond>
              <Input placeholder="Enter your email" />
              <Input placeholder="Enter your email" />
            </RightSecond>
            <Button2>Subscribe</Button2>
            <Message>
              No spam guaranteed, So please don’t send any spam mail.
            </Message>
          </Wrapper>
        </RightContainer>
      </Container>
    </div>
  );
};

export default Support;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
  margin-bottom: 50px;
`;
const Wrapper = styled.div`
  width: 90%;
  height: 95%;
`;
const LeftContainer = styled.div`
  width: 90%;
  @media screen and (min-width: 720px) {
    width: 50%;
  }
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 20px;
  padding-bottom: 20px;
  background-color: #f4f9fc;
  border-radius: 8px;
`;
const First = styled.div``;
const TextArea = styled.textarea`
  border: none;
  outline: none;
  text-decoration: none;
  border-radius: 5px;
  height: 150px;
  width: 97%;
  padding-left: 10px;
  ::placeholder {
    color: #c2c0c0;
    font-size: 17px;
  }
`;
const Third = styled.div``;
const Button = styled.button`
  border: none;
  outline: none;
  background-color: #5c8ffd;
  color: white;
  font-size: 15px;
  font-weight: bold;
  border-radius: 5px;
  margin-top: 20px;
  width: 150px;
  height: 40px;
`;
const Label = styled.div`
  margin-top: 20px;
  font-size: 14px;
  color: grey;
  font-weight: bold;
`;

const Input = styled.input`
  border: none;
  outline: none;
  text-decoration: none;
  border-radius: 5px;
  height: 50px;
  width: 97%;
  padding-left: 10px;
  ::placeholder {
    color: #c2c0c0;
    font-size: 17px;
  }
`;

const Input2 = styled.input`
  border: none;
  outline: none;
  text-decoration: none;
  border-radius: 5px;
  height: 50px;
  width: 97%;
  padding-left: 10px;
  ::placeholder {
    color: #c2c0c0;
    font-size: 17px;
  }
`;

const InnerWrapper = styled.div`
  width: 100%;
  div {
    width: 100%;
    @media screen and (min-width: 720px) {
      width: 45%;
    }
  }
  @media screen and (min-width: 720px) {
    display: flex;
    gap: 40px;
  }
`;
const Second = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 40px;
`;
const Title = styled.div`
  font-size: 23px;
  font-weight: bolder;
  margin-bottom: 10px;
`;
const Content = styled.div`
  font-size: 15px;
  font-weight: bold;
  color: grey;
`;
const Message = styled.div`
  text-align: center;
  margin-top: 20px;
  font-size: 15px;
  font-weight: bold;
  color: grey;
`;
const RightSecond = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;
const RightContainer = styled.div`
  width: 90%;
  @media screen and (min-width: 720px) {
    width: 40%;
  }
  background-color: #f4f9fc;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 20px;
  padding-bottom: 20px;
  border-radius: 8px;
`;
const Button2 = styled.button`
  border: none;
  outline: none;
  background-color: #5c8ffd;
  color: white;
  font-size: 15px;
  font-weight: bold;
  border-radius: 5px;
  margin-top: 20px;
  width: 100%;
  height: 40px;
`;
