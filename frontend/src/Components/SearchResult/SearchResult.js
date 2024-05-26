import React from 'react';
import './SearchResult.css';
import book3 from '../../Images/book3.png';

import { useBookDetails } from '../context/BookContext';
import SearchArea from '../SearchInputArea/SearchArea';
import { useTextBook } from '../context/CurrentBookContext';
import { useNavigate } from 'react-router-dom';

function SearchResult() {
  const { bookDetails, inputValue, isLoading, error } = useBookDetails();
  const { setCurrentText } = useTextBook();
  const navigate = useNavigate();

  function trunc(name, maxLength) {
    if (name.length <= maxLength) {
      return name;
    }
    return name.substring(0, maxLength - 3) + '...';
  }

  if (inputValue === '' && !bookDetails) {
    return (
      <div className="hero-container">
        <div className="pic-content">
          <SearchArea />
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

            <div>
              <h2 className="title">Essential Cell Biology</h2>
              <h3>
                <span className="author">Bruce Alberts</span>
              </h3>
              <button className="the-hover-btn">Science</button>
              <button className="the-hover-btn">Microbiology</button> <br />
              <button className="the-hover-btn">MCB 206</button>
            </div>
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
              <h3>
                <span>Bruce Alberts</span>
              </h3>
              <button className="the-hover-btn">Science</button>
              <button className="the-hover-btn">Microbiology</button> <br />
              <button className="the-hover-btn">MCB 206</button>
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
              <button className="the-hover-btn">Science</button>
              <button className="the-hover-btn">Microbiology</button> <br />
              <button className="the-hover-btn">MCB 206</button>
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
              <button className="the-hover-btn">Science</button>
              <button className="the-hover-btn">Microbiology</button> <br />
              <button className="the-hover-btn">MCB 206</button>
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
              <button className="the-hover-btn">Science</button>
              <button className="the-hover-btn">Microbiology</button> <br />
              <button className="the-hover-btn">MCB 206</button>
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
              <button className="the-hover-btn">Science</button>
              <button className="the-hover-btn">Microbiology</button> <br />
              <button className="the-hover-btn">MCB 206</button>
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
              <button className="the-hover-btn">Science</button>
              <button className="the-hover-btn">Microbiology</button> <br />
              <button className="the-hover-btn">MCB 206</button>
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
              <button className="the-hover-btn">Science</button>
              <button className="the-hover-btn">Microbiology</button> <br />
              <button className="the-hover-btn">MCB 206</button>
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
              <button className="the-hover-btn">Science</button>
              <button className="the-hover-btn">Microbiology</button> <br />
              <button className="the-hover-btn">MCB 206</button>
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
              <button className="the-hover-btn">Science</button>
              <button className="the-hover-btn">Microbiology</button> <br />
              <button className="the-hover-btn">MCB 206</button>
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
              <button className="the-hover-btn">Science</button>
              <button className="the-hover-btn">Microbiology</button> <br />
              <button className="the-hover-btn">MCB 206</button>
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
              <button className="the-hover-btn">Science</button>
              <button className="the-hover-btn">Microbiology</button> <br />
              <button className="the-hover-btn">MCB 206</button>
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
              <button className="the-hover-btn">Science</button>
              <button className="the-hover-btn">Microbiology</button> <br />
              <button className="the-hover-btn">MCB 206</button>
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
              <button className="the-hover-btn">Science</button>
              <button className="the-hover-btn">Microbiology</button> <br />
              <button className="the-hover-btn">MCB 206</button>
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
              <button className="the-hover-btn">Science</button>
              <button className="the-hover-btn">Microbiology</button> <br />
              <button className="the-hover-btn">MCB 206</button>
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
              <button className="the-hover-btn">Science</button>
              <button className="the-hover-btn">Microbiology</button> <br />
              <button className="the-hover-btn">MCB 206</button>
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
              <button className="the-hover-btn">Science</button>
              <button className="the-hover-btn">Microbiology</button> <br />
              <button className="the-hover-btn">MCB 206</button>
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
              <button className="the-hover-btn">Science</button>
              <button className="the-hover-btn">Microbiology</button> <br />
              <button className="the-hover-btn">MCB 206</button>
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
              <button className="the-hover-btn">Science</button>
              <button className="the-hover-btn">Microbiology</button> <br />
              <button className="the-hover-btn">MCB 206</button>
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
              <button className="the-hover-btn">Science</button>
              <button className="the-hover-btn">Microbiology</button> <br />
              <button className="the-hover-btn">MCB 206</button>
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
              <button className="the-hover-btn">Science</button>
              <button className="the-hover-btn">Microbiology</button> <br />
              <button className="the-hover-btn">MCB 206</button>
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
              <button className="the-hover-btn">Science</button>
              <button className="the-hover-btn">Microbiology</button> <br />
              <button className="the-hover-btn">MCB 206</button>
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
              <h2 className="title">Essential Cell Biology</h2>
              <h2>
                <span className="author">Bruce Alberts</span>
              </h2>
              <button className="the-hover-btn">Science</button>
              <button className="the-hover-btn">Microbiology</button> <br />
              <button className="the-hover-btn">MCB 206</button>
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
              <button className="the-hover-btn">Science</button>
              <button className="the-hover-btn">Microbiology</button> <br />
              <button className="the-hover-btn">MCB 206</button>
            </p>
          </div>
        </div>
        {/* <div>
          <button></button>
          <button></button>
          <button></button>
          <button></button>
          <button></button>
          <button></button>
        </div> */}
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="hero-container">
        <div className="pic-content">
          <SearchArea />
        </div>
        <h3>Search Result</h3>
        <div style={{ font: '14px' }}>Loading .....</div>;
      </div>
    );
  }

  if (error) {
    return (
      <div className="hero-container">
        <div className="pic-content">
          <SearchArea />
        </div>
        <h3>Search Result</h3>

        <div>Unable to fetch data</div>
      </div>
    );
  }

  if (bookDetails) {
    return (
      <div className="hero-container">
        <div className="pic-content">
          <SearchArea />
        </div>
        <h3>Search Result</h3>

        <div className="cover-container">
          {bookDetails.data?.map((d, i) => {
            setCurrentText({
              id: d.id,
              title: d.title,
              image: d.thumbnail,
              author: d.author,
              url: d.url,
              categories: d.categories,
            });
            return (
              <div
                className="category-books"
                key={i}
                onClick={() => navigate('/bookdetails')}
              >
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
                    src={d.thumbnail}
                    alt="b00k1-pic"
                  />
                </div>

                <div className="details">
                  <div className="header">
                    <h2 className="title">{d.title}</h2>
                    <h3>
                      <span className="author">{trunc(d.author, 35)}</span>
                    </h3>
                  </div>
                  <div>
                    <button className="the-hover-btn">{d.categories}</button>

                    <button className="the-hover-btn">{d.id}</button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default SearchResult;
