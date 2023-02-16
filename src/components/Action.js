import React from "react";
import { Button } from "@mui/material";

export default class Action extends React.Component {
    handleClick = () => {
      console.log("Button was clicked");
    };
  
    render() {
      return (
        <ActionChild handleClick={this.handleClick} />
      );
    }
  }
  
  //Child component
  function ActionChild(props) {
    return (
      <Button variant='contained' onClick={props.handleClick}>Click Me</Button>
    );
  }
  