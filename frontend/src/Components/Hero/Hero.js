import React from "react";
import { HiOutlineBell } from "react-icons/hi";
import "./Hero.css";
// import Sidebar from '../Sidebar/sidebar.js'
import { HiOutlineFilter } from "react-icons/hi";
import searchIcon from "../../Images/Icons/search-icon.svg";

// import {Slider} from '../../Components/slider/Slider.js'

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
    </div>
  );
};

export default Hero;
