import React from "react";
import Hero from "../Components/Hero/Hero.js";
import Nav from "../Components/ProfilePageComponents/Nav.jsx";
import styled from "styled-components";
import ContinueReading from "../Components/ContinueReading/ContinueReading.js";
import Library from "../Components/Library/Library.js";
import Category from "../Components/Category/Category.js";
import "../Components/Hero/Hero.css";
import Community from "../Components/Community/Community1.jsx";

const Container = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  color: #495057;
`;

const Main = styled.div`
  flex-grow: 0;
  flex-shrink: 0;
  width: 85vw;

  border-left: 0.05rem solid #ced4da;
`;

const Section = styled.div`
  padding-left: 10px;
`;

const Homepage = () => {
  return (
    <>
      <Container>
        <Nav />
        <Main>
          <Hero />
          <Section>
            <div className="Choose-courses">
              <button className="My-courses-All">All</button>
              <button className="My-courses">Engineering</button>
              <button className="My-courses">Medicals</button>
              <button className="My-courses">Computer science</button>
              <button className="My-courses">Nurse</button>
            </div>

            <ContinueReading />
            <Category />
            <Community />
            <Library />
          </Section>
        </Main>
      </Container>
    </>
  );
};

export default Homepage;
