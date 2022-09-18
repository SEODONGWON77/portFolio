import React from "react";
import styled from "styled-components";
import { GoMarkGithub, GoMail, GoDeviceMobile } from "react-icons/go";
import { Link } from "react-router-dom";
const StyledContact = styled.div`
  padding: 1rem;
  background-color: lightgray;
  color: white;
  padding-top: 30px;
`;
const Title = styled.div`
  font-family: ONEMobilePOP;
  text-align: center;
  padding-bottom: 50px;
  font-size: 3rem;
`;
const Content = styled.div`
  text-align: left;
  padding-left: 80px;
`;
const StyleSpan = styled.span`
  padding-top: 10px;
  :hover {
    color: gray;
  }
`;

function Contact() {
  return (
    <StyledContact id="contact">
      <br/>
      <Title>Contact</Title>
      <Content>
        <p>Seo Dongwon</p>
        <GoMail style={{ fontSize: "20px" }} />
        <StyleSpan>
          <a
            style={{ textDecoration: "none", color: "white" }}
            href="mailto:tksska77712@gmail.com"
          >
            {" "}
            tksska77712@gmail.com
          </a>
        </StyleSpan>
        <br />
        <GoMarkGithub style={{ fontSize: "20px" }} />
        <StyleSpan
          onClick={() => {
            window.open("https://github.com/SEODONGWON77", "_blank");
          }}
        >
          <Link style={{ textDecoration: "none", color: "white"}}>
            {" "}
            Github
          </Link>
        </StyleSpan>
        <br />
        <GoDeviceMobile style={{ fontSize: "20px" }} />
        <span> 010-5203-6759</span>
        <p>Copyright 2021 SeoDongwon All Rights Reserved.</p>
      </Content>
    </StyledContact>
  );
}

export default Contact;
