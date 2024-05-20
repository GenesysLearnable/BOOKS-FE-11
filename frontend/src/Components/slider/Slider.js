// Import Swiper React components
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
import ReadingCards from "../ContinueReadingCard/ReadingCards";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import "swiper/css/scrollbar";

export default function MySlider() {
  return (
    <Swiper
      className="bingo"
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={100}
      slidesPerView={5}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
    >
      <SwiperSlide>
        <ReadingCards />
      </SwiperSlide>

      <SwiperSlide>
        <ReadingCards />
        {/* <div className="Wrapping">
            
            <div className="book-text">
             
                <div className="Reading-rate">
                  <img
                    style={{
                      width: "171",
                      height: "12px",
                      boarderRaduis: "12px",
                    }}
                    src={Rectangle}
                    alt="continue reading"
                    className="continue"
                  />
                  <img
                    style={{
                      width: "11",
                      height: "12px",
                      boarderRaduis: "12px",
                    }}
                    src={greendot}
                    alt="continue reading"
                    className="greendot"
                  />
                </div>
              </p>
            </div>
          </div> */}
      </SwiperSlide>

      <SwiperSlide>
        <ReadingCards />
        {/* <div className="Wrapping">
            <img
              // style={{ width: "171px", height: "200px" }}
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
                      width: "171",
                      height: "12px",
                      boarderRaduis: "12px",
                    }}
                    src={Rectangle}
                    alt="continue reading"
                    className="continue"
                  />
                  <img
                    style={{
                      width: "11",
                      height: "12px",
                      boarderRaduis: "12px",
                    }}
                    src={greendot}
                    alt="continue reading"
                    className="greendot"
                  />
                </div>
              </p>
            </div>
          </div> */}
      </SwiperSlide>

      <SwiperSlide>
        <ReadingCards />
      </SwiperSlide>

      <SwiperSlide>
        <ReadingCards />
        {/* <div className="Wrapping">
            <img
              // style={{ width: "171px", height: "200px" }}
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
                      width: "171",
                      height: "12px",
                      boarderRaduis: "12px",
                    }}
                    src={Rectangle}
                    alt="continue reading"
                    className="continue"
                  />
                  <img
                    style={{
                      width: "11",
                      height: "12px",
                      boarderRaduis: "12px",
                    }}
                    src={greendot}
                    alt="continue reading"
                    className="greendot"
                  />
                </div>
              </p>
            </div>
          </div> */}
      </SwiperSlide>
    </Swiper>
  );
}
