import styled from "styled-components";
// import { NavLink } from 'react-router-dom';

import { PiBookOpenTextDuotone } from "react-icons/pi";
import { RxHome } from "react-icons/rx";
import { MdOutlineLocalLibrary } from "react-icons/md";
import { HiOutlineUserCircle } from "react-icons/hi";
import "./Aside.css";

import { HiOutlineLightningBolt } from "react-icons/hi";
import { HiOutlineQuestionMarkCircle } from "react-icons/hi";
import { HiOutlineCog } from "react-icons/hi";
import { HiChevronDown } from "react-icons/hi";
import { HiOutlineUserGroup } from "react-icons/hi";
import { useNavigate } from "react-router-dom";

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
  gap: 6rem;
`;

const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 1.9rem;
  list-style: none;
`;
const Li = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;
  cursor: pointer;
`;

const Span = styled.span`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const SpanSm = styled.span`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
  font-size: 1.8rem;
`;

function Aside() {
  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  };
  const navigate = useNavigate();

  const navigateToPage1 = () => {
    navigate("/profile");
  };
  const navigateToPage2 = () => {
    navigate("/home");
  };
  return (
    <AsideContainer>
      <NavUl>
        <Ul>
          <Li
            style={{
              color: "rgba(54, 55, 61, 1)",
              border: "none",
              backgroundColor: "white",
              fontWeight: "400",
              lineHeight: "3.2rem",
            }}
          >
            <Span>
              <SpanSm>
                <RxHome />
                <span onClick={navigateToPage2}>Home</span>
              </SpanSm>
            </Span>
          </Li>
          <Li>
            <button
              onClick={() => scrollToSection("section1")}
              style={{
                color: "rgba(54, 55, 61, 1)",
                border: "none",
                fontSize: "1.7rem",
                backgroundColor: "white",
                fontWeight: "400",
                lineHeight: "3.2rem",
              }}
            >
              <Span>
                <SpanSm>
                  <PiBookOpenTextDuotone />
                  <span>Categories</span>
                </SpanSm>

                {/* <HiChevronDown /> */}
              </Span>
            </button>
          </Li>
          <Li>
            <button
              onClick={() => scrollToSection("section2")}
              style={{
                color: "rgba(54, 55, 61, 1)",
                border: "none",
                fontSize: "1.7rem",
                backgroundColor: "white",
                fontWeight: "400",
                lineHeight: "3.2rem",
              }}
            >
              <Span>
                <SpanSm>
                  <MdOutlineLocalLibrary />
                  <span>Library</span>
                </SpanSm>
              </Span>
            </button>
          </Li>
          <Li>
            <button
              onClick={() => scrollToSection("section3")}
              style={{
                color: "rgba(54, 55, 61, 1)",
                border: "none",
                fontSize: "1.7rem",
                backgroundColor: "white",
                fontWeight: "400",
                lineHeight: "3.2rem",
              }}
            >
              <Span>
                <SpanSm>
                  <HiOutlineUserGroup />
                  <span>Community</span>
                </SpanSm>
              </Span>
            </button>
          </Li>
        </Ul>

        <Ul>
          <Li
            style={{
              color: "rgba(54, 55, 61, 1)",
              border: "none",
              fontSize: "1.7rem",
              backgroundColor: "white",
              fontWeight: "400",
              lineHeight: "3.2rem",
            }}
          >
            {/* <NavLink to="#"> */}
            <Span>
              <SpanSm>
                <HiOutlineCog />
                <span>Settings</span>
              </SpanSm>
            </Span>
            {/* </NavLink> */}
          </Li>

          <Li
            style={{
              color: "rgba(54, 55, 61, 1)",
              border: "none",
              fontSize: "1.7rem",
              backgroundColor: "white",
              fontWeight: "400",
              lineHeight: "3.2rem",
            }}
          >
            {/* <NavLink to="#"> */}
            <Span>
              <SpanSm>
                <HiOutlineLightningBolt />
                <span>AI Integration</span>
              </SpanSm>
            </Span>
            {/* </NavLink> */}
          </Li>

          <Li
            style={{
              color: "rgba(54, 55, 61, 1)",
              border: "none",
              fontSize: "1.7rem",
              backgroundColor: "white",
              fontWeight: "400",
              lineHeight: "3.2rem",
            }}
          >
            {/* <NavLink to="#"> */}
            <Span>
              <SpanSm>
                <HiOutlineQuestionMarkCircle />
                <span>Help</span>
              </SpanSm>
            </Span>
            {/* </NavLink> */}
          </Li>
        </Ul>
      </NavUl>
      <div>
        <Ul>
          <Li
            style={{
              color: "rgba(54, 55, 61, 1)",
              border: "none",
              fontSize: "1.7rem",
              backgroundColor: "white",
              fontWeight: "400",
              lineHeight: "3.2rem",
            }}
          >
            {/* <NavLink to=""> */}
            <Span>
              <SpanSm>
                <HiOutlineUserCircle />
                <span onClick={navigateToPage1}>Account</span>
              </SpanSm>
            </Span>
            {/* </NavLink> */}
          </Li>
        </Ul>
      </div>
    </AsideContainer>
  );
}

export default Aside;
