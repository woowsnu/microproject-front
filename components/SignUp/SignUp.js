import React, { useState } from "react";
import { Link } from "next/link";
import Button from "../../components/UI/Button";
import Input from "../../components/UI/Input";

const SignUp = () => {
  const signUp = () => {
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

    const user = {
      user_id: id,
      user_name: name,
      user_pw: password,
      user_mail: email,
    };

    registUserAPI(user);

    setId("");
    setName("");
    setPassword("");
    setEmail("");
  };

  return (
    <div>
      <div className="form-wrap">
        <h1 className="login-title">SIGNUP</h1>
        <div className="form-item">
          <p>아이디</p>
          <Input />
        </div>
        <div className="form-item">
          <p>비밀번호</p>
          <Input />
        </div>
        <div>
          <Button className="btn-login" type="submit" onClick={signUp}>
            회원가입
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
