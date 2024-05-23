import styled from "styled-components";
import logo from "../../Images/logo.png";

const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  background-color: white;
`;

const Img = styled.img`
  width: 14.9rem;
  height: 4rem;
`;

function LogoContainer() {
  return (
    <Container>
      <Img src={logo} alt="logo" />
    </Container>
  );
}

export default LogoContainer;
