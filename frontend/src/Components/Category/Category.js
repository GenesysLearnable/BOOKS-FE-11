import React from 'react';
import './Category.css';
import book3 from '../../Images/book3.png';
import filterbutton from '../../Images/Icons/filter-button.svg';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

function Category() {
  return (
    <div className="category-container">
      <div className="heading" id="section1">
        <h3 className="header">Category</h3>
        <button className="category-filter">
          <img src={filterbutton} alt="icon" className="filter-icon" /> Filter
        </button>
      </div>

      <div className="category-row">
        <Swiper
          spaceBetween={10}
          slidesPerView={4}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
        >
          <SwiperSlide>
            <div className="category-books">
              <div className="center-book">
                <img
                  style={{
                    width: '120px',
                    height: '150px',
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
                <div className="title-container">
                  <h2 className="title">Essential Cell Biology</h2>
                  <span>Bruce Alberts</span>
                </div>
                <button className="the-hover-btn">Science</button>
                <button className="the-hover-btn">Microbiology</button> <br />
                <button className="the-hover-btn">MCB 206</button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="category-books">
              <div className="center-book">
                <img
                  style={{
                    width: '120px',
                    height: '150px',
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
                <div className="title-container">
                  <h2 className="title">Essential Cell Biology</h2>
                  <span>Bruce Alberts</span>
                </div>
                <button className="the-hover-btn">Science</button>
                <button className="the-hover-btn">Microbiology</button> <br />
                <button className="the-hover-btn">MCB 206</button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="category-books">
              <div className="center-book">
                <img
                  style={{
                    width: '120px',
                    height: '150px',
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
                <div className="title-container">
                  <h2 className="title">Essential Cell Biology</h2>
                  <span>Bruce Alberts</span>
                </div>
                <button className="the-hover-btn">Science</button>
                <button className="the-hover-btn">Microbiology</button> <br />
                <button className="the-hover-btn">MCB 206</button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="category-books">
              <div className="center-book">
                <img
                  style={{
                    width: '120px',
                    height: '150px',
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
                <div className="title-container">
                  <h2 className="title">Essential Cell Biology</h2>
                  <span>Bruce Alberts</span>
                </div>
                <button className="the-hover-btn">Science</button>
                <button className="the-hover-btn">Microbiology</button> <br />
                <button className="the-hover-btn">MCB 206</button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="category-books">
              <div className="center-book">
                <img
                  style={{
                    width: '120px',
                    height: '150px',
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
                <div className="title-container">
                  <h2 className="title">Essential Cell Biology</h2>
                  <span>Bruce Alberts</span>
                </div>
                <button className="the-hover-btn">Science</button>
                <button className="the-hover-btn">Microbiology</button> <br />
                <button className="the-hover-btn">MCB 206</button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="category-books">
              <div className="center-book">
                <img
                  style={{
                    width: '120px',
                    height: '150px',
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
                <div className="title-container">
                  <h2 className="title">Essential Cell Biology</h2>
                  <span>Bruce Alberts</span>
                </div>
                <button className="the-hover-btn">Science</button>
                <button className="the-hover-btn">Microbiology</button> <br />
                <button className="the-hover-btn">MCB 206</button>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default Category;
