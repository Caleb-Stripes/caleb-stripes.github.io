import React, { useState } from "react";
import './Porthole.css'
import Button from '@mui/material/Button'
import Carousel00 from "./Carousel00";
import Carousel01 from "./Carousel01";
import Carousel02 from "./Carousel02";
import Carousel03 from "./Carousel03";
import Carousel04 from "./Carousel04";
import Carousel05 from "./Carousel05";

function Porthole(props) {
    const [element, setElement] = useState(props.element);

    return (
        <div className='porthole'>
            {element}
            <div className="buttons">
            <Button variant="contained" onClick={() =>setElement(<Carousel01 />)}>Family</Button>
            <Button variant="contained" onClick={() =>setElement(<Carousel00 />)}>Sailing</Button>
            <Button variant="contained" onClick={() =>setElement(<Carousel02 />)}>Daughter</Button>
            <Button variant="contained" onClick={() =>setElement(<Carousel03 />)}>Climbing</Button>
            <Button variant="contained" onClick={() =>setElement(<Carousel04 />)}>Gym Life</Button>
            </div>
        </div>
        
    )
}

export default Porthole;