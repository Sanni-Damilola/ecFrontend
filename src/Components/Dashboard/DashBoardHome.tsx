import React from "react";
import styled from "styled-components";

const DashBoardHome = () => {
  const arr = [
    {
      num: "TC09",
      spa: "P001",
      dev: [
        { pho: "tecno", tm: "1.00pm" },
        { pho: "itel", tm: "3.00pm" },
        { pho: "itel", tm: "3.00pm" },
        { pho: "itel", tm: "3.00pm" },
      ],
    },
    {
      num: "TC09",
      spa: "P002",
      dev: [
        { pho: "tecno", tm: "1.00pm" },
        { pho: "itel", tm: "3.00pm" },
      ],
    },
    {
      num: "TC09",
      spa: "P002",
      dev: [
        { pho: "tecno", tm: "1.00pm" },
        { pho: "itel", tm: "3.00pm" },
      ],
    },
    {
      num: "TC09",
      spa: "P001",
      dev: [
        { pho: "tecno", tm: "1.00pm" },
        { pho: "itel", tm: "3.00pm" },
        { pho: "itel", tm: "3.00pm" },
      ],
    },
  ];
  return (
    <Container>
      <h1>All-Spaces</h1>
      <Content>
        <Head>
          <div>Ticket</div>
          <div>Space</div>
          <div>Device</div>
        </Head>
        {arr.map((el) => (
          <Details>
            <KeyHolder>
              <Number></Number>
              <br />
              <Variables>{el.num}</Variables>
            </KeyHolder>
            <Values>
              <Occupee>
                <Space></Space>
                <br />
                <Variables2>{el.spa}</Variables2>
              </Occupee>
              <P>
                <Device></Device>
                <br />
                <Variables>
                  <div>
                    {el.dev.map((al) => (
                      <DeviceDetails>
                        <div style={{ display: "flex", alignItems: "center" }}>
                          <input type="radio" />
                          {al.pho}
                        </div>
                        <div>2.00am - {al.tm}</div>
                      </DeviceDetails>
                    ))}
                  </div>
                </Variables>
              </P>
            </Values>
          </Details>
        ))}
      </Content>
    </Container>
  );
};

export default DashBoardHome;

const Content = styled.div`
  padding: 10px;
  background-color: #ffffff;
  font-size: 15px;
  border-radius: 10px;
  width: 80%;
  @media screen and (min-width: 700px) {
    width: 85%;
  }
  margin-top: 100px;
  margin-bottom: 50px;
  box-shadow: rgba(175, 175, 175, 0.24) 0px 3px 8px;
`;
const Details = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding-bottom: 30px;
  border-bottom: 1px solid #dddcdc;
`;
const KeyHolder = styled.div``;
const DeviceDetails = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
`;
const Head = styled.div`
  display: flex;
  align-items: center;
  div {
    margin-right: 40px;
    @media screen and (min-width: 700px) {
      margin-right: 67px;
    }
    font-weight: 600;
    color: #b3b3b3;
  }
`;
const Values = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex: 1;
`;
const Occupee = styled.div``;
const P = styled.div`
  width: 50%;
`;
const Times = styled.div`
  margin-left: 30px;
`;
const Variables = styled.div`
  font-size: 12px;
  font-weight: 600;
`;
const Variables2 = styled.div`
  font-size: 12px;
  font-weight: 600;
  background-color: #003cff44;
  color: #0038f0;
  padding: 3px;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Number = styled.div`
  font-weight: 600;
  color: #bebebe;
`;

const Space = styled.div`
  font-weight: 600;
  color: #bebebe;
`;
const Device = styled.div`
  font-weight: 600;
  color: #bebebe;
`;

const Container = styled.div`
  margin-top: 70px;
  background-color: #f1f1fd;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media screen and (min-width: 700px) {
    width: calc(100vw - 280px);
    margin-left: 250px;
    margin-top: 0px;
  }
`;
