import React from "react";
import styled from "styled-components";
import color from "../../styles/colors";

const Footer = () => {
  return (
    <Container>
      <div className="wrap">
        <p>대표자명 : study3</p>
        <p>Copyright ⓒ study3 Co.,Ltd. All Rights Reserved.</p>
      </div>
    </Container>
  );
};

export default Footer;

const Container = styled.footer`
  box-sizing: border-box;
  height: 160px;
  background-color: ${color.gray4};
  padding: 30px 0;

  .wrap {
    max-width: 960px;
    margin: 0 auto;
  }
`;
