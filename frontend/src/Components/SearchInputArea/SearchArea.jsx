import { HiOutlineBell } from 'react-icons/hi';
import { HiOutlineFilter } from 'react-icons/hi';
import searchIcon from '../../Images/Icons/search-icon.svg';
import { useState } from 'react';
import './SearchArea.css';
import { useBookDetails } from '../context/BookContext';

function SearchArea() {
  const { setIsLoading, setBookDetails, setError, inputValue, setInputValue } =
    useBookDetails();
  const [filterValue, setFilterValue] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);

    try {
      const res = await fetch(
        `https://books-be-11.onrender.com/api/v1/ebooks/search?${filterValue}=${inputValue}`
      );

      if (!res.ok) {
        throw new Error('Network Issue');
      }
      const data = await res.json();
      setBookDetails(data);
      setInputValue('');
      setFilterValue('');
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div>
      <div className="pic-container">
        <form className="search-container" onSubmit={handleSubmit}>
          <div className="search">
            <img src={searchIcon} alt="icon" className="searchIcon" />
            <input
              className="input-box"
              placeholder="Author, book, topic..."
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
          </div>
          <div>
            <div className="button filter-btn">
              <HiOutlineFilter className="filter-icon" />
              <select
                value={filterValue}
                onChange={(e) => setFilterValue(e.target.value)}
              >
                <option value="">Filter</option>
                <option value="author">Author</option>
                <option value="categories">Categories</option>
                <option value="keyword">Keyword</option>
              </select>
            </div>
          </div>
        </form>
        <div className="icon-notification-container">
          <HiOutlineBell className="icon-notification" />
        </div>
      </div>
    </div>
  );
}

export default SearchArea;
