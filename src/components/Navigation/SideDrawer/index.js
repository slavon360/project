import React, { Fragment } from 'react';
import cx from 'classnames';
import Backdrop from '../../UI/Backdrop';
import CancelIcon from '../../UI/Icons/Cancel';
import NavigationItems from '../NavigationItems';
import classes from './SideDrawer.css';

const sideDrawer = props => (
  <Fragment>
    <Backdrop
      show={props.open}
      clicked={props.closeSideDrawer}
    />
    <div
      className={
        cx(classes.SideDrawerWrp, { [classes.Open]: props.open, [classes.Close]: !props.open })
      }
    >
      <div
        role="button"
        tabIndex={0}
        onClick={props.closeSideDrawer}
        className={classes.CancelIcon}
      >
        <CancelIcon
          innerStyles={{ fill: '#fff' }}
        />
      </div>
      <div
        role="button"
        tabIndex={0}
        onClick={props.closeSideDrawer}
      >
        <NavigationItems />
      </div>
    </div>
  </Fragment>
);

export default sideDrawer;
