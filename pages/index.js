import React, { useEffect, useState } from "react";
import Header from "../components/Layout/Header";
import styled from "styled-components";
import Footer from "../components/Layout/Footer";
import PopularSection from "../components/PopularSection/PopularSection";
import CommunitySection from "../components/CommunitySection/CommunitySection";

export default function Home(props) {
  const [posts, setPosts] = useState(props.posts);
  const [isLogin, setIsLogin] = useState();

  useEffect(()=>{
    const loginCheck = localStorage.getItem('userId');
    setIsLogin(loginCheck);
  })

  console.log(isLogin);

  return (
    <>
      <Container>
        <Header isLogin={isLogin}/>
        <main>
          <PopularSection posts={posts}/>
          <CommunitySection/>
        </main>
      </Container>
      <Footer />
    </>
  );
}

const Container = styled.div`
  box-sizing: border-box;
  margin: 0 auto;
`;


export const getServerSideProps = async () => {
  try {
    const res = await fetch("http://localhost:8080/api/post");
    const posts = await res.json();
    return {
      props: { posts },
    };
  } catch (error) {
    console.log(error);
    return { props: {} };
  }
};

