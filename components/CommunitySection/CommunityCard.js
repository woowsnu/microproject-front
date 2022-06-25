import React from "react";
import styled from "styled-components";

const CommunityCard = (props) => {
  return (
    <Container>
      <div>
        <h4>{props.title}</h4>
        <div className="user-profile">
          <p>주제 : {props.topic}</p>
          <p>모집인원 : {props.person}</p>
        </div>
      </div>
    </Container>
  );
};

export default CommunityCard;

const Container = styled.div`
  box-sizing: border-box;
  width: 224px;
  height: 280px;
  border-radius: 3px;
  padding: 0 16px;
  border: 1px solid #d9d9db;
`;
