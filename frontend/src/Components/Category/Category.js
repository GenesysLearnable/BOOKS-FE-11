import "./Category.css";
import book3 from "../../Images/book3.png";
import filterbutton from "../../Images/Icons/filter-button.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Popup from "./Popup";
import { useState } from "react";

function Category() {
  const [popupState, setPopupState] = useState({
    popup1: false,
    popup2: false,
    popup3: false,
    popup4: false,
    popup5: false,
    popup6: false,
  });

  const showPopup = (popupName) => {
    setPopupState((prevState) => ({
      ...prevState,
      [popupName]: true,
    }));
  };

  const closePopup = (popupName) => {
    setPopupState((prevState) => ({
      ...prevState,
      [popupName]: false,
    }));
  };
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
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
        >
          <SwiperSlide>
            <div className="category-books">
              <div className="center-book">
                <img
                  style={{
                    width: "120px",
                    height: "150px",
                    top: "44px",
                    left: "66px",
                    justifyContent: "center",
                    alignItems: "center",
                    display: "flex",
                    border: "1px solid green",
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
                <button
                  className="the-hover-btn"
                  onClick={() => showPopup("popup1")}
                >
                  Science
                </button>
                <Popup
                  show={popupState.popup1}
                  onClose={() => closePopup("popup1")}
                ></Popup>
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
                    width: "120px",
                    height: "150px",
                    top: "44px",
                    left: "66px",
                    justifyContent: "center",
                    alignItems: "center",
                    display: "flex",
                    border: "1px solid green",
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
                <button
                  className="the-hover-btn"
                  onClick={() => showPopup("popup2")}
                >
                  Science
                </button>
                <Popup
                  show={popupState.popup2}
                  onClose={() => closePopup("popup2")}
                ></Popup>
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
                    width: "120px",
                    height: "150px",
                    top: "44px",
                    left: "66px",
                    justifyContent: "center",
                    alignItems: "center",
                    display: "flex",
                    border: "1px solid green",
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
                <button
                  className="the-hover-btn"
                  onClick={() => showPopup("popup3")}
                >
                  Science
                </button>
                <Popup
                  show={popupState.popup3}
                  onClose={() => closePopup("popup3")}
                ></Popup>
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
                    width: "120px",
                    height: "150px",
                    top: "44px",
                    left: "66px",
                    justifyContent: "center",
                    alignItems: "center",
                    display: "flex",
                    border: "1px solid green",
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
                <button
                  className="the-hover-btn"
                  onClick={() => showPopup("popup4")}
                >
                  Science
                </button>
                <Popup
                  show={popupState.popup4}
                  onClose={() => closePopup("popup4")}
                ></Popup>
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
                    width: "120px",
                    height: "150px",
                    top: "44px",
                    left: "66px",
                    justifyContent: "center",
                    alignItems: "center",
                    display: "flex",
                    border: "1px solid green",
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
                <button
                  className="the-hover-btn"
                  onClick={() => showPopup("popup5")}
                >
                  Science
                </button>
                <Popup
                  show={popupState.popup5}
                  onClose={() => closePopup("popup5")}
                ></Popup>
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
                    width: "120px",
                    height: "150px",
                    top: "44px",
                    left: "66px",
                    justifyContent: "center",
                    alignItems: "center",
                    display: "flex",
                    border: "1px solid green",
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
                <button
                  className="the-hover-btn"
                  onClick={() => showPopup("popup6")}
                >
                  Science
                </button>
                <Popup
                  show={popupState.popup6}
                  onClose={() => closePopup("popup6")}
                ></Popup>
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
