import React from "react";
import styled from "styled-components";

const CommunityCard = (props) => {
  return (
    <Container alt="<a href='https://www.freepik.com/psd/3d-pen'>3d pen psd created by freepik - www.freepik.com</a>">
      <BgOpacityBlack />
      <div className="camp-content">
        <h4>{props.title}</h4>
        <p>{props.topic}<br/>모집인원 : {props.person}</p>
      </div>
    </Container>
  );
};

export default CommunityCard;

const Container = styled.div`
  position: relative;
  width: 224px;
  height: 280px;
  box-sizing: border-box;
  background: url("/static/images/post3.png");
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
