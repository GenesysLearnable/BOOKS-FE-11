import styled from 'styled-components';

import Nav from '../Components/ProfilePageComponents/Nav';
import BookDetailHeroSection from '../Components/bookDetails/BookDetailHeroSection';
import BookDetailsNav from '../Components/bookDetails/BookDetailsNav';
import BookDetailMain from '../Components/bookDetails/BookDetailMain';

const MainContainer = styled.div`
  max-width: 150rem;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  color: #495057;
`;

const Main = styled.div`
  flex-basis: 80%;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
`;

function BookDetails() {
  return (
    <MainContainer>
      <Nav />
      <Main>
        <BookDetailHeroSection />
        <BookDetailsNav />
        <BookDetailMain />
      </Main>
    </MainContainer>
  );
}

export default BookDetails;
