import { useState } from 'react';
import { HiOutlineUserCircle, HiPlusCircle } from 'react-icons/hi';

import styled from 'styled-components';

const Form = styled.form`
  max-width: 50rem;
  margin: 6rem auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background: #f3efef;
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  padding: 1.5rem;
`;
const Heading = styled.label`
  font-family: EB Garamond;
  font-size: 1.2rem;
  font-weight: 600;
  color: #585f6a;
`;

const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
`;

const HiOutlineUserCircled = styled(HiOutlineUserCircle)`
  width: 2.6rem;
  height: 2.6rem;
`;

const P = styled.p`
  color: #585f6a;
  font-family: DM Sans;
  font-size: 1.2rem;
`;

const BioSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  background-color: #ffffff;
  padding: 1.4rem 1.2rem;
`;

const EduSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background: #ffffff;
  padding: 1.4rem 1.2rem;
`;
const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
`;

const Inputs = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Input = styled.input`
  padding: 0.8rem 1.6rem;
  outline: none;
  font-size: 1.4rem;
  border-radius: 0.4rem;
  border: 0.1rem solid #abadb5;
  &.focus {
    border-color: #003b00;
    box-shadow: 0 0 0.8rem rgba(47, 109, 47, 0.4);
  }
`;

const Label = styled.label`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 1rem;
  padding: 1rem 0;
`;

const Button = styled.button`
  width: 100%;
  padding: 0.5rem;
  border: 0.1rem solid #003b00;
  color: #003b00;
  background: #e6f0e6;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;
  border-radius: 0.4rem;
  cursor: pointer;
`;

const HiPlusCircled = styled(HiPlusCircle)`
  width: 2.4rem;
  height: 2.4rem;
  color: #003b00;
`;
const BtnContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 1.5rem;
`;

const Btn = styled.button`
  padding: 0.2rem 0.5rem;
  background: ${(props) => (props.active ? '#004D00' : 'transparent')};
  color: ${(props) => (props.active ? '#fff' : '#8C9199')};
  border: ${(props) => (props.active ? '#003B00' : 'none')};
  padding: 1rem 1.4rem;
  border-radius: 0.4rem;
  cursor: pointer;
`;

const Span = styled.span`
  color: #003b00;
  font-size: 1.2rem;
  font-weight: 600;
`;

function ProfileForm() {
  const [profileFormData, setProfileFormData] = useState({
    fullName: '',
    department: '',
    level: '',
    school: '',
    yearStarted: '',
    yearFinish: '',
    isChecked: false,
  });

  const [error, setError] = useState('');

  function handleInputChange(e) {
    const { name, value } = e.target;
    setProfileFormData((prev) => ({ ...prev, [name]: value }));
  }

  const validate = () => {
    const newError = {};
    if (!FormData.fullName) newError.fullName = 'Full name is required';
    if (!FormData.department) newError.department = 'Department is required';
    if (!FormData.level) newError.level = 'Level is required';
    if (!FormData.yearStarted)
      newError.yearStarted = 'Year started is required';
    if (!FormData.yearFinish) newError.yearFinish = 'year finished is required';
    if (!profileFormData.isChecked)
      newError.isChecked = 'You need to check this box';
    return newError;
  };

  function handleSubmit(e) {
    e.preventDefault();
    const newErrors = validate();
    // if(.trim()=== ''){
    //   setError('Name is required')
    // }
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Container>
        <BioSection BioSection>
          <Heading>Personal Detail</Heading>
          <Info>
            <LogoContainer>
              <HiOutlineUserCircled />
              <P>Profile Picture</P>
            </LogoContainer>
            <Inputs>
              <Input
                type="text"
                name="fullName"
                value={profileFormData.fullName}
                placeholder="Full name"
                onChange={(e) => handleInputChange(e)}
              />
              <Input
                type="text"
                name="department"
                value={profileFormData.department}
                placeholder="Department"
                onChange={(e) => handleInputChange(e)}
              />
              <Input
                type="text"
                name="level"
                value={profileFormData.level}
                placeholder="Level"
                onChange={(e) => handleInputChange(e)}
              />
            </Inputs>
          </Info>
        </BioSection>
        <EduSection>
          <Heading>Education History</Heading>
          <Info>
            <Inputs>
              <Input
                type="text"
                name="school"
                value={profileFormData.school}
                placeholder="Name of School"
                onChange={(e) => handleInputChange(e)}
              />
              <Input
                type="date"
                name="yearStarted"
                value={profileFormData.yearStarted}
                placeholder="Year Started"
                onChange={(e) => handleInputChange(e)}
              />
              <Input
                type="date"
                name="yearFinish"
                value={profileFormData.yearFinish}
                placeholder="Year Finish"
                onChange={(e) => handleInputChange(e)}
              />
              <Label>
                <input
                  type="checkbox"
                  name="checkBox"
                  value={profileFormData.isChecked}
                  onChange={(e) => handleInputChange(e)}
                />
                <span>Present Study</span>
              </Label>
            </Inputs>

            <Button>
              <HiPlusCircled />

              <Span>Add More School</Span>
            </Button>
          </Info>
        </EduSection>
        <BtnContainer>
          <Btn>Cancel</Btn>
          <Btn active="true" type="submit">
            Save Mode
          </Btn>
        </BtnContainer>
      </Container>
    </Form>
  );
}

export default ProfileForm;
