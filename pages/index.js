import React, { useState } from "react";
// import styled from "styled-components";

import Header from "../components/Layout/Header";
import PopularSection from "../components/PopularSection/PopularSection";
import CommunitySection from "../components/CommunitySection/CommunitySection";
import Footer from "../components/Layout/Footer";

export default function Home() {
  const [popularPost, setPopularPost] = useState();
  const [community, setCommunity] = useState();

  return (
    <>
      <Header />
      <PopularSection popularPost={popularPost} />
      <CommunitySection community={community} />
      <Footer />
    </>
  );
}
