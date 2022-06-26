import { useRouter } from "next/router";
import Link from "next/link";
import styled from "styled-components";
import Image from "next/image";
import colors from "../../styles/colors";

const NavForMypage = () => {
  const router = useRouter();

  const logOut = () => {
    localStorage.removeItem("userId");
    router.replace("/");
  };
  return (
    <Container>
      <Link href="/">
      <Image src="/static/images/micro-blue.png" width={128} height={20}/>
      </Link>
      <div className="logout" onClick={logOut}>로그아웃</div>
    </Container>
  );
};

export default NavForMypage;

const Container = styled.nav`
  max-width: 960px;
  margin: 0 auto;
  padding: 30px 0;
  display: flex;
  justify-content: space-between;

  .logout {
    font-size: 1rem;
    color: ${colors.gray2}; 
  }

  .logout:hover {
    color: ${colors.blue}; 
  }
`;
