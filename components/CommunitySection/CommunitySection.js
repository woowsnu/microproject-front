import React from "react";
import CommunityCard from "./CommunityCard";
import styled from "styled-components";

const CommunitySection = () => {
  return (
    <Wrap>
      <h2 className="section-title">같이 글써요 👀</h2>
      <div className="card-wrap">
        <CommunityCard />
        <CommunityCard />
        <CommunityCard />
        <CommunityCard />
      </div>
    </Wrap>
  );
};

export default CommunitySection;

const Wrap = styled.section`
  max-width: 960px;
  margin: 0 auto;
  padding-bottom: 160px;

  .section-title {
    text-align: left;
  }

  .card-wrap {
    display: flex;
    justify-content: space-between;
  }
`;
