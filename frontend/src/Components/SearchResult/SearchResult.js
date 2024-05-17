import React from 'react'
import './SearchResult.css'
import book3 from '../../Images/book3.png'
import { HiOutlineBell, HiOutlineFilter } from 'react-icons/hi'
import searchIcon from '../../Images/Icons/search-icon.svg';

function SearchResult() {
  return (
      <div className="hero-container">
  <div className="pic-content">
    <div className="pic-container">
      <div className="search-container">
        <div className="search">
        <img src={searchIcon} alt="icon" className="searchIcon" />
      <input
      className="input-box"
      placeholder="Author, book, topic..."
      type="text"
    />
  </div>
  <div>
    <button className="button filter-btn">
      <HiOutlineFilter className="filter-icon" /> <span>Filter</span>
    </button>
  </div>
</div>
<div className="icon-notification-container">
  <HiOutlineBell className="icon-notification" />
</div>
</div>
</div>

<h3>Search Result</h3>

<div className="category-row">
  <div className="category-books">
    <div className="center-book">
      <img
        style={{
          width: '137.6px',
          height: '160px',
          top: '44px',
          left: '66px',
          justifyContent: 'center',
          alignItems: 'center',
          display: 'flex',
          border: '1px solid green',
        }}
        src={book3}
        alt="b00k1-pic"
      />
    </div>

    <p>
      <h2>Essential Cell Biology</h2>
      <h2>
        <span>Bruce Alberts</span>
      </h2>
      <button  className='the-hover-btn'>Science</button>
      <button  className='the-hover-btn'>Microbiology</button> <br />
      <button  className='the-hover-btn'>MCB 206</button>
    </p>
  </div>

  <div className="category-books">
    <div className="center-book">
      <img
        style={{
          width: '137.6px',
          height: '160px',
          top: '44px',
          left: '66px',
          justifyContent: 'center',
          alignItems: 'center',
          display: 'flex',
          border: '1px solid green',
        }}
        src={book3}
        alt="b00k1-pic"
      />
    </div>

    <p>
      <h2>Essential Cell Biology</h2>
      <h2>
        <span>Bruce Alberts</span>
      </h2>
      <button className='the-hover-btn'>Science</button>
      <button className='the-hover-btn'>Microbiology</button> <br />
      <button className='the-hover-btn'>MCB 206</button>
    </p>
  </div>

  <div className="category-books">
    <div className="center-book">
      <img
        style={{
          width: '137.6px',
          height: '160px',
          top: '44px',
          left: '66px',
          justifyContent: 'center',
          alignItems: 'center',
          display: 'flex',
          border: '1px solid green',
        }}
        src={book3}
        alt="b00k1-pic"
      />
    </div>

    <p>
      <h2>Essential Cell Biology</h2>
      <h2>
        <span>Bruce Alberts</span>
      </h2>
      <button  className='the-hover-btn'>Science</button>
      <button  className='the-hover-btn'>Microbiology</button> <br />
      <button  className='the-hover-btn'>MCB 206</button>
    </p>
  </div>
  <div className="category-books">
    <div className="center-book">
      <img
        style={{
          width: '137.6px',
          height: '160px',
          top: '44px',
          left: '66px',
          justifyContent: 'center',
          alignItems: 'center',
          display: 'flex',
          border: '1px solid green',
        }}
        src={book3}
        alt="b00k1-pic"
      />
    </div>

    <p>
      <h2>Essential Cell Biology</h2>
      <h2>
        <span>Bruce Alberts</span>
      </h2>
      <button  className='the-hover-btn'>Science</button>
      <button  className='the-hover-btn'>Microbiology</button> <br />
      <button className='the-hover-btn'>MCB 206</button>
    </p>
  </div>
</div>
<div className="category-row">
  <div className="category-books">
    <div className="center-book">
      <img
        style={{
          width: '137.6px',
          height: '160px',
          top: '44px',
          left: '66px',
          justifyContent: 'center',
          alignItems: 'center',
          display: 'flex',
          border: '1px solid green',
        }}
        src={book3}
        alt="b00k1-pic"
      />
    </div>

    <p>
      <h2>Essential Cell Biology</h2>
      <h2>
        <span>Bruce Alberts</span>
      </h2>
      <button  className='the-hover-btn'>Science</button>
      <button  className='the-hover-btn'>Microbiology</button> <br />
      <button  className='the-hover-btn'>MCB 206</button>
    </p>
  </div>

  <div className="category-books">
    <div className="center-book">
      <img
        style={{
          width: '137.6px',
          height: '160px',
          top: '44px',
          left: '66px',
          justifyContent: 'center',
          alignItems: 'center',
          display: 'flex',
          border: '1px solid green',
        }}
        src={book3}
        alt="b00k1-pic"
      />
    </div>

    <p>
      <h2>Essential Cell Biology</h2>
      <h2>
        <span>Bruce Alberts</span>
      </h2>
      <button className='the-hover-btn'>Science</button>
      <button className='the-hover-btn'>Microbiology</button> <br />
      <button className='the-hover-btn'>MCB 206</button>
    </p>
  </div>

  <div className="category-books">
    <div className="center-book">
      <img
        style={{
          width: '137.6px',
          height: '160px',
          top: '44px',
          left: '66px',
          justifyContent: 'center',
          alignItems: 'center',
          display: 'flex',
          border: '1px solid green',
        }}
        src={book3}
        alt="b00k1-pic"
      />
    </div>

    <p>
      <h2>Essential Cell Biology</h2>
      <h2>
        <span>Bruce Alberts</span>
      </h2>
      <button  className='the-hover-btn'>Science</button>
      <button  className='the-hover-btn'>Microbiology</button> <br />
      <button  className='the-hover-btn'>MCB 206</button>
    </p>
  </div>
  <div className="category-books">
    <div className="center-book">
      <img
        style={{
          width: '137.6px',
          height: '160px',
          top: '44px',
          left: '66px',
          justifyContent: 'center',
          alignItems: 'center',
          display: 'flex',
          border: '1px solid green',
        }}
        src={book3}
        alt="b00k1-pic"
      />
    </div>

    <p>
      <h2>Essential Cell Biology</h2>
      <h2>
        <span>Bruce Alberts</span>
      </h2>
      <button  className='the-hover-btn'>Science</button>
      <button  className='the-hover-btn'>Microbiology</button> <br />
      <button className='the-hover-btn'>MCB 206</button>
    </p>
  </div>
</div>

<div className="category-row">
  <div className="category-books">
    <div className="center-book">
      <img
        style={{
          width: '137.6px',
          height: '160px',
          top: '44px',
          left: '66px',
          justifyContent: 'center',
          alignItems: 'center',
          display: 'flex',
          border: '1px solid green',
        }}
        src={book3}
        alt="b00k1-pic"
      />
    </div>

    <p>
      <h2>Essential Cell Biology</h2>
      <h2>
        <span>Bruce Alberts</span>
      </h2>
      <button  className='the-hover-btn'>Science</button>
      <button  className='the-hover-btn'>Microbiology</button> <br />
      <button  className='the-hover-btn'>MCB 206</button>
    </p>
  </div>

  <div className="category-books">
    <div className="center-book">
      <img
        style={{
          width: '137.6px',
          height: '160px',
          top: '44px',
          left: '66px',
          justifyContent: 'center',
          alignItems: 'center',
          display: 'flex',
          border: '1px solid green',
        }}
        src={book3}
        alt="b00k1-pic"
      />
    </div>

    <p>
      <h2>Essential Cell Biology</h2>
      <h2>
        <span>Bruce Alberts</span>
      </h2>
      <button className='the-hover-btn'>Science</button>
      <button className='the-hover-btn'>Microbiology</button> <br />
      <button className='the-hover-btn'>MCB 206</button>
    </p>
  </div>

  <div className="category-books">
    <div className="center-book">
      <img
        style={{
          width: '137.6px',
          height: '160px',
          top: '44px',
          left: '66px',
          justifyContent: 'center',
          alignItems: 'center',
          display: 'flex',
          border: '1px solid green',
        }}
        src={book3}
        alt="b00k1-pic"
      />
    </div>

    <p>
      <h2>Essential Cell Biology</h2>
      <h2>
        <span>Bruce Alberts</span>
      </h2>
      <button  className='the-hover-btn'>Science</button>
      <button  className='the-hover-btn'>Microbiology</button> <br />
      <button  className='the-hover-btn'>MCB 206</button>
    </p>
  </div>
  <div className="category-books">
    <div className="center-book">
      <img
        style={{
          width: '137.6px',
          height: '160px',
          top: '44px',
          left: '66px',
          justifyContent: 'center',
          alignItems: 'center',
          display: 'flex',
          border: '1px solid green',
        }}
        src={book3}
        alt="b00k1-pic"
      />
    </div>

    <p>
      <h2>Essential Cell Biology</h2>
      <h2>
        <span>Bruce Alberts</span>
      </h2>
      <button  className='the-hover-btn'>Science</button>
      <button  className='the-hover-btn'>Microbiology</button> <br />
      <button className='the-hover-btn'>MCB 206</button>
    </p>
  </div>
</div>

<div className="category-row">
  <div className="category-books">
    <div className="center-book">
      <img
        style={{
          width: '137.6px',
          height: '160px',
          top: '44px',
          left: '66px',
          justifyContent: 'center',
          alignItems: 'center',
          display: 'flex',
          border: '1px solid green',
        }}
        src={book3}
        alt="b00k1-pic"
      />
    </div>

    <p>
      <h2>Essential Cell Biology</h2>
      <h2>
        <span>Bruce Alberts</span>
      </h2>
      <button  className='the-hover-btn'>Science</button>
      <button  className='the-hover-btn'>Microbiology</button> <br />
      <button  className='the-hover-btn'>MCB 206</button>
    </p>
  </div>

  <div className="category-books">
    <div className="center-book">
      <img
        style={{
          width: '137.6px',
          height: '160px',
          top: '44px',
          left: '66px',
          justifyContent: 'center',
          alignItems: 'center',
          display: 'flex',
          border: '1px solid green',
        }}
        src={book3}
        alt="b00k1-pic"
      />
    </div>

    <p>
      <h2>Essential Cell Biology</h2>
      <h2>
        <span>Bruce Alberts</span>
      </h2>
      <button className='the-hover-btn'>Science</button>
      <button className='the-hover-btn'>Microbiology</button> <br />
      <button className='the-hover-btn'>MCB 206</button>
    </p>
  </div>

  <div className="category-books">
    <div className="center-book">
      <img
        style={{
          width: '137.6px',
          height: '160px',
          top: '44px',
          left: '66px',
          justifyContent: 'center',
          alignItems: 'center',
          display: 'flex',
          border: '1px solid green',
        }}
        src={book3}
        alt="b00k1-pic"
      />
    </div>

    <p>
      <h2>Essential Cell Biology</h2>
      <h2>
        <span>Bruce Alberts</span>
      </h2>
      <button  className='the-hover-btn'>Science</button>
      <button  className='the-hover-btn'>Microbiology</button> <br />
      <button  className='the-hover-btn'>MCB 206</button>
    </p>
  </div>
  <div className="category-books">
    <div className="center-book">
      <img
        style={{
          width: '137.6px',
          height: '160px',
          top: '44px',
          left: '66px',
          justifyContent: 'center',
          alignItems: 'center',
          display: 'flex',
          border: '1px solid green',
        }}
        src={book3}
        alt="b00k1-pic"
      />
    </div>

    <p>
      <h2>Essential Cell Biology</h2>
      <h2>
        <span>Bruce Alberts</span>
      </h2>
      <button  className='the-hover-btn'>Science</button>
      <button  className='the-hover-btn'>Microbiology</button> <br />
      <button className='the-hover-btn'>MCB 206</button>
    </p>
  </div>
</div>

<div className="category-row">
  <div className="category-books">
    <div className="center-book">
      <img
        style={{
          width: '137.6px',
          height: '160px',
          top: '44px',
          left: '66px',
          justifyContent: 'center',
          alignItems: 'center',
          display: 'flex',
          border: '1px solid green',
        }}
        src={book3}
        alt="b00k1-pic"
      />
    </div>

    <p>
      <h2>Essential Cell Biology</h2>
      <h2>
        <span>Bruce Alberts</span>
      </h2>
      <button  className='the-hover-btn'>Science</button>
      <button  className='the-hover-btn'>Microbiology</button> <br />
      <button  className='the-hover-btn'>MCB 206</button>
    </p>
  </div>

  <div className="category-books">
    <div className="center-book">
      <img
        style={{
          width: '137.6px',
          height: '160px',
          top: '44px',
          left: '66px',
          justifyContent: 'center',
          alignItems: 'center',
          display: 'flex',
          border: '1px solid green',
        }}
        src={book3}
        alt="b00k1-pic"
      />
    </div>

    <p>
      <h2>Essential Cell Biology</h2>
      <h2>
        <span>Bruce Alberts</span>
      </h2>
      <button className='the-hover-btn'>Science</button>
      <button className='the-hover-btn'>Microbiology</button> <br />
      <button className='the-hover-btn'>MCB 206</button>
    </p>
  </div>

  <div className="category-books">
    <div className="center-book">
      <img
        style={{
          width: '137.6px',
          height: '160px',
          top: '44px',
          left: '66px',
          justifyContent: 'center',
          alignItems: 'center',
          display: 'flex',
          border: '1px solid green',
        }}
        src={book3}
        alt="b00k1-pic"
      />
    </div>

    <p>
      <h2>Essential Cell Biology</h2>
      <h2>
        <span>Bruce Alberts</span>
      </h2>
      <button  className='the-hover-btn'>Science</button>
      <button  className='the-hover-btn'>Microbiology</button> <br />
      <button  className='the-hover-btn'>MCB 206</button>
    </p>
  </div>
  <div className="category-books">
    <div className="center-book">
      <img
        style={{
          width: '137.6px',
          height: '160px',
          top: '44px',
          left: '66px',
          justifyContent: 'center',
          alignItems: 'center',
          display: 'flex',
          border: '1px solid green',
        }}
        src={book3}
        alt="b00k1-pic"
      />
    </div>

    <p>
      <h2>Essential Cell Biology</h2>
      <h2>
        <span>Bruce Alberts</span>
      </h2>
      <button  className='the-hover-btn'>Science</button>
      <button  className='the-hover-btn'>Microbiology</button> <br />
      <button className='the-hover-btn'>MCB 206</button>
    </p>
  </div>
</div>

<div className="category-row">
  <div className="category-books">
    <div className="center-book">
      <img
        style={{
          width: '137.6px',
          height: '160px',
          top: '44px',
          left: '66px',
          justifyContent: 'center',
          alignItems: 'center',
          display: 'flex',
          border: '1px solid green',
        }}
        src={book3}
        alt="b00k1-pic"
      />
    </div>

    <p>
      <h2>Essential Cell Biology</h2>
      <h2>
        <span>Bruce Alberts</span>
      </h2>
      <button  className='the-hover-btn'>Science</button>
      <button  className='the-hover-btn'>Microbiology</button> <br />
      <button  className='the-hover-btn'>MCB 206</button>
    </p>
  </div>

  <div className="category-books">
    <div className="center-book">
      <img
        style={{
          width: '137.6px',
          height: '160px',
          top: '44px',
          left: '66px',
          justifyContent: 'center',
          alignItems: 'center',
          display: 'flex',
          border: '1px solid green',
        }}
        src={book3}
        alt="b00k1-pic"
      />
    </div>

    <p>
      <h2>Essential Cell Biology</h2>
      <h2>
        <span>Bruce Alberts</span>
      </h2>
      <button className='the-hover-btn'>Science</button>
      <button className='the-hover-btn'>Microbiology</button> <br />
      <button className='the-hover-btn'>MCB 206</button>
    </p>
  </div>

  <div className="category-books">
    <div className="center-book">
      <img
        style={{
          width: '137.6px',
          height: '160px',
          top: '44px',
          left: '66px',
          justifyContent: 'center',
          alignItems: 'center',
          display: 'flex',
          border: '1px solid green',
        }}
        src={book3}
        alt="b00k1-pic"
      />
    </div>

    <p>
      <h2>Essential Cell Biology</h2>
      <h2>
        <span>Bruce Alberts</span>
      </h2>
      <button  className='the-hover-btn'>Science</button>
      <button  className='the-hover-btn'>Microbiology</button> <br />
      <button  className='the-hover-btn'>MCB 206</button>
    </p>
  </div>
  <div className="category-books">
    <div className="center-book">
      <img
        style={{
          width: '137.6px',
          height: '160px',
          top: '44px',
          left: '66px',
          justifyContent: 'center',
          alignItems: 'center',
          display: 'flex',
          border: '1px solid green',
        }}
        src={book3}
        alt="b00k1-pic"
      />
    </div>

    <p>
      <h2>Essential Cell Biology</h2>
      <h2>
        <span>Bruce Alberts</span>
      </h2>
      <button  className='the-hover-btn'>Science</button>
      <button  className='the-hover-btn'>Microbiology</button> <br />
      <button className='the-hover-btn'>MCB 206</button>
    </p>
  </div>
</div>

<div>
    <button></button>
    <button></button>
    <button></button>
    <button></button>
    <button></button>
    <button></button>
    
</div>
    </div>
  )
}

export default SearchResult
