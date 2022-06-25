import React, { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

import styled from "styled-components";
import color from "../../styles/colors";
import fonts from "../../styles/fonts";

import Button from "../../components/UI/Button";
import Input from "../../components/UI/Input";
import { registUserAPI } from "../../lib/api/user";

const SignUp = () => {
  const router = useRouter();
  // 회원가입 입력 폼에 들어갈 항목
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const idChangeHandler = (event) => {
    setId(event.target.value);
  };
  const nameChangeHandler = (event) => {
    setName(event.target.value);
  };
  const passwordChangeHandler = (event) => {
    setPassword(event.target.value);
  };
  const emailChangeHandler = (event) => {
    setEmail(event.target.value);
  };

  const signUp = () => {
    const user = {
      userId: id,
      userName: name,
      userPassword: password,
      userMail: email,
    };
    console.log(user);
    registUserAPI(user);

    setId("");
    setName("");
    setPassword("");
    setEmail("");

    router.replace("/");
  };

  return (
    <Container>
      <div className="form-wrap">
        <h1 className="login-title">SIGNUP</h1>
        <div className="form-item">
          <label>아이디</label>
          <Input type="text" onChange={idChangeHandler} value={id} />
        </div>
        <div className="form-item">
          <label>닉네임</label>
          <Input type="text" onChange={nameChangeHandler} value={name} />
        </div>
        <div className="form-item">
          <label>비밀번호</label>
          <Input
            type="password"
            onChange={passwordChangeHandler}
            value={password}
          />
        </div>
        <div className="form-item">
          <label>메일주소</label>
          <Input type="text" onChange={emailChangeHandler} value={email} />
        </div>
        <div>
          <Button className="btn-login" type="submit" onClick={signUp}>
            회원가입
          </Button>
        </div>
      </div>
    </Container>
  );
};

export default SignUp;

const Container = styled.div`
  box-sizing: border-box;
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 0 auto;
  padding-top: 120px;

  .form-wrap {
    width: 400px;
    padding: 30px;
    margin: 0 auto;
  }

  .login-title {
    padding-bottom: 20px;
    font-size: 48px;
    color: ${color.blue};
    text-align: center;
  }

  .form-item {
    text-align: left;
    margin-top: 6px;
  }
`;
