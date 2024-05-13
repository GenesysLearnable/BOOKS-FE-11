import React from 'react';
import { HiOutlineBell } from 'react-icons/hi';
import './Hero.css';
// import Sidebar from '../Sidebar/sidebar.js'
import book1 from '../../Images/book1.png'
import book2 from '../../Images/book2.png'
import book3 from '../../Images/book3.png'
import { HiOutlineFilter } from 'react-icons/hi';
import searchIcon from '../../Images/Icons/search-icon.svg';
import searchicon from '../../Images/Icons/search-icon.svg'
import filterbutton from '../../Images/Icons/filter-button.svg'
import Rectangle from '../../Images/Icons/Rectangle.png'
import greendot from '../../Images/Icons/greendot.png'
import pic1 from '../../Images/Icons/pic1.png'
import pic2 from '../../Images/Icons/pic2.png'
import pic3 from '../../Images/Icons/pic3.png'
import lib from '../../Images/lib.png'
import lib2 from '../../Images/lib2.png'
import lib3 from '../../Images/lib3.png'
import lib4 from '../../Images/lib4.png'



const Hero = () => {
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

      <div className="Book-details">
        <h3>Continue Reading</h3>
        <div className="continue-reading-row">
          <div className="Wrapping">
            <img
              style={{ width: '171px', height: '200px' }}
              src={book1}
              alt="b00k1-pic"
              className="book-list"
            />

            <div className="book-text">
              <p>
                <h5 className="long-name">
                  Joanne Willey, Linda Sherwood, and Christopher J. Woolverton
                </h5>
                <h4 className="course">Microbiology</h4>
                <p className="rate">
                  Page 267 <span>of 3,563</span>&nbsp; 1%
                </p>

                <div className="Reading-rate">
                  <img
                    style={{
                      width: '171',
                      height: '12px',
                      boarderRaduis: '12px',
                    }}
                    src={Rectangle}
                    alt="continue reading"
                    className="continue"
                  />
                  <img
                    style={{
                      width: '11',
                      height: '12px',
                      boarderRaduis: '12px',
                    }}
                    src={greendot}
                    alt="continue reading"
                    className="greendot"
                  />
                </div>
              </p>
            </div>
          </div>

          <div className="Wrapping">
            <img
              style={{ width: '171px', height: '200px' }}
              src={book2}
              alt="b00k1-pic"
              className="book-list"
            />

            <div className="book-text">
              <p>
                <h5 className="long-name">
                  David L. Nelson and Michael M. Cox
                </h5>
                <h4 className="course-bk2">
                  Lehninger Principles of Biochemistry
                </h4>
                <p className="rate-bk3">
                  Page 205<span> of 1,340</span>&nbsp; 20%
                </p>

                <div className="Reading-rate">
                  <img
                    style={{
                      width: '171',
                      height: '12px',
                      boarderRaduis: '12px',
                    }}
                    src={Rectangle}
                    alt="continue reading"
                    className="continue"
                  />
                  <img
                    style={{
                      width: '11',
                      height: '12px',
                      boarderRaduis: '12px',
                    }}
                    src={greendot}
                    alt="continue reading"
                    className="greendot"
                  />
                </div>
              </p>
            </div>
          </div>

          <div className="Wrapping">
            <img
              style={{ width: '171px', height: '200px' }}
              src={book3}
              alt="b00k1-pic"
              className="book-list"
            />

            <div className="book-text">
              <p>
                <h5 className="long-name">
                  Bruce Alberts, Alexander Johnson, Julian Lewis, David Morgan,
                  Martin Raff, Keith Roberts, and Peter Walter
                </h5>

                <h4 className="course-bk3">Molecular Biology of the Cell</h4>
                <p className="rate">
                  Page 267 <span>of 3,563</span>&nbsp; 1%
                </p>

                <div className="Reading-rate">
                  <img
                    style={{
                      width: '171',
                      height: '12px',
                      boarderRaduis: '12px',
                    }}
                    src={Rectangle}
                    alt="continue reading"
                    className="continue"
                  />
                  <img
                    style={{
                      width: '11',
                      height: '12px',
                      boarderRaduis: '12px',
                    }}
                    src={greendot}
                    alt="continue reading"
                    className="greendot"
                  />
                </div>
              </p>
            </div>
          </div>
        </div>
      </div>

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
            <button>Science</button>
            <button>Microbiology</button> <br />
            <button>MCB 206</button>
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
            <button>Science</button>
            <button>Microbiology</button> <br />
            <button>MCB 206</button>
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
            <button>Science</button>
            <button>Microbiology</button> <br />
            <button>MCB 206</button>
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
            <button>Science</button>
            <button>Microbiology</button> <br />
            <button>MCB 206</button>
          </p>
        </div>
      </div>

      <h3>
        Community
        <button className="category-filter">
          <img src={filterbutton} alt="icon" className="filter-icon" /> Filter
        </button>
      </h3>

      <div className="Community-rwo">
        <div className="Community-books">
          <img
            style={{ width: '270px', height: '338px' }}
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
                    fontSize: '16px',
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
            style={{ width: '270px', height: '338px' }}
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
                    fontSize: '16px',
                  }}
                >
                  +100
                </button>
              </button>
            </div>
          </p>
        </div>
      </div>

      <h3>
        Library
        <button className="category-filter">
          <img src={filterbutton} alt="icon" className="filter-icon" /> Filter
        </button>
      </h3>

      <div className="library-row">
        <img
          style={{
            width: '270px',
            height: '280px',
            boarderRaduis: '6px',
            boxShadow: '1px solid rgba(229, 230, 233, 1) ',
          }}
          src={lib}
          alt="b00k1-pic"
        />
        <img
          style={{
            width: '270px',
            height: '280px',
            boarderRaduis: '6px',
            boxShadow: '1px solid rgba(229, 230, 233, 1) ',
          }}
          src={lib2}
          alt="b00k1-pic"
        />
        <img
          style={{
            width: '270px',
            height: '280px',
            boarderRaduis: '6px',
            boxShadow: '1px solid rgba(229, 230, 233, 1) ',
          }}
          src={lib3}
          alt="b00k1-pic"
        />
        <img
          style={{
            width: '270px',
            height: '280px',
            boarderRaduis: '6px',
            boxShadow: '1px solid rgba(229, 230, 233, 1) ',
          }}
          src={lib4}
          alt="b00k1-pic"
        />
      </div>
    </div>
  );
};

export default Hero;
