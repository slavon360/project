import React, { Fragment } from 'react';
import Backdrop from '../../UI/Backdrop';
import CancelIcon from '../../UI/Icons/Cancel';
import NavigationItems from '../NavigationItems';
import classes from './SideDrawer.css';

const sideDrawer = props => (
    <Fragment>
      <Backdrop />
      <div className={classes.SideDrawerWrp}>
        <div className={classes.CancelIcon}>
          <CancelIcon innerStyles={{fill: '#fff'}}/>
        </div>
        <nav>
          <NavigationItems />
        </nav>
      </div>
    </Fragment>
)

export default sideDrawer;
