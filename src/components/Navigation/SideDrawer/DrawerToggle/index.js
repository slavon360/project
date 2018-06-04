import React from 'react';
import classes from './DrawerToggle.css';

const drawerToggle = props => (
  <div
    role="button"
    tabIndex={0}
    onClick={props.clicked}
    className={classes.DrawerToggle}
  >
    <div />
    <div />
    <div />
  </div>
);

export default drawerToggle;
