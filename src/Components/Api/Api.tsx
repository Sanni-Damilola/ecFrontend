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
  email,
  ticketNumber,
  ticketPosition,
  deviceDetails,
  deviceType,
}: any) => {
  return await axios
    .post(`${localUrl}/postdevice`, {
      email,
      ticketNumber,
      ticketPosition,
      deviceDetails,
      deviceType,
    })
    .then((res) => {
      return res.data;
    });
};

export const GetOneUser = async (id: any) => {
  return await axios
    .get(`${localUrl}/getOneUser/${id}`)
    .then((res) => res.data);
};

export const getAllDevice = async () => {
  return await axios.get(`${localUrl}/getallDevice`).then((res) => res.data);
};


