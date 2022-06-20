import React, { useState } from "react";
import styled from "styled-components";
import Button from "../../components/UI/Button";
import Input from "../../components/UI/Input";
import color from "../../styles/colors";
import Link from "next/link";
import { loginUserAPI } from "../../lib/api/user";

const Login = () => {
  // 회원가입 입력 폼에 들어갈 항목
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  const idChangeHandler = (event) => {
    setId(event.target.value);
  };
  const passwordChangeHandler = (event) => {
    setPassword(event.target.value);
  };
  // 로그인 전송 API 연결

  const logIn = () => {
    const user = {
      user_name: id,
      user_password: password,
    };
    console.log("logIn");
    console.log(user);

    loginUserAPI(user);

    setId("");
    setPassword("");
  };

  return (
    <Container>
      <div>
        <div className="form-wrap">
          <h1 className="login-title">LOGIN</h1>
          <div className="form-item">
            <p>아이디</p>
            <Input onChange={idChangeHandler}/>
          </div>
          <div className="form-item">
            <p>비밀번호</p>
            <Input onChange={passwordChangeHandler}/>
          </div>
          <div>
            <Button className="btn-login" type="submit" onClick={logIn}>
              로그인
            </Button>
          </div>
          <Link href="/signup">
            <p>아직 회원이 아니신가요? 회원가입</p>
          </Link>
        </div>
      </div>
    </Container>
  );
};

export default Login;

const Container = styled.div`
  box-sizing: border-box;
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 0 auto;
  padding-top: 120px;

  .form-wrap {
    padding: 30px;
    width: 90%;
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
