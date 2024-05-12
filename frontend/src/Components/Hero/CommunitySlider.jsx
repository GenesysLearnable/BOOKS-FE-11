import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useRef } from 'react';

import { HiChevronRight } from 'react-icons/hi';
import { HiChevronLeft } from 'react-icons/hi';

import filterbutton from '../../Images/Icons/filter-button.svg';

import book1 from '../../Images/book1.png';
import book2 from '../../Images/book2.png';
import book3 from '../../Images/book3.png';

import pic1 from '../../Images/Icons/pic1.png';
import pic2 from '../../Images/Icons/pic2.png';
import pic3 from '../../Images/Icons/pic3.png';

function CommunitySlider() {
  const sliderRef = useRef(null);
  const settings = {
    dots: true,
    infinite: false,
    speed: 1500,
    slideToShow: 2,
    slideToScroll: 1,
    arrows: true,
  };

  const goToNestSlide = function () {
    sliderRef.current.slickNext();
  };
  const goToPrevSlide = function () {
    sliderRef.current.slickPrev();
  };
  return (
    <>
      <div className="community-title">
        <div className="sub-title">
          <h3>Community</h3>
          <button className="category-filter">
            <img src={filterbutton} alt="icon" className="filter-icon" /> Filter
          </button>
        </div>
        <div className="navigation-arrows">
          <span onClick={goToPrevSlide} className="arrow ">
            <HiChevronLeft className="arrow-left" />
          </span>
          <span onClick={goToNestSlide} className="arrow ">
            <HiChevronRight className="arrow-right" />
          </span>
        </div>
      </div>
      <Slider {...settings} ref={sliderRef} className="Community-rwo">
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
            src={book2}
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
            src={book3}
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
      </Slider>
    </>
  );
}

export default CommunitySlider;
