import * as React from 'react';
import Button from '@mui/material/Button';

export default function MyButton({name}) {
  return (
    <div>
      <Button variant="contained">
        {name}
      </Button>
    </div>
  );
}
