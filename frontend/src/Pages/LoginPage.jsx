import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import SocialAccountInput from '../Components/LoginSignup/SocialAccountInput';
import CreateInputLogin from '../Components/LoginSignup/CreateInputLogin';

const Container = styled.div`
  margin: 2rem auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 3rem;
  background: rgba(255, 255, 255, 1);
  padding: 3rem 2rem;
  width: 51.4rem;
  box-shadow: 0.2rem 0.2rem 0.6rem rgba(0, 0, 0, 0.3);
  line-height: 1.5;
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.7rem;
  width: 47rem;
`;

const H1 = styled.h1`
  color: rgba(21, 21, 21, 1);
  font-size: 3rem;
  font-weight: 700;
`;

const P = styled.p`
  font-size: 1.8rem;
  width: 43rem;
  text-align: center;
`;
const InputContainer = styled.div``;
const InputSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 2rem;
`;

const User = styled.div`
  font-size: 1.6rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  font-weight: bold;
`;

const Links = styled.span`
  cursor: pointer;
`;

function LoginPage() {
  const navigate = useNavigate();
  return (
    <Container>
      <Header>
        <H1>Login</H1>
        <P>Get unlimited access to any academic resource of your choice</P>
      </Header>
      <InputSection>
        <InputContainer>
          <SocialAccountInput />
          <CreateInputLogin />
        </InputContainer>
        <User>
          <span>Don't have an account yet? </span>

          <Links onClick={() => navigate('/home')}>Sign up</Links>
        </User>
      </InputSection>
    </Container>
  );
}

export default LoginPage;
