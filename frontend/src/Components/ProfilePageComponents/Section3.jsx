import styled from 'styled-components';
import Search from './Search';
import currentReading1 from '../../Images/bio2.jpg';
import currentReading2 from '../../Images/book2.png';
import currentReading3 from '../../Images/book1.png';
import currentReading4 from '../../Images/book3.png';

import { HiDotsVertical } from 'react-icons/hi';

const BioDataCon = styled.div`
  flex-basis: 50%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  box-shadow: 0 0 0.3rem rgba(0, 0, 0, 0.3);
  padding: 2rem;
`;

const Button = styled.button`
  border: ${(props) => (props.variance ? 'none' : '.1rem solid #003B00')};
  background: ${(props) => (props.variance ? 'transparent' : '#E6F0E6')};
  border-bottom: ${(props) => props.farRight && '.1rem solid #549D54'};
  padding: ${(props) => props.small && '0.2rem 1rem'};
  padding: ${(props) => props.farRight && '.3rem 0'};
  color: ${(props) => (props.farRight ? '#549D54' : '#003B00')};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  cursor: pointer;
`;

const Title = styled.div`
  font-size: 1.2rem;
  color: #5c6066;
`;

const Heading = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const BtnCon = styled.div`
  margin-left: auto;
`;

const BookInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
`;

const BooksDetails = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 2rem;
`;
const EduDataCon = styled.div`
  box-shadow: 0 0 0.3rem rgba(0, 0, 0, 0.3);
  flex-basis: 50%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 1rem 2rem 0 2rem;
  gap: 2rem;
  margin-right: 2rem;
`;
const ImgBook = styled.img`
  max-width: 8%;
  height: 6rem;
`;

const Detail = styled.div`
  min-width: 88%;
  font-size: 1.2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10rem;
`;

const Author = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 0.2rem;
`;

const PageLeft = styled.div`
  align-self: flex-end;
  display: flex;
  /* justify-content: flex-start; */
  align-items: center;
  gap: 5rem;
`;
const HighlightsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const Highlights = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 3rem;
  padding-right: 3rem;
`;

const BookDetail = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 2rem;
  max-width: 90%;
`;

const Date = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  color: #7c7979;
  font-size: 1rem;
`;

function Section3() {
  return (
    <>
      <BioDataCon>
        <Heading>
          <Title>Currently reading</Title>
          <BtnCon>
            <Button farRight="true" variance="true">
              View all
            </Button>
          </BtnCon>
        </Heading>
        <BookInfo>
          <Search />
          <BooksDetails>
            <ImgBook src={currentReading1} alt="current Reading Book" />
            <Detail>
              <Author>
                <span>
                  <strong>Biostatistics</strong>
                </span>
                <span>Jones Willy</span>
              </Author>
              <PageLeft>
                <span>
                  <strong>123</strong>/1246
                </span>
                <Button small="true">Continue reading</Button>
              </PageLeft>
            </Detail>
          </BooksDetails>
          <BooksDetails>
            <ImgBook src={currentReading3} alt="current Reading Book" />
            <Detail>
              <Author>
                <span>
                  <strong>English</strong>
                </span>
                <span>Bob Zee</span>
              </Author>
              <PageLeft>
                <span>
                  <strong>12</strong>/145
                </span>
                <Button small="true">Continue reading</Button>
              </PageLeft>
            </Detail>
          </BooksDetails>
          <BooksDetails>
            <ImgBook src={currentReading2} alt="current Reading Book" />
            <Detail>
              <Author>
                <span>
                  <strong>Physics</strong>
                </span>
                <span>Eze Ben</span>
              </Author>
              <PageLeft>
                <span>
                  <strong>13</strong>/124
                </span>
                <Button small="true">Continue reading</Button>
              </PageLeft>
            </Detail>
          </BooksDetails>
          <BooksDetails>
            <ImgBook src={currentReading4} alt="current Reading Book" />
            <Detail>
              <Author>
                <span>
                  <strong>Chemistry</strong>
                </span>
                <span>Phils Goodluck</span>
              </Author>
              <PageLeft>
                <span>
                  <strong>29</strong>/146
                </span>
                <Button small="true">Continue reading</Button>
              </PageLeft>
            </Detail>
          </BooksDetails>
        </BookInfo>
      </BioDataCon>
      <EduDataCon>
        <Heading>
          <Title>Highlights</Title>
          <BtnCon>
            <Button farRight="true" variance="true">
              View all Highlights
            </Button>
          </BtnCon>
        </Heading>
        <HighlightsContainer>
          <Highlights>
            <BookDetail>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum
                quo eos reiciendis nobis expedita natus aut quae ullam aliquam
                omnis ad, error, sed similique perferendis temporibus cumque
                dolore?
              </p>
              <Date>
                <span>12/10/2020</span>
                <span>09:06am</span>
              </Date>
            </BookDetail>

            <div>
              <HiDotsVertical />
            </div>
          </Highlights>
          <Highlights>
            <BookDetail>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum
                quo eos reiciendis nobis expedita natus aut quae ullam aliquam
                omnis ad, error, sed similique perferendis temporibus cumque
                dolore?
              </p>
              <Date>
                <span>12/10/2020</span>
                <span>09:06am</span>
              </Date>
            </BookDetail>

            <div>
              <HiDotsVertical />
            </div>
          </Highlights>
          <Highlights>
            <BookDetail>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum
                quo eos reiciendis nobis expedita natus aut quae ullam aliquam
                omnis ad, error, sed similique perferendis temporibus cumque
                dolore?
              </p>
              <Date>
                <span>12/10/2020</span>
                <span>09:06am</span>
              </Date>
            </BookDetail>

            <div>
              <HiDotsVertical />
            </div>
          </Highlights>
        </HighlightsContainer>
      </EduDataCon>
    </>
  );
}

export default Section3;
