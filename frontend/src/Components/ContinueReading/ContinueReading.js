import React from 'react';
import './ContinueReading.css';
import SliderComponent from './SliderComponent';
import styled from 'styled-components';

const H3 = styled.h3`
  font-size: 2.4rem;
`;

function ContinueReading() {
  return (
    <div className="reading-container">
      <H3>Continue Reading.....</H3>
      <SliderComponent />
    </div>
  );
}

export default ContinueReading;
