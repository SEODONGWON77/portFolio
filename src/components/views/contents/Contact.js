import React from "react";
import styled from "styled-components";

const StyledContact = styled.div`
  padding: 1rem;
  border: 1px solid red;
  background-color: lightgray;
  min-height: 700px;
  color: white;
`;
const Title = styled.div`
  font-family: ONEMobilePOP;
  text-align: center;
  padding-top: 10px;
  font-size: 3rem;
`;
function Contact() {
  return (
    <StyledContact id="contact">
      <Title>Contact</Title>
    </StyledContact>
  );
}

export default Contact;
