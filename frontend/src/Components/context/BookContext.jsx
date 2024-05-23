import { createContext, useContext, useState } from 'react';

const BookDetailsContext = createContext();

function BookContext({ children }) {
  const [bookDetails, setBookDetails] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [inputValue, setInputValue] = useState('');

  return (
    <BookDetailsContext.Provider
      value={{
        bookDetails,
        setBookDetails,
        isLoading,
        setIsLoading,
        error,
        setError,
        inputValue,
        setInputValue,
      }}
    >
      {children}
    </BookDetailsContext.Provider>
  );
}

function useBookDetails() {
  const context = useContext(BookDetailsContext);
  if (context === undefined) {
    throw new Error('BookDetailsContext is used outside of  BookContext');
  }
  return context;
}

export { BookContext, useBookDetails };
