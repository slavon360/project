import React from 'react';
import NavLink from 'react-router-dom';
import classes from './Intro.css';

const header = () => (
  <div className={classes.IntroWrp}>
    <h1>
      <span>{'Africa\'s easiest way to'}</span>
      <span>
        <span className={classes.Emphasis}>trade</span>,
        <span className={classes.Emphasis}>buy</span> and
        <span className={classes.Emphasis}>sell</span> crypto-currencies
      </span>
    </h1>
    <div className={classes.Advertise}>
      Buy, sell and trade digital currencies safely at your convenience
    </div>
    <div className={classes.CreateAccount}>
      <NavLink to="/sign-up" exact activeClassName={classes.active}>Create account</NavLink>
    </div>
  </div>
);

export default header;
