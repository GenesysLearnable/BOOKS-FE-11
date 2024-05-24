import styled from 'styled-components';
import logo from '../Images/Vector.png';
import { useNavigate } from 'react-router-dom';
import { useData } from '../Components/context/UserData';

const Container = styled.div`
  margin: 10rem auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  background: rgba(255, 255, 255, 1);
  padding: 3rem 2rem;
  width: 48rem;

  box-shadow: 0.2rem 0.2rem 0.6rem rgba(0, 0, 0, 0.3);
  line-height: 1.5;
`;

const LogoContainer = styled.div`
  background: #006200;
  width: 4.8rem;
  height: 4.8rem;
  border-radius: 50rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Img = styled.img`
  width: 2.08rem;
  height: 2.08rem;
`;

const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 0.7rem;
  width: 47rem;
`;
const Header = styled.h1`
  color: rgba(21, 21, 21, 1);
  font-size: 2.4rem;
  font-weight: 700;
  color: #151515;
  font-family: EB Garamond;
`;

const SubHead = styled.p`
  font-family: DM Sans;
  font-size: 1.2rem;
  width: 28rem;
  text-align: center;
  color: #585f6a;
`;

const BtnContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
`;

const Btn = styled.button`
  width: 10rem;
  height: 3rem;
  border: 0.1rem solid#003b00;
  border-radius: 0.4rem;
  background-color: ${(props) =>
    props.type === 'primary' ? '#004D00' : 'transparent'};
  color: ${(props) => (props.type === 'primary' ? '#fff' : '#003B00')};
  font-size: 1.2rem;
`;

function ResetPassword() {
  const { email } = useData();

  const navigate = useNavigate();
  const reveal = email.slice(0, 2);
  const mask = email.split('@')[0].slice(2).replace(/./g, '*');
  const visibleSection = email.slice(-10);
  const masked = `${reveal}${mask}${visibleSection}`;

  return (
    <Container>
      <LogoContainer>
        <Img src={logo} alt="logo" />
      </LogoContainer>
      <Title>
        <Header>Reset email sent</Header>
        <SubHead>
          we have sent an email with password reset link to{' '}
          <span>{masked}</span>
        </SubHead>
      </Title>

      <BtnContainer>
        <Btn type="primary" onClick={() => navigate('/')}>
          Got it
        </Btn>
        <Btn>Send again</Btn>
      </BtnContainer>
    </Container>
  );
}

export default ResetPassword;
