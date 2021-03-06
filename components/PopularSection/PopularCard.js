import React from "react";
import Image from "next/image";
import styled from "styled-components";

const PopularCard = (props) => {
  // console.log(props.post.postId)
  return (
    <Container alt="<a href='https://www.freepik.com/psd/peace-icon'>Peace icon psd created by freepik - www.freepik.com</a>">
      <BgOpacityBlack />
      <div className="camp-content">
      <h4>{props.post.postTitle}</h4>
      <div className="user-profile">
        <p>{props.post.postDate}</p>
      </div>
      </div>
    </Container>
  );
};

export default PopularCard;

const Container = styled.div`
    position: relative;
    width: 224px;
    height: 280px;
    box-sizing: border-box;
    background: url('/static/images/post4.png');
    border-radius: 5px;
    padding: 0 16px;
    border: 1px solid #d9d9db;

    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    margin-bottom: 8px;

    .camp-content {
      padding: 20px;
      z-index: 1;
      color: white;
    }
`;

const BgOpacityBlack = styled.div`
  position: absolute;
  height: 50%;
  width: 100%;
  left: 0;
  bottom: 0;
  background: linear-gradient(
    180deg,
    rgba(39, 63, 40, 0) 0%,
    rgba(89, 89, 89, 0.558824) 15.62%,
    #000000 70.83%
  );
  border-radius: 5px;
`;