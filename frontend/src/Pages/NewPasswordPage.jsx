import { useMutation } from '@tanstack/react-query';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { HiOutlineEye, HiOutlineEyeOff } from 'react-icons/hi';
import { useNavigate, useSearchParams } from 'react-router-dom';
import styled from 'styled-components';

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

const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 0.5rem;
  width: 47rem;
`;
const SubContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
`;

const InputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;
`;

const Header = styled.h1`
  color: rgba(21, 21, 21, 1);
  font-size: 2.2rem;
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
  position: relative;
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

const HiOutlineEyeOffIcon = styled(HiOutlineEyeOff)`
  position: absolute;
  right: 1.5rem;
  bottom: 1rem;
  font-size: 2rem;
  cursor: pointer;
`;

const HiOutlineEyeIcon = styled(HiOutlineEye)`
  position: absolute;
  right: 1.5rem;
  bottom: 1rem;
  font-size: 2rem;
  cursor: pointer;
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

async function resetPassword(token, password) {
  const res = await fetch(
    `https://books-be-11.onrender.com/api/v1/users/resetPassword/${token}`,
    {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ password }),
    }
  );
  if (!res.ok) {
    throw new Error(`Error resetting password`);
  }
  return await res.json();
}

function NewPasswordPage() {
  const [revealPassword, setRevealPassword] = useState(false);
  const [revealConfirmPassword, setRevealConfirmPassword] = useState(false);

  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const navigate = useNavigate();

  const [searchParams] = useSearchParams();
  const token = searchParams.get('token');

  const { isLoading, mutate } = useMutation({
    mutationFn: () => resetPassword(token, password),

    onSuccess: () => {
      toast.success('Your password has been successfully reset, Login');
      navigate('/');
    },

    onError: () => {
      toast.error('Your password could not be reset, try again');
      navigate('forgotPassword');
    },
  });

  async function handleSubmit(e) {
    e.preventDefault();
    if (password !== confirmPassword) {
      toast.error('Password do not match');
      return;
    }
    mutate(resetPassword);
  }

  function showPassword() {
    setRevealPassword((prev) => !prev);
  }
  function showConfirmPassword() {
    setRevealConfirmPassword((prev) => !prev);
  }
  return (
    <Container>
      <Title>
        <Header>Reset Password</Header>
        <SubHead>Kindly set a new password below</SubHead>
      </Title>
      <SubContainer onSubmit={handleSubmit}>
        <InputsContainer>
          <InputContainer>
            <Input
              type={revealPassword ? 'text' : 'password'}
              placeholder="Password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <span onClick={showPassword}>
              {revealPassword ? <HiOutlineEyeIcon /> : <HiOutlineEyeOffIcon />}
            </span>
          </InputContainer>
          <InputContainer>
            <Input
              type={revealConfirmPassword ? 'text' : 'password'}
              placeholder="Confirm new Password"
              name="confirm_password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <span onClick={showConfirmPassword}>
              {revealConfirmPassword ? (
                <HiOutlineEyeIcon />
              ) : (
                <HiOutlineEyeOffIcon />
              )}
            </span>
          </InputContainer>
        </InputsContainer>
        <div>
          <Button type="submit" disabled={isLoading}>
            Next
          </Button>
        </div>
      </SubContainer>
    </Container>
  );
}

export default NewPasswordPage;
