import styled from 'styled-components';

const SocialAccountContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Accounts = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 1.5rem;
`;

const Account = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  width: 40rem;
  height: 4rem;
  background-color: white;
  border-radius: 5rem;
  border: 0.1rem solid gray;
`;

const Img = styled.img`
  position: relative;
  right: -11rem;
`;

const Input = styled.input`
  height: 4rem;
  width: 40rem;
  align-items: center;
  text-align: center;
  color: #36373d;
  background: transparent;
  border: none;
  outline: none;
  font-size: 1.4rem;
`;

const Or = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #36373d;
  width: 40rem;
  height: 4rem;
  font-size: 1.6rem;
  font-weight: bold;
`;

function SocialAccount() {
  return (
    <SocialAccountContainer>
      <Accounts>
        <Account>
          <Img src="images/google.png" alt="" />
          <Input type="text" placeholder="Sign up with Google " />
        </Account>

        <Account>
          <Img src="images/Facebook.png" alt="" />
          <Input type="text" placeholder="Sign up with Facebook " />
        </Account>

        <Account>
          <Img src="images/apple.png" alt="" />
          <Input type="text" placeholder="Sign up with Apple " />
        </Account>
      </Accounts>
      <Or>Or</Or>
    </SocialAccountContainer>
  );
}

export default SocialAccount;
