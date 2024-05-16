import React from 'react'
import './Community.css'
import pic1 from '../../Images/Icons/pic1.png'
import pic2 from '../../Images/Icons/pic2.png'
import pic3 from '../../Images/Icons/pic3.png'
import book1 from '../../Images/book1.png'
import filterbutton from '../../Images/Icons/filter-button.svg'


function Community() {
  return (
    <div>
      <h3>
  Community
  <button className="category-filter">
    <img src={filterbutton} alt="icon" className="filter-icon" /> Filter
  </button>
</h3>
      <div className="Community-rwo">
  <div className="Community-books">
    <img
      style={{ width: '270px', height: '329px' }}
      src={book1}
      alt="b00k1-pic"
      className="book-list"
    />
    <p>
      <h3>Chem205 Student</h3>
      <br />
      <p className="community-details">
        The CHEM 205 student group is a tight-knit community dedicated to
        supporting students enrolled in CHEM 205, an introductory course
        in organic chemistry. Our goal is to provide a supportive
        environment where students can come together to discuss course
        materials, share study resources, and collaborate on assignments.
        Through group discussions, study sessions, and social events, we
        aim to enhance understanding and mastery of organic chemistry
        concepts while fostering a sense of camaraderie among members.
      </p>
      <button className="join-btn"> Join</button> <br />
      <div className="join-pics">
        <button className="pics-btns">
          <img
            style={{
              width: '40px',
              height: '40px',
              borderRadius: '20px',
            }}
            src={pic1}
            alt="pics"
            className="pics-btn-image"
          />
          <img
            style={{
              width: '40px',
              height: '40px',
              borderRadius: '20px',
            }}
            src={pic2}
            alt="pics"
            className="pics-btn-image"
          />
          <img
            style={{
              width: '40px',
              height: '40px',
              borderRadius: '20px',
            }}
            src={pic3}
            alt="pics"
            className="pics-btn-image"
          />
          <button
            className="pics-btn-image"
            style={{
              width: '40px',
              height: '40px',
              textAlign: 'center',
              justifyContent: 'center',
              display: 'flex',
              border: 'none',
              borderRadius: '20rem',
              backgroundColor: 'white',
              fontSize: '1.5rem',
              fontWeight: '500'
            }}
          >
            +100
          </button>
        </button>
      </div>
    </p>
  </div>

  <div className="Community-books">
    <img
      style={{ width: '270px', height: '329px' }}
      src={book1}
      alt="b00k1-pic"
      className="book-list"
    />
    <p>
      <h3>Chem205 Student</h3>
      <br />
      <p className="community-details">
        The CHEM 205 student group is a tight-knit community dedicated to
        supporting students enrolled in CHEM 205, an introductory course
        in organic chemistry. Our goal is to provide a supportive
        environment where students can come together to discuss course
        materials, share study resources, and collaborate on assignments.
        Through group discussions, study sessions, and social events, we
        aim to enhance understanding and mastery of organic chemistry
        concepts while fostering a sense of camaraderie among members.
      </p>
      <button className="join-btn"> Join</button> <br />
      <div className="join-pics">
        <button className="pics-btns">
          <img
            style={{
              width: '40px',
              height: '40px',
              borderRadius: '20px',
            }}
            src={pic1}
            alt="pics"
            className="pics-btn-image"
          />
          <img
            style={{
              width: '40px',
              height: '40px',
              borderRadius: '20px',
            }}
            src={pic2}
            alt="pics"
            className="pics-btn-image"
          />
          <img
            style={{
              width: '40px',
              height: '40px',
              borderRadius: '20px',
            }}
            src={pic3}
            alt="pics"
            className="pics-btn-image"
          />
          <button
            className="pics-btn-image"
            style={{
              width: '40px',
              height: '40px',
              textAlign: 'center',
              justifyContent: 'center',
              display: 'flex',
              border: 'none',
              borderRadius: '20rem',
              backgroundColor: 'white',
              fontSize: '1.5rem',
              fontWeight: '500'
            }}
          >
            +100
          </button>
        </button>
      </div>
    </p>
  </div>
</div>

    </div>
  )
}

export default Community
