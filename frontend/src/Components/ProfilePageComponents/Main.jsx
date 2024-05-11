import styled from 'styled-components';
import { LuAlarmClock } from 'react-icons/lu';
import { HiOutlinePencil } from 'react-icons/hi';
import { HiDotsVertical } from 'react-icons/hi';

import profileImg from '../../Images/profile.png';
import book1 from '../../Images/book1.png';
import book2 from '../../Images/book2.png';
import book3 from '../../Images/book3.png';

const SectionContainer = styled.div`
  flex-grow: 1;
  padding-top: 2rem;
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;

const Section = styled.section`
  font-size: 1.4rem;
  display: flex;
  justify-content: flex-start;
  align-items: stretch;
  gap: 2rem;
`;

const BioDataCon = styled.div`
  flex-basis: 40rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  box-shadow: 0 0 0.3rem rgba(0, 0, 0, 0.3);
  border-top-right-radius: 1rem;
  border-top-left-radius: 1rem;
  padding: ${(props) => props.variance && '2rem'};
`;
const ImgContainer = styled.div`
  width: 100%;
  height: 15rem;
  border-top-right-radius: 1rem;
  border-top-left-radius: 1rem;
  background: #f3f1f1;
`;
const Img = styled.img`
  border-top-right-radius: 1rem;
  border-top-left-radius: 1rem;
  height: 100%;
  width: 100%;
`;
const BioData = styled.div`
  padding-left: 1rem;
  padding-bottom: 2rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 3rem;
`;
const BioDataDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
`;

const CourseDetails = styled.div`
  display: flex;
  align-items: center;
  gap: 3rem;
`;

const BtnContainer = styled.div`
  display: flex;
  gap: 2rem;
`;

const Button = styled.button`
  border: ${(props) => (props.variance ? 'none' : '.1rem solid #003B00')};
  background: ${(props) => (props.variance ? 'transparent' : '#E6F0E6')};
  border-bottom: ${(props) => props.farRight && '.1rem solid #549D54'};
  padding: 0.5rem 2rem;
  padding: ${(props) => props.farRight && '.3rem 0'};
  color: ${(props) => (props.farRight ? '#549D54' : '#003B00')};

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  cursor: pointer;
`;

const EduDataCon = styled.div`
  box-shadow: 0 0 0.3rem rgba(0, 0, 0, 0.3);
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 1rem 2rem 0 2rem;
  gap: 2rem;
  margin-right: 2rem;
`;

const Title = styled.div`
  font-size: 1.2rem;
  color: #5c6066;
`;

const EduData = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 4rem;
  padding: 2rem 0;
`;

const BioInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const Contacts = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Contact = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 3rem;
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

const HighlightsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;

const Highlights = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 3rem;
`;

const Details = styled.div`
  max-width: 60rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
`;

const ImgBook = styled.img`
  max-width: 8%;
  height: 7rem;
`;

const BookDetail = styled.div`
  max-width: 80%;
`;

function Main() {
  return (
    <SectionContainer>
      <Section>
        <BioDataCon>
          <ImgContainer>
            <Img src={profileImg} alt="image1" />
          </ImgContainer>

          <BioData>
            <BioDataDetails>
              <p>
                <strong>Cameron Williamson</strong>
              </p>
              <CourseDetails>
                <p>Microbiology</p>
                <p>200 level</p>
              </CourseDetails>
            </BioDataDetails>
            <BtnContainer>
              <Button>
                <span>Set Remainder</span> <LuAlarmClock />
              </Button>
              <Button variance="true">
                <span>Edit Profile </span>
                <HiOutlinePencil />
              </Button>
            </BtnContainer>
          </BioData>
        </BioDataCon>
        <EduDataCon>
          <Title>Education History</Title>
          <div>
            <EduData>
              <img src="#" alt="logo" />
              <BioDataDetails>
                <p>
                  <strong>Harvard University</strong>
                </p>
                <p>Microbiology</p>
                <p>2017 - present</p>
              </BioDataDetails>
            </EduData>

            <EduData>
              <img src="#" alt="logo" />
              <BioDataDetails>
                <p>
                  <strong>Massachusetts Institute of Technology</strong>
                </p>
                <p>Computer Science</p>
                <p>2013 - 2017</p>
              </BioDataDetails>
            </EduData>
          </div>
        </EduDataCon>
      </Section>

      <Section>
        <BioDataCon variance="true">
          <Title>About</Title>
          <BioInfo>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Reprehenderit, alias. Vel earum, magnam qui laboriosam, sed cum ex
              sapiente quia, ab veritatis
            </p>
            <Contacts>
              <Contact>
                <span>Email :</span> <span>Williams@gmail.com</span>
              </Contact>
              <Contact>
                <span>Phone Number :</span>
                <span> +234 7033881144</span>
              </Contact>
            </Contacts>
          </BioInfo>
        </BioDataCon>
        <EduDataCon>
          <Heading>
            <Title>Highlights</Title>
            <BtnCon>
              <Button farRight="true" variance="true">
                view all Highlights
              </Button>
            </BtnCon>
          </Heading>
          <HighlightsContainer>
            <Highlights>
              <Details>
                <ImgBook src={book1} alt="book-cover" />
                <BookDetail>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Ipsum quo eos reiciendis nobis expedita natus aut quae ullam
                  aliquam omnis ad, error, sed similique perferendis temporibus
                  cumque dolore?
                </BookDetail>
              </Details>
              <div>
                <HiDotsVertical />
              </div>
            </Highlights>
            <Highlights>
              <Details>
                <ImgBook src={book3} alt="book-cover" />
                <BookDetail>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Ipsum quo eos reiciendis nobis expedita natus aut quae ullam
                  aliquam omnis ad, error, sed similique perferendis temporibus
                  cumque dolore?
                </BookDetail>
              </Details>
              <div>
                <HiDotsVertical />
              </div>
            </Highlights>
            <Highlights>
              <Details>
                <ImgBook src={book2} alt="book-cover" />
                <BookDetail>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Ipsum quo eos reiciendis nobis expedita natus aut quae ullam
                  aliquam omnis ad, error, sed similique perferendis temporibus
                  cumque dolore?
                </BookDetail>
              </Details>
              <div>
                <HiDotsVertical />
              </div>
            </Highlights>
          </HighlightsContainer>
        </EduDataCon>
      </Section>
      {/* <Section>
        <div>
          <Heading>
            <Title>currently reading</Title>
            <BtnCon>
              <Button farRight="true" variance="true">
                view all
              </Button>
            </BtnCon>
          </Heading>
        </div>
        <div></div>
      </Section> */}
      <Section></Section>
    </SectionContainer>
  );
}

export default Main;
