import React from "react";
import styled from "styled-components";

const PopularCard = () => {
  return (
    <Container>
      <span className="category-tag"></span>
      <h4>글제목이 들어갑니다아ㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏ</h4>
      <div className="user-profile">
        <p>닉네임이 들어갑니다</p>
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