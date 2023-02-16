import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import './Carousel.css';
import one from '../walls/wall02/newborn.jpg';
import two from '../walls/wall02/wsu.jpg';
import three from '../walls/wall02/mamas arms.jpg';
import four from '../walls/wall02/cragbaby.jpg';
import five from '../walls/wall02/gymbaby.jpg';
import six from '../walls/wall02/baby yoda.jpg';
import seven from '../walls/wall02/ladybug.jpg';
import eight from '../walls/wall02/rockstar.jpg';
import nine from '../walls/wall02/rude.jpg';
import ten from '../walls/wall02/skibaby.jpg';
import eleven from '../walls/wall02/swanbook.jpg';
import twelve from '../walls/wall02/yogiface.jpg';

const Carousel02 = () => {
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
        <img className='portrait' src={seven}/>
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
      <div>
        <img className='image' src={twelve} />
      </div>
      
    </Carousel>
  );
};

export default Carousel02;        
