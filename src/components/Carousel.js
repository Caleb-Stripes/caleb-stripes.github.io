import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import './Carousel.css';
import one from '';
import two from '';
import three from '';
import four from '';
import five from '';
import six from '';

const CarouselPage = () => {
  return ( 
    <Carousel>
      <div>
        <img src={one}/>
      </div>
      <div>
        <img src={two} />
      </div>
      <div>
        <img src={three} />
      </div>
      <div>
        <img src={four} />
      </div>
      <div>
        <img src={five} />
      </div>
      <div>
        <img src={six} />
      </div>
      
    </Carousel>
  );
};

export default CarouselPage;        
