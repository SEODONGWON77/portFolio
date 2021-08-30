import React from "react";
import styled from "styled-components";
import { Container, Col, Row, Carousel } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faCalendarAlt,
  faMapMarkedAlt,
  faMobileAlt,
  faEnvelope,
  faPeopleCarry,
  faRunning,
  faChild,
  faUniversity,
} from "@fortawesome/free-solid-svg-icons";

const StyledAbout = styled.div`
  padding: 5rem;
  background-color: #f9f1df;
  min-height: 550px;
  color: black;
  text-align: center;
`;
const Title = styled.div`
  font-family: ONEMobilePOP;
  text-align: center;

  font-size: 3rem;
`;
const Abouts = styled.div`
  display: flex;
  width: 100%;
  height: auto;
  padding-top: 50px;
  font-size: 80px;
  justify-content: center;
`;

const IconTextB = styled.p`
  font-family: GmarketSansMedium;
  font-size: 1.1rem;
  text-align: center;
  font-weight: bold;
  margin: 0;
`;
const IconText = styled.p`
  font-family: GmarketSansMedium;
  font-size: 1rem;
  text-align: center;
  margin: 0;
`;

function About() {
  return (
    <StyledAbout id="about">
      <Title>About</Title>
      <Carousel
        interval={4000}
        controls={false}
        indicators={false}
        pause={false}
      >
        <Carousel.Item>
          <Abouts>
            <Container>
              <Row>
                <Col md={4} xs={12} style={{ paddingBottom: "30px" }}>
                  <FontAwesomeIcon icon={faUser} />
                  <IconTextB>이름</IconTextB>
                  <IconText>서동원</IconText>
                </Col>
                <Col md={4} xs={12} style={{ paddingBottom: "30px" }}>
                  <FontAwesomeIcon icon={faCalendarAlt} />
                  <IconTextB>생년월일</IconTextB>
                  <IconText>1993.05.09</IconText>
                </Col>
                <Col md={4} xs={12} style={{ paddingBottom: "30px" }}>
                  <FontAwesomeIcon icon={faMapMarkedAlt} />
                  <IconTextB>주소</IconTextB>
                  <IconText>경기도 수원시</IconText>
                </Col>
              </Row>
            </Container>
          </Abouts>
        </Carousel.Item>
        <Carousel.Item>
          <Abouts>
            <Container>
              <Row>
                <Col md={4} xs={12} style={{ paddingBottom: "30px" }}>
                  <FontAwesomeIcon icon={faMobileAlt} />
                  <IconTextB>연락처</IconTextB>
                  <IconText>010-5203-6759</IconText>
                </Col>
                <Col md={4} xs={12} style={{ paddingBottom: "30px" }}>
                  <FontAwesomeIcon icon={faUniversity} />
                  <IconTextB>강릉원주대학교 졸업</IconTextB>
                  <IconText>(컴퓨터공학과)</IconText>
                </Col>
                <Col md={4} xs={12} style={{ paddingBottom: "30px" }}>
                  <FontAwesomeIcon icon={faEnvelope} />
                  <IconTextB>E-Mail</IconTextB>
                  <IconText>tksska77712@gamil.com</IconText>
                </Col>
              </Row>
            </Container>
          </Abouts>
        </Carousel.Item>
        <Carousel.Item>
          <Abouts>
            <Container>
              <Row>
                <Col md={4} xs={12} style={{ paddingBottom: "30px" }}>
                  <FontAwesomeIcon icon={faChild} />
                  <IconTextB>긍정</IconTextB>
                  <IconText>항상 긍정적으로 바라봅니다.</IconText>
                </Col>
                <Col md={4} xs={12} style={{ paddingBottom: "30px" }}>
                  <FontAwesomeIcon icon={faRunning} />
                  <IconTextB>끈기</IconTextB>
                  <IconText>쉽게 포기하지 않습니다.</IconText>
                </Col>
                <Col md={4} xs={12} style={{ paddingBottom: "30px" }}>
                  <FontAwesomeIcon icon={faPeopleCarry} />
                  <IconTextB>협력</IconTextB>
                  <IconText>서로 협력하여 해결합니다.</IconText>
                </Col>
              </Row>
            </Container>
          </Abouts>
        </Carousel.Item>
      </Carousel>
    </StyledAbout>
  );
}

export default About;
