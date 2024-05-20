import React from "react";
import "./ReadingCards.css";
import book2 from "../../Images/book2.png";

function ReadingCards() {
  return (
    <div className=" Continue-reading-container">
      <div className="Continue-reading-sub">
        <div className="Image-div">
          <img
            style={{ width: "171px", height: "200px" }}
            src={book2}
            alt="b00k1-pic"
            className="book-list"
          />
        </div>

        <div className="Text-div">
          <p>
            <h5 className="long-name">David L. Nelson and Michael M. Cox</h5>
            <h4 className="course-bk2">Lehninger Principles of Biochemistry</h4>
            <p className="rate-bk3">
              Page 205<span> of 1,340</span>&nbsp; 20%
            </p>
          </p>
        </div>
      </div>
    </div>
  );
}

export default ReadingCards;
