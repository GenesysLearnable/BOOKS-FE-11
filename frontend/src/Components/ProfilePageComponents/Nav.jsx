import styled from 'styled-components';
import Aside from './Aside';
import LogoContainer from './LogoContainer';

const SideNav = styled.aside`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  flex-basis: 18%;
  font-size: 1.4rem;
  padding: 2rem 2.4rem;
  gap: 2rem;
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
