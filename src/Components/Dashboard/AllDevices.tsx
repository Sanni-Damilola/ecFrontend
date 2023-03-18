/** @format */

import React from "react";
import styled from "styled-components";
import { useAppSelector } from "../Global/ReduxState/Store";
import { useQuery } from "@tanstack/react-query";
import { getAllDevice } from "../Api/Api";
import { GiElectric } from "react-icons/gi";
import { BsArrowUpRight } from "react-icons/bs";
import Card2x from "./Props/Card2x";
import { HiLockClosed } from "react-icons/hi";
import { MdLaptopMac } from "react-icons/md";
import { IoIosPeople } from "react-icons/io";
import pic from "../images/sso.jpg";
import { RiDeleteBin6Line } from "react-icons/ri";

const AllDevices = () => {
  const fetchAllDevice = useQuery({
    queryKey: ["allDevice"],
    queryFn: getAllDevice,
  });

  console.log("Data", fetchAllDevice);

  const [changeToCollected, setChangeToCollected] = React.useState(false);
  const click = () => {
    setChangeToCollected(!changeToCollected);
  };

  return (
    <Container>
      {fetchAllDevice.data.data.map((e: any) => (
        <TableWrapper key={e._id}>
          <Wrap>
            <Hold>
              <TicketNumber>{e.ticketNumber}</TicketNumber>| |
              <TicketPosition>{e.ticketPosition}</TicketPosition>
            </Hold>
            <DateAndTime>{e.date}</DateAndTime>
            <CollectedOrNotCollected
              onClick={click}
              color={changeToCollected ? "value" : ""}>
              {changeToCollected ? "collected" : " Notcollected"}
            </CollectedOrNotCollected>
          </Wrap>
          <Delete>delete</Delete>
        </TableWrapper>
      ))}
    </Container>
  );
};

export default AllDevices;

const Hold = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 7px;
`;

const Delete = styled.button`
  padding: 10px 20px;
  background-color: red;
  color: white;
  border: 0;
  outline: none;
  text-transform: capitalize;
  margin-top: 10px;
  cursor: pointer;
  width: 100%;
  border-radius: 0px 0px 4px 4px;
`;

const Wrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const DateAndTime = styled.div`
  color: rgb(108, 114, 147);
  font-size: 10px;
  display: flex;
  margin-bottom: 7px;
  justify-content: center;
  align-items: center;
  font-weight: 500;
`;
const TicketNumber = styled.div`
  color: rgb(108, 114, 147);
  font-size: 17px;
  font-weight: 600;
  margin-right: 20px;
  text-transform: uppercase;
`;
const TicketPosition = styled.div`
  color: rgb(108, 114, 147);
  font-size: 17px;
  font-weight: 600;
  margin-left: 20px;
  text-transform: uppercase;
`;
const CollectedOrNotCollected = styled.div<{ color: string }>`
  font-size: 14px;
  border: 2px solid ${({ color }) => (color ? "#03d259" : "#fc4240")};
  padding: 7px 15px;
  border-radius: 7px;
  margin: 10px;
  color: ${({ color }) => (color ? "#03d259" : "#fc4240")};
  cursor: pointer;
`;

const TableWrapper = styled.div`
  background-color: rgb(25, 28, 36);
  border-radius: 4px;
  width: 150px;
  padding-top: 15px;
  flex-direction: column;
  display: flex;
  align-items: center;
  height: 150px;
  margin: 30px;
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  padding-top: 150px;
  justify-content: center;
  align-items: center;
  color: white;
  flex-wrap: wrap;
  padding-bottom: 10px;
`;

const Wrapper = styled.div`
  width: 100%;
  padding-top: 40px;
  display: flex;
  height: 600px;
  background-color: green;
  overflow-y: scroll;
  padding-bottom: 100px;
  justify-content: center;
`;
