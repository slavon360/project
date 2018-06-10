import React from 'react';
import NavLink from 'react-router-dom';
import Logo from '../../Logo';
import classes from './Header.css';

const header = props => (
  <div className={classes.Header}>
    <div className={classes.Logo}><Logo /></div>
    <div className={classes.RightSide}>
      <div className={classes.Proportions}>{props.proportions}</div>
      <div className={classes.SignUp}>
        <NavLink to="/sign-up" exact activeClassName={classes.active}>Sign Up</NavLink>
      </div>
      <div className={classes.SignIn}>
        <NavLink to="/sign-in" exact activeClassName={classes.active}>Sign In</NavLink>
      </div>
    </div>
  </div>
);

export default header;
