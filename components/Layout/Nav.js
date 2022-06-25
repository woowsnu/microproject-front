import React from "react";
import Link from "next/link";
import styled from "styled-components";

const Nav = (props) => {
  return (
    <Container>
      <div>
        <Link href="/"><h3>LOGO</h3></Link>
      </div>
      <div>
        {props.isLogin != null ? <Link href="/mypage"><h3>마이페이지</h3></Link>
        :<Link href="/login"><h3>로그인</h3></Link>}
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
