import { HiOutlinePencilAlt } from 'react-icons/hi';
import { HiOutlineBookOpen } from 'react-icons/hi2';
import styled from 'styled-components';

const MainSectionNav = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-basis: 25rem;
  gap: 0.6rem;
`;

const MainSectionNavHeading = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 0.5rem;
  padding: 2rem 5rem;
  font-size: 1.2rem;
  .icon {
    width: 2.4rem;
    height: 2.4rem;
  }
  span {
    color: #004d00;
  }
  .active {
    color: #fff;
  }

  background: ${(props) => (props.className ? '#004d00' : '#F7FBF7')};
  color: ${(props) => (props.className ? '#fff' : '#004d00')};
`;
const Contents = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  gap: 0.8rem;
`;
const NavSectionTitle = styled.p`
  color: #585f6a;
  padding: 0.4rem;
  font-size: 1.2rem;
  font-family: DM Sans;
  font-weight: bold;
`;

const ChapterDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 0.3rem;
  padding: 1rem;
  background: ${(props) => (props.className ? '#004d00' : '#F7FBF7')};

  width: 100%;
`;
const Chapter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 13rem;
  padding: 1rem 0.2rem;
`;
const ChapterNum = styled.div`
  color: ${(props) => (props.className ? '#fff' : '#36373D')};
  font-size: 1.6rem;
  font-weight: bold;
  font-family: DM Sans;
`;
const PageRange = styled.div`
  padding: 0.4rem 1rem;
  border: 0.1rem solid #cdced2;
  color: ${(props) => (props.className ? '#f3f4f7' : '#8C9199')};
  border-radius: 0.4rem;
`;
const P = styled.p`
  color: #cdced2;
  font-size: 1.4rem;
  color: ${(props) => (props.className ? '#CDCED2' : '#585F6A')};
`;

function BookDetailsNav() {
  function trunc(name, maxLength) {
    if (name.length <= maxLength) {
      return name;
    }
    return name.substring(0, maxLength - 3) + '...';
  }

  return (
    <MainSectionNav>
      <MainSectionNavHeading>
        <Title>
          <HiOutlinePencilAlt className="icon" />
          <span>Notes</span>
        </Title>
        <Title className="active">
          <HiOutlineBookOpen className="icon" />
          <span className="active">Chapter</span>
        </Title>
      </MainSectionNavHeading>
      <Contents>
        <NavSectionTitle>Table of content</NavSectionTitle>
        <ChapterDetails className="active">
          <Chapter>
            <ChapterNum className="active">Chapter 1</ChapterNum>
            <PageRange className="active">1 - 20</PageRange>
          </Chapter>
          <P className="active">
            {trunc('Virology is the scientific discipline concerned', 40)}
          </P>
        </ChapterDetails>
        <ChapterDetails>
          <Chapter>
            <ChapterNum>Chapter 1</ChapterNum>
            <PageRange>1 - 20</PageRange>
          </Chapter>
          <P>{trunc('Virology is the scientific discipline concerned', 40)}</P>
        </ChapterDetails>
        <ChapterDetails>
          <Chapter>
            <ChapterNum>Chapter 1</ChapterNum>
            <PageRange>1 - 20</PageRange>
          </Chapter>
          <P>{trunc('Virology is the scientific discipline concerned', 40)}</P>
        </ChapterDetails>
        <ChapterDetails>
          <Chapter>
            <ChapterNum>Chapter 1</ChapterNum>
            <PageRange>1 - 20</PageRange>
          </Chapter>
          <P>{trunc('Virology is the scientific discipline concerned', 40)}</P>
        </ChapterDetails>
        <ChapterDetails>
          <Chapter>
            <ChapterNum>Chapter 1</ChapterNum>
            <PageRange>1 - 20</PageRange>
          </Chapter>
          <P>{trunc('Virology is the scientific discipline concerned', 40)}</P>
        </ChapterDetails>
        <ChapterDetails>
          <Chapter>
            <ChapterNum>Chapter 1</ChapterNum>
            <PageRange>1 - 20</PageRange>
          </Chapter>
          <P>{trunc('Virology is the scientific discipline concerned', 40)}</P>
        </ChapterDetails>
      </Contents>
    </MainSectionNav>
  );
}

export default BookDetailsNav;
