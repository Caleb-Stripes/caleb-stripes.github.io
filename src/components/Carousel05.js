import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import './Carousel.css';
import one from '../walls/wall04/worldmap.png';
import two from '../walls/wall04/waysiders.png';
import three from '../walls/wall04/dragonstone.png';
import four from '../walls/wall04/ke-melek.png';
import five from '../walls/wall04/ashland-battle.png';


const Carousel05 = () => {
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
      
    </Carousel>
  );
};

export default Carousel05;        
