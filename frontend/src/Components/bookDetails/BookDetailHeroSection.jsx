import styled from 'styled-components';
import { HiOutlineSquare3Stack3D } from 'react-icons/hi2';
import { HiOutlineGlobeAlt } from 'react-icons/hi2';
import { HiOutlinePlay } from 'react-icons/hi';
import { HiOutlineBookmark } from 'react-icons/hi2';
import { CiHeadphones } from 'react-icons/ci';
import Book2 from '../../Images/book2.png';
import { useTextBook } from '../context/CurrentBookContext';

const HeroSection = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 2rem;
  background: #151515;
  padding: 2rem;
`;

const BookInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  gap: 6rem;
`;
const ImgContainer = styled.div`
  width: 22rem;
  height: 28rem;
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
`;

const TitleSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  gap: 1rem;
  font-family: EB Garamond;
  color: #fff;
`;

const BookTitle = styled.h2`
  font-size: 2.4rem;
`;
const Author = styled.p`
  font-size: 1.6rem;
  color: #e5e6e9;
`;

const NavUl = styled.ul`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;

  font-size: 1.2rem;
  color: #fff;
`;
const NavLi = styled.li`
  width: 16.5rem;
  padding: 1rem 2rem;
  font-weight: 400;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 1rem;
  color: #fff;
  cursor: pointer;
  .icon {
    width: 1.8rem;
    height: 1.8rem;
  }
`;
const NavLiSpan = styled.div`
  color: #fff;
`;
function BookDetailHeroSection() {
  const { currentText } = useTextBook();
  const { image, author, title } = currentText;
  function trunc(name, maxLength) {
    if (name.length <= maxLength) {
      return name;
    }
    return name.substring(0, maxLength - 3) + '...';
  }

  return (
    <HeroSection>
      <ImgContainer>
        <Img src={image ? image : Book2} alt="current book cover" />
      </ImgContainer>
      <BookInfo>
        <TitleSection>
          <BookTitle>
            {title
              ? title
              : trunc(' Principle of Lehninger Principles of Biochemistry', 50)}
          </BookTitle>
          <Author>
            {author ? author : 'David L. Nelson and Michael M. Cox'}
          </Author>
        </TitleSection>

        <NavUl>
          <NavLi>
            <HiOutlineSquare3Stack3D className="icon" />
            <NavLiSpan>1,340 pages</NavLiSpan>
          </NavLi>
          <NavLi>
            <HiOutlineGlobeAlt className="icon" />
            <NavLiSpan>English</NavLiSpan>
          </NavLi>
          <NavLi>
            <CiHeadphones className="icon" />
            <NavLiSpan>32h 41min</NavLiSpan>
          </NavLi>
          <NavLi>
            <HiOutlinePlay className="icon" />
          </NavLi>
          <NavLi>
            <HiOutlineBookmark className="icon" />
          </NavLi>
        </NavUl>
      </BookInfo>
    </HeroSection>
  );
}

export default BookDetailHeroSection;
