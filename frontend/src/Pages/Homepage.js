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

const Homepage = () => {
  return (
    <>
      <Container>
        <Nav />
        <div style={{ flexGrow: "0", flexShrink: "0", width: "85vw" }}>
          <Hero />

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
        </div>
      </Container>
    </>
  );
};

export default Homepage;
