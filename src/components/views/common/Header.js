import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { IoIosMenu } from "react-icons/io";

const StyledHeaderDiv = styled.div`
  z-index: 5;
  font-family: ONEMobilePOP;
  color: hsla(0, 0%, 100%, 0.75);
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  @media screen and (max-width: 800px) {
    background-color: white;
    color: black;
  }
`;
const StyleRight = styled.div`
  float: left;
  justify-content: flex-start;
  height: 60px;
  line-height: 60px;
  /* padding-left: 30px; */
  font-size: 30px;
  @media screen and (max-width: 800px) {
    font-size: 30px;
    padding-left: 18px;
    padding-right: 26px;
  }
`;
const Styledleft = styled.div`
  justify-content: flex-end;
  display: flex;
  height: 60px;
  @media screen and (max-width: 800px) {
    flex-direction: column;
    justify-content: flex-start;
  }
`;

const StyledBox = styled.div`
  display: flex;
  @media screen and (max-width: 800px) {
    background-color: white;
    padding-top: 60px;
    flex-direction: column;
    align-items: flex-end;
    display: ${({ menu }) => {
      return menu === false ? "none" : "flex";
    }};
  }
`;
const StyledLink = styled.a`
  cursor: pointer;
  color: hsla(0, 0%, 100%, 0.75);
  align-items: flex-end;
  font-size: 18px;
  text-decoration: none;
  line-height: 60px;
  margin-right: 10px;
  padding-right: 10px;
  &:hover {
    color: #ff6600;
    text-decoration: none;
  }
`;

const StyledHambuger = styled.a`
  right: 0;
  display: flex;
  align-items: center;
  font-size: 40px;
  color: green;
  position: absolute;
  margin-right: 20px;
  height: 60px;
  line-height: 60px;
  &:hover {
    color: lightsalmon;
  }
  @media screen and (min-width: 800px) {
    display: none;
  }
`;
const Scroll0 = {
  webkitTextStroke: "0.8px white",
  color: "#81736B",
  backgroundColor: "",
};
const Scroll1 = {
  backgroundColor: "white",
  color: "#81736B",
};

function Header() {
  const [menu, setmenu] = useState(false);

  const [scrollPosition, setScrollPosition] = useState(0);
  const updateScroll = () => {
    setScrollPosition(window.scrollY || document.documentElement.scrollTop);
  };
  useEffect(() => {
    window.addEventListener("scroll", updateScroll);
  }, [scrollPosition]);

  function handleScroll() {
    window.scroll({
      top: document.body.offsetHeight,
      left: 0,
      behavior: "smooth",
    });
  }

  return (
    <StyledHeaderDiv style={scrollPosition < 50 ? Scroll0 : Scroll1}>
      <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
        <StyleRight>PortFolio</StyleRight>
        <Styledleft>
          <StyledBox menu={menu}>
            <StyledLink
              href="#home"
              style={scrollPosition < 50 ? Scroll0 : Scroll1}
            >
              HOME
            </StyledLink>
            <StyledLink
              href="#about"
              style={scrollPosition < 50 ? Scroll0 : Scroll1}
            >
              ABOUT
            </StyledLink>
            <StyledLink
              href="#skill"
              style={scrollPosition < 50 ? Scroll0 : Scroll1}
            >
              SKILL
            </StyledLink>
            <StyledLink
              href="#project"
              style={scrollPosition < 50 ? Scroll0 : Scroll1}
            >
              PROJECT
            </StyledLink>
            <StyledLink
              onClick={handleScroll}
              style={scrollPosition < 50 ? Scroll0 : Scroll1}
            >
              CONTACT
            </StyledLink>
          </StyledBox>
          <StyledHambuger
            onClick={() => {
              setmenu(!menu);
            }}
          >
            <IoIosMenu />
          </StyledHambuger>
        </Styledleft>
      </div>
    </StyledHeaderDiv>
  );
}
export default Header;
