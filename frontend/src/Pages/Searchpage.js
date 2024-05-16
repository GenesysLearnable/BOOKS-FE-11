import React from 'react'
import Nav from '../Components/ProfilePageComponents/Nav.jsx';
import styled from 'styled-components';
import SearchResult from '../Components/SearchResult/SearchResult.js';



const Container = styled.div`
  max-width: 150rem;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  /* gap: 1rem; */
  color: #495057;
`;

function Searchpage() {
  return (
    <div>

        
      <Container>
      <Nav />
    <SearchResult/>
    {/* <Category/> */}
    </Container>
    </div>
  )
}

export default Searchpage
