import React from "react";
import Link from "next/link";
import styled from "styled-components";

const Nav = () => {
  return (
    <Container>
      <div>
        <Link href="/"><h3>LOGO</h3></Link>
      </div>
      <div>
        <Link href="/login"><h3>로그인</h3></Link>
        {/* 로그인 시 마이페이지로 변경 */}
        <h3 hidden={true}>마이페이지</h3>
      </div>
    </Container>
  );
};

export default Nav;

const Container = styled.nav`
  max-width: 960px;
  margin: 0 auto;
  padding: 20px;
  display: flex;
  justify-content: space-between;
`;
