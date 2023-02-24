import React, { useState } from 'react';
import uots from '../walls/wall00/uots.png';
import './Unicorn.css';
import Button from '@mui/material/Button';

const Unicorn = () => {
  console.log('Mystic sea mammals are very wise. How about you question(seaMammal) using your console.')

  return (
    <div className='unicorn'>
        <img src={uots}></img>
    </div>
  );
};

const UniButton = (props) => {
  const [showUnicorn, setShowUnicorn] = useState(false);

  return (
    <div>
      <Button id={props.id} style={props.visibility} variant="contained" onClick={() => setShowUnicorn(!showUnicorn)}>
        Run the Unicorn
      </Button>
      {showUnicorn && <Unicorn />}
    </div>
  );
};

export default UniButton;
