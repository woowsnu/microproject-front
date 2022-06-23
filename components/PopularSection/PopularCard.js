import React from "react";
import styled from "styled-components";

const PopularCard = (props) => {
  // console.log(props.post.postId)
  return (
    <Container>
      <h4>{props.post.postTitle}</h4>
      <div className="user-profile">
        <p>닉네임이 들어갑니다</p>
        <p>{props.post.postDate}</p>
      </div>
    </Container>
  );
};

export default PopularCard;

const Container = styled.div`
    box-sizing: border-box;
    width: 224px;
    height: 280px;
    border-radius: 3px;
    padding: 0 16px;
    border: 1px solid #d9d9db;
`;