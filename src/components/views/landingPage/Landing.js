import React from "react";
import styled from "styled-components";
import MainImage from "../contents/MainImage";
import About from "../contents/About";
import Skill from "../contents/Skill";
import Project from "../contents/Project";
import Contact from "../contents/Contact";

const StyledLandingDiv = styled.div`
  margin: auto;
  &,
  & * {
    box-sizing: border-box;
  }
`;

function Landing() {
  return (
    <StyledLandingDiv>
      <MainImage />
      <About />
      <Skill />    
      <Project />
      <Contact />
    </StyledLandingDiv>
  );
}

export default Landing;
