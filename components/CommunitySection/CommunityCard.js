import React from "react";
import styled from "styled-components";

const CommunityCard = (props) => {
  return (
    <Container>
      <div>
        <h4>글제목이 들어갑니다아ㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏ</h4>
        <div className="user-profile">
          <img alt="profile-img" />
          <p>닉네임이 들어갑니다</p>
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
  border-radius: 10px;
  padding: 0 16px;
  border: 1px solid #d9d9db;
`;
