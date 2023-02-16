import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import './Carousel.css';
import adventuress from '../walls/wall00/adventuress.jpeg';
import sailor from '../walls/wall00/DayInTheLife.jpeg'
import tillar from '../walls/wall00/elliotbay.jpeg'
import lady from '../walls/wall00/lady.jpeg'
import outagas from '../walls/wall00/outagas.jpeg'
import sultana from '../walls/wall00/sultana.jpeg'

const CarouselPage = () => {
  return ( 
    <Carousel>
      <div>
        <img className='portrait' src={sultana}/>
      </div>
      <div>
        <img className='image' src={lady} />
      </div>
      <div>
        <img className='image' src={adventuress} />
      </div>
      <div>
        <img className='image' src={sailor} />
      </div>
      <div>
        <img className='image' src={tillar} />
      </div>
      <div>
        <img className='image' src={outagas} />
      </div>
      
    </Carousel>
  );
};

export default CarouselPage;        
