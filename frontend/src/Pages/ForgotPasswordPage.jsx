import { useMutation } from '@tanstack/react-query';

import toast from 'react-hot-toast';
import { useNavigate } from 'react-router';
import styled from 'styled-components';
import { useData } from '../Components/context/UserData';

const Container = styled.form`
  margin: 10rem auto;
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
  width: 40rem;
  text-align: center;
  color: #585f6a;
`;

const InputContainer = styled.div`
  margin: auto;
  width: 40rem;
  height: 4rem;
  background-color: white;
  border: 0.1rem solid gray;
  border-radius: 0.5rem;
`;

const Input = styled.input`
  height: 4rem;
  width: 40rem;
  padding-left: 1rem;
  background: transparent;
  border: none;
  position: absolute;
  outline: none;
  font-size: 1.4rem;
`;
const Button = styled.button`
  font-size: 1.4rem;
  background: rgb(6, 98, 19);
  width: 40rem;
  height: 3.5rem;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffff;
  cursor: pointer;
`;
const Span = styled.span`
  color: #af741a;
  font-family: DM Sans;
`;

async function requestReset(email) {
  const res = await fetch(
    'https://books-be-11.onrender.com/api/v1/users/forgotPassword',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email }),
    }
  );
  if (!res.ok) {
    const errData = await res.json();
    console.log(`Error data ${errData}`);
    throw new Error('Connection issue');
  }
  return await res.json();
}

function ForgotPasswordPage() {
  const { setEmail, email } = useData();
  const navigate = useNavigate();

  const { mutate, isLoading } = useMutation({
    mutationFn: requestReset,

    onSuccess: () => {
      toast.success('Mail successful sent to your email for password reset.');
      navigate('/resetPassword');
    },
    onError: (err) => {
      toast.error(`Unable to send mail, ${err.message}`);
    },
  });

  function handleSubmit(e) {
    e.preventDefault();
    mutate(email);
    navigate('/resetPassword');
  }

  return (
    <Container onSubmit={handleSubmit}>
      <Title>
        <Header>Forgot Password</Header>
        <SubHead>
          Kindly send the email address tied to your account, we'll send
          instruction to reset your password
        </SubHead>
      </Title>
      <InputContainer>
        <Input
          type="email"
          placeholder="Provide your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </InputContainer>
      <Button disabled={isLoading} type="submit">
        Next
      </Button>

      <Span onClick={() => navigate('/')}>back to login</Span>
    </Container>
  );
}

export default ForgotPasswordPage;
