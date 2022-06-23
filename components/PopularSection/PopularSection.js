import React from "react";
import styled from "styled-components";
import PopularCard from "./PopularCard";

const PopularSection = (props) => {

  return (
    <Wrap>
      <h2 className="section-title">분야별 인기글 💥</h2>
      <div className="card-wrap">
        <PopularCard post={props.posts[0]}/>
        <PopularCard post={props.posts[1]}/>
        <PopularCard post={props.posts[2]}/>
        <PopularCard post={props.posts[3]}/>
      </div>
    </Wrap>
  );
};

export default PopularSection;

const Wrap = styled.section`
  max-width: 960px;
  margin: 0 auto;
  padding: 60px 0;

  .section-title {
    text-align: left;
  }

  .card-wrap {
      display: flex;
      justify-content: space-between;
  }
`;
