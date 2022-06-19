import React from "react";
import { Link } from "next/link";
// import styled from "styled-components";

const Nav = () => {
  return (
    <>
      <div>
        <Link href="/">
          <img alt="logo" />
        </Link>
      </div>
      <div>
        <Link href="/login">
          <p>로그인/회원가입</p>
        </Link>
        {/* 로그인 시 마이페이지로 변경 */}
        <p hidden="true">마이페이지</p>
      </div>
    </>
  );
};

export default Nav;
