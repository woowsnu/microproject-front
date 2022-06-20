import React, { useState } from "react";
import Header from "../components/Layout/Header";
import styled from "styled-components";
import Footer from "../components/Layout/Footer";
import PopularSection from "../components/PopularSection/PopularSection";
import CommunitySection from "../components/CommunitySection/CommunitySection";

export default function Home() {
  const [popularPost, setPopularPost] = useState();
  const [community, setCommunity] = useState();

  return (
    <>
      <Container>
        <Header />
        <main>
          <PopularSection popularPost={popularPost} />
          <CommunitySection community={community} />
        </main>
      </Container>
      <Footer />
    </>
  );
}

const Container = styled.div`
  box-sizing: border-box;
  max-width: 960px;
  margin: 0 auto;
`;
