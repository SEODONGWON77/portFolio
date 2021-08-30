import React from "react";
import styled from "styled-components";

const StyledMainImage = styled.div`
  padding: 1rem;
  min-height: 600px;
  color: white;
  background: linear-gradient(
      rgba(112, 93, 80, 0.8) 0,
      rgba(112, 93, 80, 0.8) 90%
    ),
    url("../../../styles/img/1691748.jpg");
  @media screen and (max-width: 800px) {
    min-height: 500px;
  }
`;
const Title = styled.div`
  font-family: ONEMobilePOP;
  text-align: center;
  padding-top: 160px;
  font-size: 4rem;
  @media screen and (max-width: 800px) {
    padding-top: 120px;
    font-size: 3rem;
  }
`;
const Divider = styled.div`
  width: 3rem;
  height: 0;
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
  border: none;
  border-top: 0.2rem solid #f4623a;
  overflow: hidden;
  margin-inline-start: auto;
  margin-inline-end: auto;
`;
const Contents = styled.div`
  text-align: center;
  font-size: 1.25rem;
  font-weight: bold;
  color: hsla(0, 0%, 100%, 0.75); // (색조, 채도, 밝기, 불투명도)
  @media screen and (max-width: 800px) {
    font-size: 1rem;
  }
`;
function MainImage() {
  return (
    <StyledMainImage id="home">
      <Title>
        웹 개발자 포트폴리오
        <br />- 서동원 -
      </Title>
      <Divider>
        <hr />
      </Divider>
      <Contents>
        안녕하세요.
        <br />
        웹을 공부하는 프론트엔드 개발자입니다.
        <br />
        언제나 긍정적인 마인드로 소통하며 개발하는게 저의 장점입니다.
      </Contents>
    </StyledMainImage>
  );
}

export default MainImage;
