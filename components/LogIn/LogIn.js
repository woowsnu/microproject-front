import React, { useState } from "react";
import { Link } from "next/link";
import { loginUserAPI } from "../../lib/api/user";

import Button from "../UI/Button";

const LogIn = () => {
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
    <div>
      <div className="form-wrap">
        <h1 className="login-title">LOGIN</h1>
        <div className="form-item">
          <p>아이디</p>
          <input onChange={idChangeHandler} value={id}/>
        </div>
        <div className="form-item">
          <p>비밀번호</p>
          <input onChange={passwordChangeHandler} value={password}/>
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
  );
};

export default LogIn;
