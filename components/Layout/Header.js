import React from "react";
import Link from "next/link";
import styled from "styled-components";
import Nav from "./Nav";
import Button from "../UI/Button";

const Header = () => {
  return (
    <Container>
      <Nav />
      <div className="wrap">
        <h2>micro project</h2>
        {/* 로그인 시 아래 글쓰기 버튼 노출 or 비로그인 시 클릭 > 회원가입으로 연결 */}
      </div>
      <div className="btn-area">
        <Link href="/post">
          <Button>글쓰기</Button>
        </Link>
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
    padding-top: 60px;
  }

  .btn-area {
    max-width: 300px;
    margin: 0 auto;
  }
`;
