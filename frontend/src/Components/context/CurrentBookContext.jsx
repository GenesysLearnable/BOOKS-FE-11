import { createContext, useContext, useState } from 'react';

const CurrentBookContext = createContext();

function CurrentBook({ children }) {
  const [currentText, setCurrentText] = useState({
    id: '',
    title: '',
    image: '',
    author: '',
    Url: '',
  });
  return (
    <CurrentBookContext.Provider value={{ currentText, setCurrentText }}>
      {children}
    </CurrentBookContext.Provider>
  );
}

function useTextBook() {
  const context = useContext(CurrentBookContext);
  if (context === undefined) {
    throw new Error('CurrentBookContext is used outside of CurrentBook');
  }
  return context;
}
export { useTextBook, CurrentBook };
