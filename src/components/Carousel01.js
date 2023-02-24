import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import './Carousel.css';
import one from '../walls/wall01/beautiful.jpg';
import two from '../walls/wall01/brotherstrek.jpeg';
import three from '../walls/wall01/broski.jpeg';
import four from '../walls/wall01/Acadia.jpg';
import five from '../walls/wall01/bestmen.jpeg';
import six from '../walls/wall01/weddingcanoe.jpeg';
import eight from '../walls/wall01/dressed up.jpg';
import nine from '../walls/wall01/fam.jpg';
import ten from '../walls/wall01/masquerade.jpg';
import eleven from '../walls/wall01/4 generations.jpg';

const Carousel01 = () => {
  const handleClick = () => {alert('clicked')}

  return ( 
    <Carousel>
      <div>
        <img className='portrait' src={one}/>
      </div>
      <div>
        <img id="Wow, you are clever aren't you." src={two} />
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

export default Carousel01;        
