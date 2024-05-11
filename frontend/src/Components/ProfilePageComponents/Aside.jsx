import styled from 'styled-components';
// import { NavLink } from 'react-router-dom';

import { PiBookOpenTextDuotone } from 'react-icons/pi';
import { RxHome } from 'react-icons/rx';
import { MdOutlineLocalLibrary } from 'react-icons/md';
import { HiOutlineUserCircle } from 'react-icons/hi';

import { HiOutlineLightningBolt } from 'react-icons/hi';
import { HiOutlineQuestionMarkCircle } from 'react-icons/hi';
import { HiOutlineCog } from 'react-icons/hi';
import { HiChevronDown } from 'react-icons/hi';
import { HiOutlineUserGroup } from 'react-icons/hi';

const AsideContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  gap: 10rem;
`;

const NavUl = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 6rem;
`;

const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 1.4rem;
  list-style: none;
`;
const Li = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  cursor: pointer;
`;

const Span = styled.span`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 3rem;
`;

const SpanSm = styled.span`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
`;
function Aside() {
  return (
    <AsideContainer>
      <NavUl>
        <Ul>
          <Li>
            {/* <NavLink to="#"> */}
            <RxHome />
            <span>Home</span>
            {/* </NavLink> */}
          </Li>
          <Li>
            {/* <NavLink to="#"> */}
            <Span>
              <SpanSm>
                <PiBookOpenTextDuotone />
                <span>Categories</span>
              </SpanSm>

              <HiChevronDown />
            </Span>
            {/* </NavLink> */}
          </Li>
          <Li>
            {/* <NavLink to="#"> */}
            <MdOutlineLocalLibrary />
            <span>Library</span>
            {/* </NavLink> */}
          </Li>
          <Li>
            {/* <NavLink to="#"> */}
            <HiOutlineUserGroup />
            <span>Community</span>
            {/* </NavLink> */}
          </Li>
        </Ul>

        <Ul>
          <Li>
            {/* <NavLink to="#"> */}
            <HiOutlineCog />
            <span>Settings</span>
            {/* </NavLink> */}
          </Li>
          <Li>
            {/* <NavLink to="#"> */}
            <HiOutlineLightningBolt />
            <span>AI Integration</span>
            {/* </NavLink> */}
          </Li>
          <Li>
            {/* <NavLink to="#"> */}
            <HiOutlineQuestionMarkCircle />
            <span>Help</span>
            {/* </NavLink> */}
          </Li>
        </Ul>
      </NavUl>
      <div>
        <Ul>
          <Li>
            {/* <NavLink to=""> */}
            <HiOutlineUserCircle />
            <span>Account</span>
            {/* </NavLink> */}
          </Li>
        </Ul>
      </div>
    </AsideContainer>
  );
}

export default Aside;
