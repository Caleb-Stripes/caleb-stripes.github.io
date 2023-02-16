import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import './Carousel.css';
import one from '../walls/wall03/babybelly.jpg';
import two from '../walls/wall03/cragbaby2.jpg';
import three from '../walls/wall03/dws.jpeg';
import four from '../walls/wall03/heel hook.jpg';
import five from '../walls/wall03/th01.jpg';
import six from '../walls/wall03/th02.jpg';
import eight from '../walls/wall03/thcrux.jpg';
import nine from '../walls/wall03/thcruxbat.jpg';
import ten from '../walls/wall03/twinky.jpeg';
import eleven from '../walls/wall03/wife layback.jpg';

const Carousel03 = () => {
  return ( 
    <Carousel>
      <div>
        <img className='portrait' src={one}/>
      </div>
      <div>
        <img className='image' src={two} />
      </div>
      <div>
        <img className='image' src={three} />
      </div>
      <div>
        <img className='image' src={four} />
      </div>
      <div>
        <img className='image' src={five} />
      </div>
      <div>
        <img className='image' src={six} />
      </div>
      <div>
        <img className='image' src={eight} />
      </div>
      <div>
        <img className='image' src={nine} />
      </div>
      <div>
        <img className='image' src={ten} />
      </div>
      <div>
        <img className='image' src={eleven} />
      </div>
    </Carousel>
  );
};

export default Carousel03;        
