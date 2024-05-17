import styled from 'styled-components';

import Nav from '../Components/ProfilePageComponents/Nav';
import Main from '../Components/ProfilePageComponents/Main';

const Container = styled.div`
  max-width: 150rem;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  color: #495057;
`;
function ProfilePage() {
  return (
    <Container>
      <Nav />
      <Main />
    </Container>
  );
}

export default ProfilePage;
