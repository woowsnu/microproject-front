import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import styled from "styled-components";
import color from "../../styles/colors";
import fonts from "../../styles/fonts";

import Button from "../../components/UI/Button";
import Input from "../../components/UI/Input";
import { loginUserAPI } from "../../lib/api/user";

const Login = () => {
  const router = useRouter();
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
      userId: id,
      userPassword: password,
    };

    loginUserAPI(user);

    router.replace("/");
  };

  return (
    <Container>
      <div>
        <div className="form-wrap">
          <h1 className="login-title">LOGIN</h1>
          <div className="form-item">
            <Input onChange={idChangeHandler} placeholder={"아이디"} value={id}/>
          </div>
          <div className="form-item">
            <Input type="password" onChange={passwordChangeHandler} placeholder={"비밀번호"} value={password}/>
          </div>
          <div className="form-button">
            <Button className="btn-login" type="submit" onClick={logIn}>
              로그인
            </Button>
          </div>
          <Link href="/signup">
            <p className="text-signup">아직 회원이 아니신가요? <span style={{color: "#2D81FF", fontWeight: 600}}>회원가입</span></p>
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

  .text-signup {
    ${fonts.Body1}
    text-align: center;
    margin-top: 30px;
  }
`;
