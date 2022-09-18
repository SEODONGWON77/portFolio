import React from "react";
import styled from "styled-components";

function Footer() {
  const FooterDiv = styled.div`
    background-color: #635f5e;
  `;
  const ContentDiv = styled.div`
    padding: 50px;
  `
  return (
    <FooterDiv id="footer">
      <ContentDiv>
      <h1>Footer입니다.</h1>
      </ContentDiv>
    </FooterDiv>
  );
}

export default Footer;
