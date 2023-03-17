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
  const fetchAlDevice = useQuery({
    queryKey: ["allDevice"],
    queryFn: getAllDevice,
  });

  console.log("Data", fetchAlDevice);

  return <Container>all</Container>;
};

export default AllDevices;

const Container = styled.div`
  color: white;
`;
