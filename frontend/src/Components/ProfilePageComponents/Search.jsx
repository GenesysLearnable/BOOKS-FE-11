import { useState } from 'react';
import { HiOutlineSearch } from 'react-icons/hi';
import styled from 'styled-components';

const SearchContainer = styled.div`
  position: relative;
`;

const Span = styled.span`
  position: absolute;
  left: 1.5rem;
  top: 0.8rem;
`;
const Input = styled.input`
  width: 100%;

  padding: 0.3rem 4rem;
  border: 0.1rem solid #e5e6e9;
  border-radius: 3rem;
  outline: none;
`;

function Search() {
  const [inputValue, setInputValue] = useState('');

  return (
    <SearchContainer>
      <Span>
        <HiOutlineSearch />
      </Span>

      <Input
        type="text"
        placeholder="Search"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
    </SearchContainer>
  );
}

export default Search;
