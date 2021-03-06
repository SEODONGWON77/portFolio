import React from "react";
import styled from "styled-components";
import { Container, Col, Row, Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";
const StyledProjectInfo = styled.div`
  width: 100%;
  height: auto;
  float: left;
  padding-top: 5rem;
  border: 1px solid red;
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
                  ????????? ????????? ???????????? ?????? ????????? ???????????? ????????? ???????????????
                  ????????????
                  <br />
                  ????????? ?????? ??????????????? ????????? ?????????, ?????? ??? ????????? ?????? ??????
                  ?????? ???????????? ?????? ??? ??? ?????? ????????? ?????? ????????? ?????? ????????????
                  ?????? ?????? ????????? ????????? ?????? ??? ??? ????????????. ???????????? ?????????
                  ?????? ????????? ???????????? ?????? ???????????? ???????????? ?????? ??? ??????
                  ??????????????????.
                </p>
                <p>
                  AWS(EC2)??? ?????? ????????? ??????, ??????????????? ?????????, GitHub???
                  ????????????{" "}
                </p>
                <hr style={{ textAlign: "left", margin: "30px" }} />
                <p style={{ textAlign: "left", margin: "0px 0px 10px 30px" }}>
                <span style={{ fontWeight: "bolder" }}>????????? : </span>
                  <span
                    onClick={() => {
                      window.open("https://eatsfine.site", "_blank");
                    }}
                  >
                    <Link>eatsfine.site</Link>
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
                <ExplainTitle>??????????????? ????????????</ExplainTitle>
                <p style={{ textAlign: "left", margin: "30px" }}>
                  ???????????? ??????????????? ????????? ?????? ???????????? ??????????????? ????????????
                  ????????????
                  <br />
                  ????????? ????????? ???????????? ????????? Node.js, Express, MongoDB??? ??????
                  <br />
                  ???????????? ???????????? ????????? ???????????? ?????????
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
                <ExplainTitle>??????????????? ????????????</ExplainTitle>
                <p style={{ textAlign: "left", margin: "30px" }}>
                  ??????????????? ????????? ????????? React??? ?????? ??? ????????????
                  <br />
                  ????????? ????????????, ?????? ??????, ?????? ?????? ??????, ???????????????
                  ??????????????? ReactRouter??? ???????????? ??????
                  <br />
                  React-Bootstrap??? Grid??? ???????????? ????????? ?????????
                </p>
                <hr style={{ textAlign: "left", margin: "30px" }} />

                <p style={{ textAlign: "left", margin: "0px 0px 10px 30px" }}>
                  <span style={{ fontWeight: "bolder" }}>Front-end : </span>
                  <span>React, Styled-components, React-Bootstrap</span>
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
                <ExplainTitle>?????? ????????????</ExplainTitle>
                <p style={{ textAlign: "left", margin: "30px" }}>
                  1. Next.js??? ????????? ????????? SNS ????????????
                  <br />
                  ???????????? ????????? ??????, ??????, infinite-scroll ??????
                </p>
                <p style={{ textAlign: "left", margin: "0px 0px 10px 30px" }}>
                  <span style={{ fontWeight: "bolder" }}>Front-end : </span>
                  <span>Next.js</span>
                </p>
                <hr style={{margin:"30px"}}/>
                <p style={{ textAlign: "left", margin: "30px" }}>
                  2. ????????? ??????????????????????????? ????????? ???????????? ?????? ????????????
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
