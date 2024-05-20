import styled from "styled-components";
import Aside from "./Aside";
import LogoContainer from "./LogoContainer";

const SideNav = styled.aside`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 14vw;
  flex-grow: 0;
  flex-shrink: 0;
  font-size: 1.4rem;
  padding: 2rem 2.4rem;
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
