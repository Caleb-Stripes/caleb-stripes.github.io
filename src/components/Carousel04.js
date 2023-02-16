import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import './Carousel.css';
import one from '../walls/wall04/projwall.jpg';
import two from '../walls/wall04/projwallcomplete.jpg';
import three from '../walls/wall04/diso01.jpg';
import four from '../walls/wall04/diso02.jpg';
import five from '../walls/wall04/diso03.jpg';
import six from '../walls/wall04/diso04.jpg';
import seven from '../walls/wall04/projwall2.jpg';
import eight from '../walls/wall04/projwall3.jpg';
import zero from '../walls/wall04/crg.jpg'
import ten from '../walls/wall04/setterbaby.jpeg';
import nine from '../walls/wall04/gymbabe.jpg'

const Carousel04 = () => {
  return ( 
    <Carousel>
      <div>
        <img className='image' src={zero}/>
      </div>
      <div>
        <img className='image' src={one}/>
      </div>
      <div>
        <img className='image' src={seven}/>
      </div>
      <div>
        <img className='image' src={eight}/>
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
        <img src={ten} />
      </div>
      <div>
        <img src={nine} />
      </div>
      
    </Carousel>
  );
};

export default Carousel04;        
