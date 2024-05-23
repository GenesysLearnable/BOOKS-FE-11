import { createContext, useContext, useState } from 'react';

const UserDataContext = createContext();

function UserData({ children }) {
  const [email, setEmail] = useState('');
  return (
    <UserDataContext.Provider value={{ email, setEmail }}>
      {children}
    </UserDataContext.Provider>
  );
}

function useData() {
  const data = useContext(UserDataContext);
  if (data === undefined) {
    throw new Error('UserDataContext is used outside the userData');
  }
  return data;
}

export { UserData, useData };
