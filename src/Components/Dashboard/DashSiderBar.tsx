import React, { useState } from "react";
import styled from "styled-components";
import { GiEmptyHourglass } from "react-icons/gi";
import { useNavigate } from "react-router-dom";
import { MdAddCircle } from "react-icons/md";
import { TiThSmall } from "react-icons/ti";
import { TbBrandSocketIo } from "react-icons/tb";
import { GrShareOption } from "react-icons/gr";
import { MdPending } from "react-icons/md";
import { BsCheck2Circle } from "react-icons/bs";
import { FaCheckCircle } from "react-icons/fa";

const DashSiderBar = () => {
  const [add, setAdd] = useState<boolean>(false);
  const [all, setAll] = useState<boolean>(false);
  const [ps, setPs] = useState<boolean>(false);
  const [bs, setBs] = useState<boolean>(false);
  const [personal, setPersonal] = useState<boolean>(false);
  const [collected, setCollected] = useState<boolean>(false);
  const [pending, setPending] = useState<boolean>(false);
  const navigate = useNavigate();

  const toAll = () => {
    setAll(true);
    // navigate("/dashboard/next");
  };
  const toAdd = () => {
    setAdd(true);
  };
  const toPs = () => {
    setPs(true);
  };
  const toBs = () => {
    setBs(true);
  };
  const toPersonal = () => {
    setPersonal(true);
  };

  const toCollected = () => {
    setCollected(true);
  };
  const toPending = () => {
    setPending(true);
  };

  return (
    <Container>
      <Wrapper>
        <Company>
          Company
        </Company>
        <Profile>
          <Logo>@</Logo>
          <Name>Miss Someone</Name>
          <Name2>Miss Someone</Name2>
        </Profile>
        <Spaces>
          <Main>
            <div>Dashboard</div>
          </Main>
          <Branches
            cl={add ? "black" : "gray"}
            bd={add ? "3px solid black" : ""}
            onClick={toAdd}>
            <div>New Device</div>
          </Branches>
          <Branches2
            cl={all ? "black" : "gray"}
            bd={all ? "3px solid black" : ""}
            onClick={toAll}>
            <div>All</div>
          </Branches2>
          <Branches3
            cl={ps ? "black" : "gray"}
            bd={ps ? "3px solid black" : ""}
            onClick={toPs}>
            <div>P-Spaces</div>
          </Branches3>
          <Branches4
            cl={bs ? "black" : "gray"}
            bd={bs ? "3px solid black" : ""}
            onClick={toBs}>
            <div>B-Spacese</div>
          </Branches4>
          <Branches5
            cl={personal ? "black" : "gray"}
            bd={personal ? "3px solid black" : ""}
            onClick={toPersonal}>
            <div>
              <TbBrandSocketIo />
            </div>
            <div>Personal</div>
          </Branches5>
        </Spaces>
        <Logout>LOG OUT</Logout>
      </Wrapper>
    </Container>
  );
};

export default DashSiderBar;

const Container = styled.div`
  height: 100vh;
  width: 250px;
  position: fixed;
  display: flex;
  align-items: center;
`;
const Logo = styled.div`
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  border: 1px solid silver;
  border-radius: 50%;
`;
const Wrapper = styled.div`
  height: 90%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const Profile = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const Name = styled.div``;
const Spaces = styled.div``;
const Main = styled.div`
  padding-left: 10px;
  font-weight: bold;
  color: #acaaaa;
  display: flex;
  align-items: center;
  padding-left: 30px;
  div {
    margin-right: 7px;
  }
`;
const Branches = styled.div<{ cl: string; bd: string }>`
  padding-left: 40px;
  margin-top: 20px;
  margin-bottom: 20px;
  font-size: 13px;
  font-weight: 600;
  display: flex;
  align-items: center;
  border-left: ${(props) => props.bd};
  color: ${(props) => props.cl};

  div {
    margin-right: 9px;
    color: gray;
  }
`;
const Branches2 = styled.div<{ cl: string; bd: string }>`
  padding-left: 40px;
  margin-top: 20px;
  margin-bottom: 20px;
  font-size: 13px;
  font-weight: 600;
  display: flex;
  align-items: center;
  border-left: ${(props) => props.bd};
  color: ${(props) => props.cl};
  div {
    margin-right: 9px;
  }
`;
const Branches7 = styled.div<{ cl: string; bd: string }>`
  padding-left: 40px;
  margin-top: 20px;
  margin-bottom: 20px;
  font-size: 13px;
  font-weight: 600;
  display: flex;
  align-items: center;
  color: ${(props) => props.cl};
  border-left: ${(props) => props.bd};
  div {
    margin-right: 9px;
    color: gray;
  }
`;
const Branches6 = styled.div<{ cl: string; bd: string }>`
  padding-left: 40px;
  margin-top: 20px;
  margin-bottom: 20px;
  font-size: 13px;
  font-weight: 600;
  display: flex;
  align-items: center;
  color: ${(props) => props.cl};
  border-left: ${(props) => props.bd};
  div {
    margin-right: 9px;
    color: gray;
  }
`;
const Branches5 = styled.div<{ cl: string; bd: string }>`
  padding-left: 40px;
  margin-top: 20px;
  margin-bottom: 20px;
  font-size: 13px;
  font-weight: 600;
  display: flex;
  align-items: center;
  color: ${(props) => props.cl};
  border-left: ${(props) => props.bd};
  div {
    margin-right: 9px;
    color: gray;
  }
`;
const Branches4 = styled.div<{ cl: string; bd: string }>`
  padding-left: 40px;
  margin-top: 20px;
  margin-bottom: 20px;
  font-size: 13px;
  font-weight: 600;
  display: flex;
  align-items: center;
  color: ${(props) => props.cl};
  border-left: ${(props) => props.bd};
  div {
    margin-right: 9px;
    color: gray;
  }
`;
const Branches3 = styled.div<{ cl: string; bd: string }>`
  padding-left: 40px;
  margin-top: 20px;
  margin-bottom: 20px;
  font-size: 13px;
  font-weight: 600;
  display: flex;
  align-items: center;
  color: ${(props) => props.cl};
  border-left: ${(props) => props.bd};
  div {
    margin-right: 9px;
    color: gray;
  }
`;
const Company = styled.div``;
const Name2 = styled.div``;
const Logout = styled.div`
  padding-left: 40px;
`;
