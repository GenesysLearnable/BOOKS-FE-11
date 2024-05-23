import React from 'react';
import './Library.css';
import lib from '../../Images/lib.png';
import lib2 from '../../Images/lib2.png';
import lib3 from '../../Images/lib3.png';
import lib4 from '../../Images/lib4.png';
import filterbutton from '../../Images/Icons/filter-button.svg';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

function Library() {
  return (
    <div className="library-container">
      <div className="library-header" id="section2">
        <h3 className="sub-head">Library</h3>
        <button className="category-filter">
          <img src={filterbutton} alt="icon" className="filter-icon" />
          <span className="filter">Filter</span>
        </button>
      </div>

      <Swiper
        spaceBetween={10}
        slidesPerView={4}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
      >
        <div className="library-row">
          <SwiperSlide>
            <div className="library">
              <img
                style={{
                  width: '220px',
                  height: '220px',
                  boarderRaduis: '6px',
                  boxShadow: '1px solid rgba(229, 230, 233, 1) ',
                }}
                src={lib}
                alt="b00k1-pic"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="library">
              <img
                style={{
                  width: '220px',
                  height: '220px',
                  boarderRaduis: '6px',
                  boxShadow: '1px solid rgba(229, 230, 233, 1) ',
                }}
                src={lib2}
                alt="b00k1-pic"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="library">
              <img
                style={{
                  width: '220px',
                  height: '220px',
                  boarderRaduis: '6px',
                  boxShadow: '1px solid rgba(229, 230, 233, 1) ',
                }}
                src={lib3}
                alt="b00k1-pic"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="library">
              <img
                style={{
                  width: '220px',
                  height: '220px',
                  boarderRaduis: '6px',
                  boxShadow: '1px solid rgba(229, 230, 233, 1) ',
                }}
                src={lib4}
                alt="b00k1-pic"
              />
            </div>
          </SwiperSlide>
        </div>
      </Swiper>
    </div>
  );
}

export default Library;
