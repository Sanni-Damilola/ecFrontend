/** @format */

import React from "react";
import styled from "styled-components";
import pic from "../../images/logo.png";
import { FcGoogle } from "react-icons/fc";
import { RxBox } from "react-icons/rx";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { yupResolver } from "@hookform/resolvers/yup";
import { signup } from "../../Api/Api";
import { IuserData } from "../../interface/UserInterface";
import { User } from "../../Global/ReduxState/State";
import { UseAppDispach } from "../../Global/ReduxState/Store";
import { Link } from "react-router-dom";

const SignUp = () => {
  const dispatch = UseAppDispach();
  const schema = yup
    .object({
      name: yup.string().required(),
      userName: yup.string().required(),
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
    mutationFn: signup,

    onSuccess: (myData) => {
      dispatch(User(myData.data));
      console.log(myData.data);
    },
  });

  const Submit = handleSubmit(async (data) => {
    posting.mutate(data);
    reset();
  });

  return (
    <div>
      <Container>
        <Card onSubmit={Submit}>
          <Text1>Create your account</Text1>
          <Text2>its totally free and super easy</Text2>

          <InputG>
            <Logo1>
              <FcGoogle />
            </Logo1>
            <Text3>Sign up with</Text3>
          </InputG>

          {/* Div holds */}
          <DivHold>
            <Div1></Div1>
            <Div2>Or, register with your email</Div2>
            <Div1></Div1>
          </DivHold>

          <InputHold>
            <Input>
              <p> Name</p>
              <input
                required
                {...register("name")}
                type="name"
                placeholder="Enter your full name"
              />
            </Input>
            <Input>
              <p>User Name</p>
              <input
                {...register("userName")}
                type="name"
                placeholder="User name"
              />
            </Input>
            <Input>
              <p>Work Email</p>
              <input
                required
                {...register("email")}
                type="email"
                placeholder="Enter your Email"
              />
            </Input>
            <Input>
              <p>Your Password</p>
              <input
                required
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
            Sign up
          </Btn>
          <LastText>
            <P>Already using Startup? </P>
            <Link style={{ textDecoration: "none" }} to={"/signin"}>
              <Span>Sign in</Span>
            </Link>
          </LastText>
        </Card>
      </Container>
    </div>
  );
};

export default SignUp;
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
  cursor: pointer;
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
  height: 60px;
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
    height: 50px;
    background-color: #fff;
    border: none;
    padding-left: 20px;
    /* margin-left: 10px; */
    border-radius: 5px;
    font-size: 16px;
    margin-top: 5px;
    outline: none;
    box-shadow: rgba(0, 0, 0, 0.06) 0px 2px 4px 0px inset;

    ::placeholder {
      color: #ced1da;
      font-size: 16px;
      font-weight: 545;
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
  height: 50px;
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
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
  /* padding-bottom: 20px; */
  /* border: 1px solid red; */

  padding: 30px;
  padding-top: 100px;
  background-color: #dde7eb;
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
  background-image: url(${pic});
  background-position: center;
  background-repeat: no-repeat;
  margin-top: 30px;

  @media screen and (max-width: 500px) {
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
