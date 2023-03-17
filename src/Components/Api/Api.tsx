/** @format */

import axios from "axios";

const localUrl = "http://localhost:41022/api";

export const signup = async ({ name, email, password, userName }: any) => {
  return await axios
    .post(`${localUrl}/signup`, {
      name,
      email,
      password,
      userName,
    })
    .then((res) => {
      return res.data;
    });
};

export const signin = async ({ email, password }: any) => {
  return await axios
    .post(`${localUrl}/signin`, {
      email,
      password,
    })
    .then((res) => {
      return res.data;
    });
};
export const postDevice = async ({
  ticketNumber,
  ticketPosition,
  deviceDetails,
  deviceType,
  numberOfDeviceBrought,
}: any) => {
  return await axios
    .post(`${localUrl}/postdevice`, {
      ticketNumber,
      ticketPosition,
      deviceDetails,
      deviceType,
      numberOfDeviceBrought,
    })
    .then((res) => {
      return res.data;
    });
};

export const GetOneUser = async (id: any) => {
  return await axios.get(`${localUrl}/getOneUser/${id}`).then((res) => res.data);
};
