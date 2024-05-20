import React from "react";
import Hero from "../Components/Hero/Hero.js";
import Nav from "../Components/ProfilePageComponents/Nav.jsx";
import styled from "styled-components";
import ContinueReading from "../Components/ContinueReading/ContinueReading.js";
import Community from "../Components/Community/Community.js";
import Library from "../Components/Library/Library.js";
import Category from "../Components/Category/Category.js";
import "../Components/Hero/Hero.css";
import MySlider from "../Components/slider/Slider.js";

const Container = styled.div`
  max-width: 150rem;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  /* gap: 1rem; */
  color: #495057;
`;

const Homepage = () => {
  return (
    <Container>
      <Nav />
      <div>
        <Hero />

        <div className="Choose-courses">
          <button className="My-courses-All">All</button>
          <button className="My-courses">Engineering</button>
          <button className="My-courses">Medicals</button>
          <button className="My-courses">Computer science</button>
          <button className="My-courses">Nurse</button>
        </div>

        <div className="Book-details">
          <MySlider />
          {/* <ContinueReading /> */}
          <Category />
          <Community />
          <Library />
        </div>
      </div>
    </Container>
  );
};

export default Homepage;
