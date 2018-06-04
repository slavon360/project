import React from 'react';
import classes from './Backdrop.css';

const backdrop = props => (
  props.show ? <div
    role="button"
    tabIndex={0}
    className={classes.Backdrop}
    onClick={props.clicked}
  /> : null
);

export default backdrop;
