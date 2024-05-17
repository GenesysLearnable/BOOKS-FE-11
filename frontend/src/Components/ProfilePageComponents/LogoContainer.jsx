import styled from 'styled-components';
import logo from '../../Images/logo.png';

const Container = styled.div`
  background: #f3f1f1;
  width: 80%;
  height: 3rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const Img = styled.img`
  width: 100%;
  height: 4rem;

  /* padding: 0.7rem 1.4rem; */
`;

function LogoContainer() {
  return (
    <Container>
      <Img src={logo} alt="logo" />
    </Container>
  );
}

export default LogoContainer;
