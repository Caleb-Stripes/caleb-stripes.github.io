import React, { useState } from 'react';
import uots from '../walls/wall00/uots.png';
import './Unicorn.css';

const Unicorn = () => {

  return (
    <div className='unicorn'>
        <img src={uots}></img>
    </div>
  );
};

const UniButton = () => {
  const [showUnicorn, setShowUnicorn] = useState(false);

  return (
    <div>
      <button onClick={() => setShowUnicorn(!showUnicorn)}>
        Run the Unicorn
      </button>
      {showUnicorn && <Unicorn />}
    </div>
  );
};

export default UniButton;
