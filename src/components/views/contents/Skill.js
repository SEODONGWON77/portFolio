import React from "react";
import "../../../styles/css/skill.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container, Col, Row, ProgressBar } from "react-bootstrap";
import {
  faBootstrap,
  faSass,
  faCss3,
  faHtml5,
  faJs,
  faReact,
  faJava,
  faNode,
} from "@fortawesome/free-brands-svg-icons";
import styled from "styled-components";
import Rating from "@material-ui/lab/Rating";
const StyledSkill = styled.div`
  padding-top: 5rem;
  background-color: #e1ba99;
  min-height: 300px;
  color: white;
`;
const Skills = styled.div`
  display: flex;
  width: 100%;
  min-height: 550px;
  height: auto;
  padding: 15px;

  font-size: 70px;
  justify-content: center;

  @media screen and (max-width: 800px) {
    font-size: 60px;
    padding-left: 40px;
    padding-right: 60px;
  }
`;
const StyledIcon = styled.div`
  padding-top: 20px;
  text-align: center;
  &:hover {
    & > div {
      visibility: visible;
      font-size: 12px;
      opacity: 0.8;
    }
  }
`;

const IconText = styled.p`
  font-size: 16px;
  text-align: center;
`;

const B = styled.div`
  margin: 0 auto;
  text-align: left;
  width: 200px;
  height: auto;
  font-size: 8px;
  visibility: hidden;
  background-color: black;
  padding: 5px;
  opacity: 0;
  transition: all 0.5s;
  color: white;
  border-radius: 6px;
  @media screen and (max-width: 800px) {
    width: 100px;
    font-size: 7px;
  }
`;

const Title = styled.div`
  font-family: ONEMobilePOP;
  text-align: center;
  padding-top: 10px;
  font-size: 3rem;
`;

function Skill(props) {
  const [countOfProgess100, setCountOfProgess100] = React.useState(0);
  const [countOfProgess90, setCountOfProgess90] = React.useState(0);
  const [countOfProgess80, setCountOfProgess80] = React.useState(0);
  const [countOfProgess70, setCountOfProgess70] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCountOfProgess100((oldProgress) => {
        if (100 === oldProgress) return 0;
        return Math.min(oldProgress + 100, 100);
      });
      setCountOfProgess90((oldProgress) => {
        if (90 === oldProgress) return 0;
        return Math.min(oldProgress + 90, 90);
      });
      setCountOfProgess80((oldProgress) => {
        if (80 === oldProgress) return 0;
        return Math.min(oldProgress + 80, 80);
      });
      setCountOfProgess70((oldProgress) => {
        if (70 === oldProgress) return 0;
        return Math.min(oldProgress + 70, 70);
      });
    }, 2000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <StyledSkill id="skill">
      <Title>Skill</Title>
      <Skills>
        <Container>
          <Row>
            <Col md={3} xs={6}>
              <StyledIcon className="React">
                <FontAwesomeIcon icon={faReact} />
                <IconText>React</IconText>
                <B className="gradation_react">
                  Expertise :
                  <Rating value={4} size={"small"} readOnly />
                  <br />
                  React, Next.js, ReactHooks, Redux, Mobx, Styled-Component
                  <ProgressBar
                    now={countOfProgess80}
                    label={`${80}%`}
                    className={"reactbar"}
                  />
                </B>
              </StyledIcon>
            </Col>
            <Col md={3} xs={6}>
              <StyledIcon className="JavaScript">
                <FontAwesomeIcon icon={faJs} />
                <IconText>JavaScript</IconText>
                <B className="gradation_js">
                  Expertise :
                  <Rating value={4.5} precision={0.5} size={"small"} readOnly />
                  <br />
                  JavaScript, ES6
                  <ProgressBar
                    now={countOfProgess90}
                    label={`${90}%`}
                    className={"jsbar"}
                  />
                </B>
              </StyledIcon>
            </Col>
            <Col md={3} xs={6}>
              <StyledIcon className="HTML">
                <FontAwesomeIcon icon={faHtml5} />
                <IconText>HTML</IconText>
                <B className="gradation_html">
                  Expertise :
                  <Rating value={5} size={"small"} readOnly /> <br />
                  HTML5
                  <ProgressBar
                    now={countOfProgess100}
                    label={`${100}%`}
                    className={"htmlbar"}
                  />
                </B>
              </StyledIcon>
            </Col>
            <Col md={3} xs={6}>
              <StyledIcon className="CSS">
                <FontAwesomeIcon icon={faCss3} />
                <IconText>CSS</IconText>
                <B className="gradation_css">
                  Expertise :
                  <Rating value={5} size={"small"} readOnly /> <br />
                  CSS
                  <ProgressBar
                    now={countOfProgess100}
                    label={`${100}%`}
                    className={"cssbar"}
                  />
                </B>
              </StyledIcon>
            </Col>
          </Row>
          <Row>
            <Col md={3} xs={6}>
              <StyledIcon className="Scss">
                <FontAwesomeIcon icon={faSass} />
                <IconText>Scss</IconText>
                <B className="gradation_scss">
                  Expertise :
                  <Rating
                    value={4.5}
                    precision={0.5}
                    size={"small"}
                    readOnly
                  />{" "}
                  <br />
                  SCSS
                  <ProgressBar
                    now={countOfProgess90}
                    label={`${90}%`}
                    className={"scssbar"}
                  />
                </B>
              </StyledIcon>
            </Col>
            <Col md={3} xs={6}>
              <StyledIcon className="Node">
                <FontAwesomeIcon icon={faNode} />
                <IconText>Node.js / server</IconText>
                <B className="gradation_node">
                  Expertise :
                  <Rating defaultValue={4} size={"small"} readOnly />
                  <br />
                  Node.js, Express, MongoDB, RestAPI
                  <ProgressBar
                    now={countOfProgess80}
                    label={`${80}%`}
                    className={"nodebar"}
                  />
                </B>
              </StyledIcon>
            </Col>
            <Col md={3} xs={6}>
              <StyledIcon className="Java">
                <FontAwesomeIcon icon={faJava} />
                <IconText>Java / server</IconText>
                <B className="gradation_java">
                  Expertise :
                  <Rating
                    defaultValue={4.5}
                    precision={0.5}
                    size={"small"}
                    readOnly
                  />
                  <br />
                  Spring, SpringBoot, MSSQL
                  <ProgressBar
                    now={countOfProgess90}
                    label={`${90}%`}
                    className={"javabar"}
                  />
                </B>
              </StyledIcon>
            </Col>
            <Col md={3} xs={6}>
              <StyledIcon className="Bootstrap">
                <FontAwesomeIcon icon={faBootstrap} />
                <IconText>CSS-library</IconText>
                <B className="gradation_bootstrap">
                  Expertise :
                  <Rating name="read-only" value={5} size="small" readOnly />
                  <br />
                  ReactBootStrap, Ant-Degian, Maturial-UI, Tailwind-CSS
                  <ProgressBar
                    now={countOfProgess100}
                    label={`${100}%`}
                    className={"bootbar"}
                  />
                </B>
              </StyledIcon>
            </Col>
          </Row>
        </Container>
      </Skills>
    </StyledSkill>
  );
}

export default Skill;
