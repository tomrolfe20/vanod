import React from "react";
import styled from "styled-components";
import background from "./images/vandriving.png";

const Hero = () => {
  return (
    <>
      <Container>
        <HeroItems>
          <Header>Van OD</Header>
        </HeroItems>
        <HeroItems>
          <CatchLine>The taxi for things</CatchLine>
        </HeroItems>
        <HeroItems>
          <BookButton>Book us</BookButton>
        </HeroItems>
      </Container>
    </>
  );
};

export default Hero;

const Container = styled.div`
  width: 100%;
  min-height: calc(100vh - 60px);
  background-position: center;
  background-size: cover;
  background-image: url(${background});
  display: flex;
  align-items: left;
  justify-content: center;
  flex-direction: column;
`;

const HeroItems = styled.div`
  padding-left: 30px;
`;

const Header = styled.div`
  font-size: clamp(2.5rem, 10vw, 5rem);
  letter-spacing: 3px;
  color: #E0FBFC;
`;
const CatchLine = styled.div`
  font-size: clamp(1.5rem, 5vw, 2.5rem);
  color: #E0FBFC;
  margin-bottom: 22px;
`;
const BookButton = styled.button`
  font-size: 1.4rem;
  padding: 5px;
  border: none;
  background: #C2DFE3;
  color: #253237;
  transition: 0.2s ease-out;
  width: 100px;
`;
