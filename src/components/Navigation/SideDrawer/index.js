import React, { Fragment } from 'react';
import Backdrop from '../../UI/Backdrop';
import NavigationItems from '../NavigationItems';
import classes from './SideDrawer.css';

const sideDrawer = props => (
    <Fragment>
      <Backdrop />
      <div className={classes.SideDrawerWrp}>
        <nav>
          <NavigationItems />
        </nav>
      </div>
    </Fragment>
)

export default sideDrawer;
