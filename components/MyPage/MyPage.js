import { useState } from "react";
import { useRouter } from "next/router";
import styled from "styled-components";
import NavForMypage from "../Layout/NavForMypage";
import Footer from "../Layout/Footer";
import Link from "next/link";
import colors from "../../styles/colors";
import Lnb from "./Lnb";

const POST = [
  {
    id: 1,
    title: "자바의 변수 선언",
    text: "자바는 *강형 언어로 변수 선언시에 자료형을 함께 써주어야 한다! * 강형언어(Strongly-typed) : 모든 변수의 형이 컴파일 시 결정됨, 변수 선언 시 표시한 자료형만 담을 수 있다. 두줄까지 가능 길어지면 말줄임........ ",
    date: "2022.06.04",
  },
  {
    id: 2,
    title: "자바의 변수 선언",
    text: "자바는 *강형 언어로 변수 선언시에 자료형을 함께 써주어야 한다! * 강형언어(Strongly-typed) : 모든 변수의 형이 컴파일 시 결정됨, 변수 선언 시 표시한 자료형만 담을 수 있다. 두줄까지 가능 길어지면 말줄임........ ",
    date: "2022.06.04",
  },
  {
    id: 3,
    title: "자바의 변수 선언",
    text: "자바는 *강형 언어로 변수 선언시에 자료형을 함께 써주어야 한다! * 강형언어(Strongly-typed) : 모든 변수의 형이 컴파일 시 결정됨, 변수 선언 시 표시한 자료형만 담을 수 있다. 두줄까지 가능 길어지면 말줄임........ ",
    date: "2022.06.04",
  },
];

const MyPage = () => {
  const [select, setSelect] = useState(false);
  const router = useRouter();
  const user = router.query.id;

  // const logOut = () => {
  //   localStorage.removeItem("userId");
  //   router.replace("/");
  // };

  return (
    <>
      <NavForMypage />
      <Container>
        <Wrap>
          <Lnb user={user} />
          <div className="content">
            <h3 className="content-title">내가 작성한 글</h3>
            <div className="post-list">
              <ul style={{ listStyle: "none", paddingLeft: 0 }}>
                {/* user_post에서 userId params로 해당 유저의 글 조회하는 api? */}
                {POST.map((post) => {
                  return (
                    <Link href={"/post/" + post.id}>
                      <li>
                        <h3>{post.title}</h3>
                        <p>{post.text}</p>
                        <p>{post.date}</p>
                        <hr />
                      </li>
                    </Link>
                  );
                })}
              </ul>
            </div>
          </div>
        </Wrap>
        <Footer />
      </Container>
    </>
  );
};

export default MyPage;

const Container = styled.div`
  max-width: 100%;

  text-decoration: none;
  color: ${colors.gray1};
  display: flex;
  flex-direction: column;
`;

const Wrap = styled.div`
  max-width: 960px;
  display: flex;
  margin: 60px auto;
  text-align: left;

  .lnb {
    width: 20%;
  }

  .menus {
    display: flex;
    flex-direction: column;
  }

  .menu {
    margin-top: 8px;
  }

  .menu:hover {
    margin-top: 8px;
    color: ${colors.blue};
  }

  .logout {
    margin-top: 60px;
    padding: 10px 0;
    background-color: ${colors.gray4};
    text-align: center;
    width: 50%;
  }

  .content {
    width: 80%;
    padding-left: 70px;
  }

  .content-title {
    color: ${colors.blue};
    margin-bottom: 40px;
  }

  .footer {
    margin-top: auto;
  }
`;
