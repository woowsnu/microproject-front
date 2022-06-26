import React from "react";
import Link from "next/link";
import styled from "styled-components";
import Image from "next/image";
import colors from "../../styles/colors";

const Nav = (props) => {
  return (
    <Container>
      <div>
        <Link href="/"><Image src="/static/images/micro.png" width={130} height={22}/></Link>
      </div>
      <div className="utils">
        {props.isLogin != null ? <Link href="/mypage/[id]" as={`/mypage/${props.isLogin}`}><h3 className="util-text">마이페이지</h3></Link>
        :<Link href="/login"><h3 className="util-text">로그인</h3></Link>}
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
  align-items: center;

  .util-text {
    font-size: 1.2rem;
    color: white;
  }

  .util-text:hover {
    color: ${colors.blue};
  }
`;
