/** @format */

import axios from "axios";

const localUrl = "http://localhost:41022/api";

export const signup = async ({ name, email, password, userName }: any) => {
  return await axios
    .post(`${localUrl}/api/signup`, {
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
    .post(`${localUrl}/api/singin`, {
      email,
      password,
    })
    .then((res) => {
      return res.data;
    });
};
