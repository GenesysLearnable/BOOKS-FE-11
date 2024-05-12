import styled from 'styled-components';

import { LuAlarmClock } from 'react-icons/lu';
import { HiOutlinePencil } from 'react-icons/hi';
import profileImg from '../../Images/profile.png';

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
  padding: 0.5rem 2rem;
  color: #003b00;
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

function Section1() {
  return (
    <>
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
    </>
  );
}

export default Section1;
