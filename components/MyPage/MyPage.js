import React from "react";
import Nav from "../../components/Navigation/Nav";
import styled from "styled-components";
import Footer from "../../components/Footer/Footer";

const USER = [
  {id: 1, nickname: "닉네임", email: "woowsnu@gmail.com"}
]

const POST = [
  {
    id: 1,
    nickname: "닉네임",
    email: "woowsnu@gmail.com",
    title: "자바의 변수 선언",
    text: "자바는 *강형 언어로 변수 선언시에 자료형을 함께 써주어야 한다! * 강형언어(Strongly-typed) : 모든 변수의 형이 컴파일 시 결정됨, 변수 선언 시 표시한 자료형만 담을 수 있다. 두줄까지 가능 길어지면 말줄임........ ",
    date: "2022.06.04",
  },
  {
    id: 2,
    nickname: "닉네임",
    email: "woowsnu@gmail.com",
    title: "자바의 변수 선언",
    text: "자바는 *강형 언어로 변수 선언시에 자료형을 함께 써주어야 한다! * 강형언어(Strongly-typed) : 모든 변수의 형이 컴파일 시 결정됨, 변수 선언 시 표시한 자료형만 담을 수 있다. 두줄까지 가능 길어지면 말줄임........ ",
    date: "2022.06.04",
  },
];

const MyPage = () => {
  return (
    <Container>
      <Nav />
      <Wrap>
        <div className="lnb">
          <div className="user">
            <h3>{USER[0].nickname}</h3>
            <p>{USER[0].email}</p>
            <hr />
          </div>
          <div className="menu">
            <ul style={{listStyle: "none", paddingLeft: 0}}>
              <li>내가 작성한 글</li>
              <li>회원정보 수정</li>
            </ul>
          </div>
        </div>
        <div className="content">
          <h3>내가 작성한 글</h3>
          <div>전체</div>
          <div className="post-list">
            <ul style={{listStyle: "none", paddingLeft: 0}}>
              {POST.map((post) => {
                return (
                  <li>
                    <h3>{post.title}</h3>
                    <p>{post.text}</p>
                    <p>{post.date}</p>
                    <hr/>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </Wrap>
      <Footer />
    </Container>
  );
};

export default MyPage;

const Container = styled.div`
  width: 100%;
  text-decoration: none;
`;

const Wrap = styled.div`
  max-width: 960px;
  display: flex;
  margin: 0 auto;
  text-align: left;

  .lnb {
    width: 20%;
  }

  .content {
    width: 80%;
    padding-left: 70px;
  }
`;
