import React from "react";
import "./ContinueReading.css";
import Rectangle from "../../Images/Icons/Rectangle.png";
import greendot from "../../Images/Icons/greendot.png";
// import searchicon from '../../Images/Icons/search-icon.svg'
import book2 from "../../Images/book2.png";
import book1 from "../../Images/book1.png";
import book3 from "../../Images/book3.png";
import "animate.css";
import MySlider from "../slider/Slider";

function ContinueReading() {
  return (
    <div>
      <h3>Continue Reading</h3>
      <div className="continue-reading-row">
        <div className="Wrapping">
          <img
            style={{ width: "171px", height: "200px" }}
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
        </div>

        <div className="Wrapping">
          <img
            style={{ width: "171px", height: "200px" }}
            src={book2}
            alt="b00k1-pic"
            className="book-list"
          />

          <div className="book-text">
            <p>
              <h5 className="long-name">David L. Nelson and Michael M. Cox</h5>
              <h4 className="course-bk2">
                Lehninger Principles of Biochemistry
              </h4>
              <p className="rate-bk3">
                Page 205<span> of 1,340</span>&nbsp; 20%
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
        </div>

        <div className="Wrapping">
          <img
            style={{ width: "171px", height: "200px" }}
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
        </div>
      </div>
    </div>
  );
}

export default ContinueReading;
