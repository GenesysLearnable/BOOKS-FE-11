import React from 'react';
import Hero from '../Components/Hero/Hero.js';
import Nav from '../Components/ProfilePageComponents/Nav.jsx';
import styled from 'styled-components';

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
      <Hero />
    </Container>
  );
};

export default Homepage;
