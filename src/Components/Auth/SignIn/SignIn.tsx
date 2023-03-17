/** @format */

import React from "react";
import styled from "styled-components";
import { FcGoogle } from "react-icons/fc";
import { RxBox } from "react-icons/rx";
import { Link } from "react-router-dom";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { NavLink, useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { IuserData } from "../../interface/UserInterface";
import { User } from "../../Global/ReduxState/State";
import { UseAppDispach } from "../../Global/ReduxState/Store";
import { signin } from "../../Api/Api";

const SignIn = () => {
  const dispatch = UseAppDispach();
  const schema = yup
    .object({
      email: yup.string().required(),
      password: yup.string().min(9).required(),
    })
    .required();

  type formData = yup.InferType<typeof schema>;

  const {
    handleSubmit,
    formState: { errors },
    reset,
    register,
  } = useForm<formData>({
    resolver: yupResolver(schema),
  });

  const posting = useMutation({
    mutationKey: ["euser"],
    mutationFn: signin,

    onSuccess: (myData) => {
      dispatch(User(myData.data));
      console.log("here", myData.data);
    },
  });

  const navgate = useNavigate();

  const Submit = handleSubmit(async (data) => {
    posting.mutate(data);
    reset();
    navgate("/dahboard");
  });

  return (
    <div>
      <Container>
        <Card onSubmit={Submit}>
          <Text1>Sign in to your account</Text1>
          {/* <Text2>Login to your account for a faster checkout</Text2> */}
          {/* <InputG>
            <Logo1>
              <FcGoogle />
            </Logo1>
            <Text3>Sign in with Google</Text3>
          </InputG> */}

          {/* Div holds */}
          <DivHold>
            <Div1></Div1>
            <Div2>Or, sign in with your email</Div2>
            <Div1></Div1>
          </DivHold>

          <InputHold>
            <Input>
              <p>Your Email</p>
              <input
                {...register("email")}
                type="text"
                placeholder="Enter your Email"
              />
            </Input>
            <Input>
              <p>Your Password</p>
              <input
                {...register("password")}
                type="password"
                placeholder="Enter your Password"
              />
            </Input>
          </InputHold>

          <Signed>
            <Sign1>
              <Icons>
                <RxBox />
              </Icons>
              <Keep>Keep me Signed in</Keep>
            </Sign1>
            <Sign2>Forget Password?</Sign2>
          </Signed>

          <Btn type="submit" onClick={Submit}>
            Sign in
          </Btn>
          <LastText>
            <P>Don't you have an account? </P>
            <Link style={{ textDecoration: "none" }} to={"/signup"}>
              <Span>Sign Up</Span>
            </Link>
          </LastText>
        </Card>
      </Container>
    </div>
  );
};

export default SignIn;

const LastText = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 500px) {
    font-size: 12px;
  }
`;

const Span = styled.div`
  margin-left: 7px;
  color: #4a6cf7;
  /* margin: 0; */
  margin-top: 18px;
`;

const P = styled.div`
  margin: 0;
  margin-top: 20px;
`;

const Btn = styled.button`
  background-color: #4a6cf7;
  /* padding: 10px 170px; */
  width: 400px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  font-weight: 600;
  text-transform: capitalize;
  border: 0;
  outline: none;
  transition: all 360ms;
  color: white;
  cursor: pointer;
  border-radius: 5px;

  :hover {
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  }

  @media screen and (max-width: 500px) {
    padding: none;
    width: 290px;
  }
`;
const Keep = styled.div`
  color: #999ba1;
`;
const Icons = styled.div`
  color: lightgrey;
  margin-right: 10px;
  margin-top: 3px;
`;
const Sign2 = styled.div`
  color: #758ff9;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Sign1 = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Signed = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  font-size: 16px;
  margin-bottom: 20px;

  @media screen and (max-width: 500px) {
    font-size: 12px;
  }
`;
const DivHold = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Div1 = styled.div`
  height: 1px;
  width: 80px;
  background-color: black;

  @media screen and (max-width: 500px) {
    /* width: 60px; */
  }
`;
const Div2 = styled.div`
  color: #999ba1;

  font-weight: 600;

  @media screen and (max-width: 500px) {
    font-weight: 400;
    font-size: 14px;
    margin-left: 20px;
  }
`;
const InputHold = styled.div`
  p {
    margin: 0;
  }

  input {
    width: 95%;
    height: 40px;
    background-color: #fff;
    border: none;
    padding-left: 20px;
    /* margin-left: 10px; */
    border-radius: 5px;
    font-size: 16px;
    margin-top: 5px;
    outline: none;
    box-shadow: rgba(0, 0, 0, 0.06) 0px 2px 4px 0px inset;
    font-weight: 500;

    ::placeholder {
      color: #ced1da;
      font-size: 16px;
    }

    @media screen and (max-width: 500px) {
      width: 90%;
    }
  }

  p {
    font-size: 14px;
  }
`;

const Input = styled.div`
  margin-top: 20px;
`;
const Logo1 = styled.div`
  margin-top: 4px;
  font-size: 22px;
`;
const InputG = styled.div`
  width: 100%;
  height: 30px;
  background-color: #fff;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
`;

const Text3 = styled.div`
  font-size: 16px;
  color: #9ea4b8;
  font-weight: bold;
  margin-left: 10px;
`;
const Text2 = styled.div`
  font-size: 16px;
  font-weight: 800;
  color: #9ea4b8;
  margin-bottom: 30px;
`;
const Text1 = styled.div`
  font-size: 35px;
  font-weight: bold;

  @media screen and (max-width: 500px) {
    line-height: 35px;
    margin-bottom: 10px;
  }
`;
const Card = styled.form`
  width: 400px;
  height: fit-content;
  border-radius: 10px;

  padding: 30px;
  background-color: #f6f7ff;
  box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
    rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
  /* background-color: red; */

  @media screen and (max-width: 500px) {
    width: 300px;
    padding: 30px;
  }
`;
const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  /* margin-top: 30px; */

  @media screen and (max-width: 500px) {
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
