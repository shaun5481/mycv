import React from 'react';
import './style.css';
import Button from '@material-ui/core/Button';

function ButtonStyle() {
  const classes = useStyles();
  return <Button className={classes.root}>shaun</Button>;
}
export default function App() {
  return (
    <div>
      <h1>Curiculum Vitea of Shaun Lekalakala!</h1>
      
      <Button variant="contained" Size="Small" color="Secondary">
        Hello World
      </Button>
    </div>
  );
}
