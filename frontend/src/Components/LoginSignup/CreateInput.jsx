import { useMutation } from '@tanstack/react-query';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { HiOutlineEye, HiOutlineEyeOff } from 'react-icons/hi';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Accounts = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 1.5rem;
`;

const SignUp = styled.button`
  font-size: 1.4rem;
  background: rgb(6, 98, 19);
  width: 40rem;
  height: 4rem;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffff;
  cursor: pointer;
`;

const Span = styled.span`
  color: #006200;
  border-bottom: 0.05rem solid #006200;
  padding-bottom: -0.05rem;
  margin-left: 0.2rem;
  cursor: pointer;
`;

const InputDetails = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 3rem;
`;

const DataContainer = styled.div`
  position: relative;
  margin: auto;
  width: 40rem;
  height: 4rem;
  background-color: white;
  border: 0.1rem solid gray;
  border-radius: 0.5rem;
`;

const InputValue = styled.input`
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

const Action = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
`;

const Terms = styled.div`
  width: 30rem;
  height: 3.5rem;
  text-align: center;
  line-height: 1.5;
  font-size: 1.2rem;
`;

async function createData(formData) {
  const res = await fetch(
    'https://books-be-11.onrender.com/api/v1/users/signup',
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    }
  );
  if (!res.ok) {
    throw new Error('Network connection issue');
  }
  return await res.json();
}

function CreateInput() {
  const [revealPassword, setRevealPassword] = useState(false);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  function showPassword() {
    setRevealPassword((prev) => !prev);
  }

  function handleInputChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    mutate(formData);
  }

  const { mutate, isLoading } = useMutation({
    mutationFn: createData,

    onSuccess: () => {
      toast.success('Data successfully created, Please Login.');
      navigate('/');
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return (
    <InputDetails onSubmit={handleSubmit}>
      <Accounts>
        <DataContainer>
          <InputValue
            type="email"
            placeholder="Your email"
            name="email"
            value={formData.email}
            onChange={(e) => handleInputChange(e)}
          />
        </DataContainer>
        <DataContainer>
          <InputValue
            type={revealPassword ? 'text' : 'password'}
            placeholder="Your Password"
            name="password"
            value={formData.password}
            maxLength={10}
            onChange={(e) => handleInputChange(e)}
          />
          <span onClick={showPassword}>
            {revealPassword ? <HiOutlineEyeIcon /> : <HiOutlineEyeOffIcon />}
          </span>
        </DataContainer>
      </Accounts>
      <Action>
        <SignUp type="submit" disabled={isLoading}>
          signing up
        </SignUp>
        <Terms>
          By Signing up, you agree to our
          <Span variance="span"> Terms and Service,</Span> and
          <Span variance="span"> Privacy Policy</Span>
        </Terms>
      </Action>
    </InputDetails>
  );
}

export default CreateInput;
