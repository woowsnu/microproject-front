import React, { useState } from "react";
import Link from "next/link";
import styled from "styled-components";
import Nav from "./Nav";
import Button from "../UI/Button";

const Header = (props) => {

  return (
    <Container>
      <Nav isLogin={props.isLogin}/>
      <div className="wrap">
        <div className="title">✍<br />창작의 고통을 나눠요.</div>
      </div>
      <div className="btn-area">
        {props.isLogin != null && <Link href="/post"><Button>글쓰기</Button></Link>}
      </div>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  width: 100%;
  height: 500px;
  background: linear-gradient(60deg, #93a7f5, #a0f2fe);

  .wrap {
    max-width: 960px;
    margin: 0 auto;
    text-align: center;
    padding-top: 80px;
    color: white;
  }

  .title {
    font-size: 44px;
    font-weight: 600;
  }

  .btn-area {
    max-width: 300px;
    margin: 0 auto;
  }
`;
