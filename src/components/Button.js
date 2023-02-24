import * as React from 'react';
import Button from '@mui/material/Button';

export default function MyButton({props}) {
  return (
    <div>
      <Button id={props.id} variant="contained">
        {props.name}
      </Button>
    </div>
  );
}
