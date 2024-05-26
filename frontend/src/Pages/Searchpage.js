import React from 'react';
import Nav from '../Components/ProfilePageComponents/Nav.jsx';
import styled from 'styled-components';
import SearchResult from '../Components/SearchResult/SearchResult.js';

const Container = styled.div`
  max-width: 150rem;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  color: #495057;
`;

function Searchpage() {
  return (
    <Container>
      <Nav />
      <SearchResult />
    </Container>
  );
}

export default Searchpage;
