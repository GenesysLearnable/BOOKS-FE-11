import styled from 'styled-components';

const Container = styled.div`
  background: #f3f1f1;
  width: 70%;
  height: 3rem;
  margin: 1rem auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Img = styled.img`
  width: 80%;
  height: 2rem;

  /* padding: 0.7rem 1.4rem; */
`;

function LogoContainer() {
  return (
    <Container>
      <Img src="logo.png" alt="logo" />
    </Container>
  );
}

export default LogoContainer;
