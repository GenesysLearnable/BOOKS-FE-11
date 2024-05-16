import React from 'react'
import './Category.css'
import book3 from '../../Images/book3.png'
import filterbutton from '../../Images/Icons/filter-button.svg'


function Community() {
  return (
    <div>
      <h3>
  Category{' '}
  <button className="category-filter">
    <img src={filterbutton} alt="icon" className="filter-icon" /> Filter
  </button>
</h3>
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

    </div>
  )
}

export default Community
