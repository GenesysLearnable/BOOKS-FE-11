import React from 'react';
import './ContinueReading.css';
import Rectangle from '../../Images/Icons/Rectangle.png';
import greendot from '../../Images/Icons/greendot.png';
// import searchicon from '../../Images/Icons/search-icon.svg'
// import book2 from "../../Images/book2.png";
// import book1 from "../../Images/book1.png";
// import book3 from "../../Images/book3.png";
// import "animate.css";
// import MySlider from "../slider/Slider";
import ReadingCards from '../ContinueReadingCard/ReadingCards';
import SliderComponent from '../Category/SliderComponent';
import styled from 'styled-components';

const H3 = styled.h3`
  font-size: 2.4rem;
`;

function ContinueReading() {
  return (
    <div>
      <H3>Continue Reading.....</H3>
      <SliderComponent />
    </div>
  );
}

export default ContinueReading;
