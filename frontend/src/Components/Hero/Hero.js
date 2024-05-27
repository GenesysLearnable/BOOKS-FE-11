import React from 'react';

import './Hero.css';
import SearchArea from '../SearchInputArea/SearchArea';

const Hero = () => {
  // const [bookDetails, setBookDetails] = useState({});

  return (
    <div className="hero-container">
      <div className="pic-content">
        <SearchArea />
        

      </div>
    </div>
  );
};

export default Hero;
