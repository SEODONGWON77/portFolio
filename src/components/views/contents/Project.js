import React from "react";
import styled from "styled-components";
import { Container, Col, Row, Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";
const StyledProjectInfo = styled.div`
  width: 100%;
  height: auto;
  float: left;
  padding-top: 5rem;
  border: 1px solid;
  background-color: white;
  min-height: 300px;
  color: white;
`;
const Title = styled.div`
  font-family: ONEMobilePOP;
  text-align: center;
  padding-top: 10px;
  padding-bottom: 70px;
  font-size: 3rem;
  color: black;
`;
const ImageBox = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 auto;
  background-position: center;
  background-color: #e8e3df;
  border-radius: 15px;
`;
const Explain = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 auto;
  /* background-color: #e8e3df; */
  background-color: white;
  border-radius: 15px;
  box-shadow: 10px 5px 5px gray;
`;
const ExplainTitle = styled.h2`
  font-family: ONEMobilePOP;
  text-align: center;
  padding-top: 30px;
`;
const Styledimg = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  padding-top: 82px;
  padding-bottom: 82px;
`;

function Project() {
  return (
    <StyledProjectInfo id="project">
      <Title>Project</Title>
      <Container
        style={{
          backgroundColor: " #e8e3df",
          borderRadius: "30px",
          padding: "30px",
          marginBottom: "70px",
        }}
      >
        <div
          style={{
            backgroundColor: " #e8e3df",
            color: "black",
            textAlign: "center",
            borderRadius: "50px",
          }}
        >
          <Row>
            <Col md={6} xs={12}>
              <ImageBox>
                <Carousel
                  valiant="dark"
                  interval={null}
                  controls={false}
                  pause={false}
                  fade
                >
                  <Carousel.Item>
                    <Styledimg src="/images/moldManage1.png" alt="" />
                  </Carousel.Item>
                  <Carousel.Item>
                    <Styledimg src="/images/moldManage2.png" alt="" />
                  </Carousel.Item>
                  <Carousel.Item>
                    <Styledimg src="/images/moldManage3.png" alt="" />
                  </Carousel.Item>
                  <Carousel.Item>
                    <Styledimg src="/images/moldManage4.png" alt="" />
                  </Carousel.Item>
                </Carousel>
              </ImageBox>
            </Col>
            <Col md={6} xs={12}>
              <Explain>
                <ExplainTitle>PHA 금형 관리시스템</ExplainTitle>
                <p style={{ textAlign: "left", margin: "30px" }}>
                  금형 관리 통합 시스템 웹 개발(MES)
                  <br />
                  총 개발 기간 : 2021.10 ~2022.6
                  <br />
                  내용 : 금형의 생산, 점검, 수리, 이동, 일정, 예비품, 사용자 등
                  전체적으로 관리하는 웹 시스템 구축
                  <br />
                  담당업무 : 초기 설계부터 전체 페이지 개발 담당, 개발완료까지
                  프론트엔드, 백엔드개발 모두 참여, 개발완료 후 추가 요구사항 AS
                  유지보수 중
                </p>
                <hr style={{ textAlign: "left", margin: "30px" }} />
                <p
                  style={{ textAlign: "left", margin: "0px 0px 10px 30px" }}
                ></p>
                <p style={{ textAlign: "left", margin: "0px 0px 10px 30px" }}>
                  <span style={{ fontWeight: "bolder" }}>Front-end : </span>
                  <span>React, TypeScript, Mobx, Scss, Rechart</span>
                </p>
                <p style={{ textAlign: "left", margin: "0px 0px 10px 30px" }}>
                  <span style={{ fontWeight: "bolder" }}>Back-end : </span>
                  <span>C# - asp.net, RestAPI</span>
                </p>
                <p style={{ textAlign: "left", margin: "0px 0px 10px 30px" }}>
                  <span style={{ fontWeight: "bolder" }}>DataBase : </span>
                  MSSQL
                </p>
                <p style={{ textAlign: "left", margin: "0px 0px 10px 30px" }}>
                  <span style={{ fontWeight: "bolder" }}>UI : </span>
                  Figma
                </p>
              </Explain>
            </Col>
          </Row>
        </div>
        <br />
        <hr style={{ color: "black", margin: "30px" }} />
        <br />

        <div
          style={{
            backgroundColor: " #e8e3df",
            color: "black",
            textAlign: "center",
            borderRadius: "50px",
          }}
        >
          <Row>
            <Col md={6} xs={12}>
              <ImageBox>
                <Carousel
                  valiant="dark"
                  interval={null}
                  controls={false}
                  pause={false}
                  fade
                >
                  <Carousel.Item>
                    <Styledimg src="/images/monitor1.png" alt="" />
                  </Carousel.Item>
                  <Carousel.Item>
                    <Styledimg src="/images/monitor2.png" alt="" />
                  </Carousel.Item>
                </Carousel>
              </ImageBox>
            </Col>
            <Col md={6} xs={12}>
              <Explain>
                <ExplainTitle>PHA 금형 모니터링시스템</ExplainTitle>
                <p style={{ textAlign: "left", margin: "30px" }}>
                  실시간 모니터링시스템
                  <br />
                  총 개발 기간 : 2022.02 ~2022.8
                  <br />
                  내용 : 금형 센서로 감지되는 온도, 압력 등을 실시간 모니터링
                  시스템 구축
                  <br />
                  담당업무 : 모니터링시스템의 프론트엔드 전체 페이지 개발,
                  백엔드 개발은 서브개발로 주로 프론트엔드 페이지 개발을 담당함.
                </p>
                <hr style={{ textAlign: "left", margin: "30px" }} />
                <p
                  style={{ textAlign: "left", margin: "0px 0px 10px 30px" }}
                ></p>
                <p style={{ textAlign: "left", margin: "0px 0px 10px 30px" }}>
                  <span style={{ fontWeight: "bolder" }}>Front-end : </span>
                  <span>React, TypeScript, Mobx, Scss, Rechart, Nivochart</span>
                </p>
                <p style={{ textAlign: "left", margin: "0px 0px 10px 30px" }}>
                  <span style={{ fontWeight: "bolder" }}>Back-end : </span>
                  <span>C# - asp.net, RestAPI</span>
                </p>
                <p style={{ textAlign: "left", margin: "0px 0px 10px 30px" }}>
                  <span style={{ fontWeight: "bolder" }}>DataBase : </span>
                  MSSQL
                </p>
                <p style={{ textAlign: "left", margin: "0px 0px 10px 30px" }}>
                  <span style={{ fontWeight: "bolder" }}>UI : </span>
                  Figma
                </p>
              </Explain>
            </Col>
          </Row>
        </div>
        <br />
        <hr style={{ color: "black", margin: "30px" }} />
        <br />

        <div
          style={{
            backgroundColor: " #e8e3df",
            color: "black",
            textAlign: "center",
            borderRadius: "50px",
          }}
        >
          <Row>
            <Col md={6} xs={12}>
              <ImageBox>
                <Carousel
                  valiant="dark"
                  interval={null}
                  controls={false}
                  pause={false}
                  fade
                >
                  <Carousel.Item>
                    <Styledimg src="/images/eatsfine.png" alt="" />
                  </Carousel.Item>
                  <Carousel.Item>
                    <Styledimg src="/images/eatsfine3.png" alt="" />
                  </Carousel.Item>
                  <Carousel.Item>
                    <Styledimg src="/images/eatsfine4.png" alt="" />
                  </Carousel.Item>
                  <Carousel.Item>
                    <Styledimg src="/images/eatsfine5.png" alt="" />
                  </Carousel.Item>
                  <Carousel.Item style={{ textAlign: "center" }}>
                    <img
                      src="/images/eatsfine6.png"
                      alt=""
                      style={{ height: "500px" }}
                    />
                  </Carousel.Item>
                  <Carousel.Item style={{ textAlign: "center" }}>
                    <img
                      src="/images/eatsfine7.png"
                      alt=""
                      style={{ height: "500px" }}
                    />
                  </Carousel.Item>
                </Carousel>
              </ImageBox>
            </Col>
            <Col md={6} xs={12}>
              <Explain>
                <ExplainTitle>Eat's fine</ExplainTitle>
                <p style={{ textAlign: "left", margin: "30px" }}>
                  오늘의 날씨를 받아와서 해당 날씨에 어울리는 음식을 추천해주는
                  웹사이트
                  <br />
                  날씨에 따라 추천해주는 메뉴가 다르며, 직접 내 주변의 여러 메뉴
                  또는 음식점을 검색 할 수 있고 위치가 맞지 않거나 다른 지역에서
                  검색 하고 싶을때 위치를 수정 할 수 있습니다. 로그인시 마음에
                  드는 장소를 찜하기를 통해 언제든지 확인하고 찾을 수 있게
                  구현했습니다.
                </p>
                <p>
                  AWS(EC2)를 통해 서비스 배포, 모바일환경 최적화, GitHub로
                  버전관리{" "}
                </p>
                <hr style={{ textAlign: "left", margin: "30px" }} />
                <p style={{ textAlign: "left", margin: "0px 0px 10px 30px" }}>
                  <span style={{ fontWeight: "bolder" }}>도메인 : </span>
                  <span
                    onClick={() => {
                      window.open("https://eatsfine.site", "_blank");
                    }}
                  >
                    <Link>eatsfine.site</Link>
                    <span> (EC2 프리티어 기간만료) </span>
                  </span>
                </p>
                <p style={{ textAlign: "left", margin: "0px 0px 10px 30px" }}>
                  <span style={{ fontWeight: "bolder" }}>Front-end : </span>
                  <span>React, React-Redux, Sass, Styled-components</span>
                </p>
                <p style={{ textAlign: "left", margin: "0px 0px 10px 30px" }}>
                  <span style={{ fontWeight: "bolder" }}>Back-end : </span>
                  <span>Node.js, Express, MongoDB(Mongoose)</span>
                </p>
                <p style={{ textAlign: "left", margin: "0px 0px 10px 30px" }}>
                  <span style={{ fontWeight: "bolder" }}>Deployment : </span>
                  AWS(EC2), GitHub
                </p>
              </Explain>
            </Col>
          </Row>
        </div>
        <br />
        <hr style={{ color: "black", margin: "30px" }} />
        <br />

        <div
          style={{
            backgroundColor: " #e8e3df",
            color: "black",
            textAlign: "center",
          }}
        >
          <Row>
            <Col md={6} xs={12}>
              <ImageBox>
                <Carousel interval={null} controls={false} pause={false} fade>
                  <Carousel.Item>
                    <Styledimg src="/images/upload.png" alt="" />
                  </Carousel.Item>
                  <Carousel.Item>
                    <Styledimg src="/images/upload2.png" alt="" />
                  </Carousel.Item>

                  <Carousel.Item style={{ textAlign: "center" }}>
                    <img
                      src="/images/upload3.png"
                      alt=""
                      style={{ height: "500px" }}
                    />
                  </Carousel.Item>
                </Carousel>
              </ImageBox>
            </Col>
            <Col md={6} xs={12}>
              <Explain style={{ paddingTop: "60px" }}>
                <ExplainTitle>파일업로드 웹사이트</ExplainTitle>
                <p style={{ textAlign: "left", margin: "30px" }}>
                  이미지나 동영상등을 확장자 별로 분류해서 업로드하고 관리하는
                  웹사이트
                  <br />
                  간단한 로그인 회원가입 기능을 Node.js, Express, MongoDB를 구현
                  <br />
                  반응형을 고려하여 모바일 사이즈에 최적화
                </p>
                <hr style={{ textAlign: "left", margin: "30px" }} />

                <p style={{ textAlign: "left", margin: "0px 0px 10px 30px" }}>
                  <span style={{ fontWeight: "bolder" }}>Front-end : </span>
                  <span>React, React-Redux, Styled-components, ant-Design</span>
                </p>
                <p style={{ textAlign: "left", margin: "0px 0px 10px 30px" }}>
                  <span style={{ fontWeight: "bolder" }}>Back-end : </span>
                  <span>Node.js, Express, MongoDB(Mongoose)</span>
                </p>
                <p style={{ textAlign: "left", margin: "0px 0px 10px 30px" }}>
                  <span style={{ fontWeight: "bolder" }}>Deployment : </span>
                  GitHub
                </p>
              </Explain>
            </Col>
          </Row>
        </div>
        <br />
        <hr style={{ color: "black", margin: "30px" }} />
        <br />

        <div
          style={{
            backgroundColor: " #e8e3df",
            color: "black",
            textAlign: "center",
          }}
        >
          <Row>
            <Col md={6} xs={12}>
              <ImageBox>
                <Carousel interval={null} controls={false} pause={false} fade>
                  <Carousel.Item>
                    <Styledimg src="/images/port.png" alt="" />
                  </Carousel.Item>
                  <Carousel.Item style={{ textAlign: "center" }}>
                    <img
                      src="/images/port2.png"
                      alt=""
                      style={{ height: "500px" }}
                    />
                  </Carousel.Item>
                </Carousel>
              </ImageBox>
            </Col>
            <Col md={6} xs={12}>
              <Explain style={{ paddingTop: "60px" }}>
                <ExplainTitle>포트폴리오 웹사이트</ExplainTitle>
                <p style={{ textAlign: "left", margin: "30px" }}>
                  포트폴리오 용도로 제작된 React로 개발 한 웹사이트
                  <br />
                  간단한 자기소개, 인적 사항, 보유 기술 스택, 프론트엔드
                  프로젝트등 ReactRouter를 사용하여 제작
                  <br />
                  React-Bootstrap의 Grid를 사용하여 반응형 최적화
                </p>
                <hr style={{ textAlign: "left", margin: "30px" }} />

                <p style={{ textAlign: "left", margin: "0px 0px 10px 30px" }}>
                  <span style={{ fontWeight: "bolder" }}>Front-end : </span>
                  <span>React, Styled-components, React-Bootstrap</span>
                </p>

                <p style={{ textAlign: "left", margin: "0px 0px 10px 30px" }}>
                  <span style={{ fontWeight: "bolder" }}>Deployment : </span>
                  GitHub
                </p>
              </Explain>
            </Col>
          </Row>
        </div>
        <br />
        <hr style={{ color: "black", margin: "30px" }} />
        <br />
        <div
          style={{
            backgroundColor: " #e8e3df",
            color: "black",
            textAlign: "center",
          }}
        >
          <Row>
            <Col md={6} xs={12}>
              <ImageBox>
                <Carousel interval="3000" controls={false} pause={false} fade>
                  <Carousel.Item style={{ textAlign: "center" }}>
                    <img
                      src="/images/next.png"
                      alt=""
                      style={{ height: "500px" }}
                    />
                  </Carousel.Item>
                  <Carousel.Item style={{ textAlign: "center" }}>
                    <img
                      src="/images/m.png"
                      alt=""
                      style={{ height: "500px" }}
                    />
                  </Carousel.Item>
                  <Carousel.Item style={{ textAlign: "center" }}>
                    <img
                      src="/images/m2.png"
                      alt=""
                      style={{ height: "500px" }}
                    />
                  </Carousel.Item>
                </Carousel>
              </ImageBox>
            </Col>
            <Col md={6} xs={12}>
              <Explain style={{ paddingTop: "60px" }}>
                <ExplainTitle>토이 프로젝트</ExplainTitle>
                <p style={{ textAlign: "left", margin: "30px" }}>
                  1. Next.js로 구현한 간단한 SNS 기능구현
                  <br />
                  사용자별 게시글 등록, 삭제, infinite-scroll 구현
                </p>
                <p style={{ textAlign: "left", margin: "0px 0px 10px 30px" }}>
                  <span style={{ fontWeight: "bolder" }}>Front-end : </span>
                  <span>Next.js</span>
                </p>
                <hr style={{ margin: "30px" }} />
                <p style={{ textAlign: "left", margin: "30px" }}>
                  2. 바닐라 자바스크립트으로만 개발한 소비기록 관리 프로젝트
                  <br />
                </p>
                <p style={{ textAlign: "left", margin: "0px 0px 10px 30px" }}>
                  <span style={{ fontWeight: "bolder" }}>Front-end : </span>
                  <span>JavaScript, css, html</span>
                </p>
              </Explain>
            </Col>
          </Row>
        </div>
      </Container>
    </StyledProjectInfo>
  );
}

export default Project;
