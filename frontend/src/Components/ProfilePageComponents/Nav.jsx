import styled from "styled-components";
import Aside from "./Aside";
import LogoContainer from "./LogoContainer";

const SideNav = styled.aside`
  flex-basis: 20%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 3rem;
  font-size: 1.2rem;
  padding: 1rem 1.2rem;
  min-height: 100vh;
`;

function Nav() {
  return (
    <SideNav>
      <LogoContainer />
      <Aside />
    </SideNav>
  );
}

export default Nav;
