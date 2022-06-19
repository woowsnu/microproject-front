import React from "react";
import { Link } from "next/link";
// import styled from "styled-components";
// import color from "../../styles/colors";

import Nav from "./Nav";
import Button from "../UI/Button";

const Header = () => {
  return (
    <>
      <Nav />
      <div className="main-banner">
        <h2>micro project</h2>
        {/* 로그인 시 아래 글쓰기 버튼 노출 or 비로그인 시 클릭 > 회원가입으로 연결 */}
        <Link href="/post">
          <Button>글쓰기</Button>
        </Link>
      </div>
    </>
  );
};

export default Header;
