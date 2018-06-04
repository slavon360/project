import React from 'react';
import Logo from '../../Logo';
import classes from './Toolbar.css';
import DrawerToggle from '../SideDrawer/DrawerToggle';
import NavigationItems from '../NavigationItems';
import HeaderTools from '../../HeaderTools';

const toolbar = props => (
  <header className={classes.Toolbar}>
    <DrawerToggle
      clicked={props.drawerToggleClicked}
    />
    <div className={classes.Logo}>
      <Logo />
    </div>
    <nav className={classes.DesktopOnly}>
      <NavigationItems />
    </nav>
    <HeaderTools />
  </header>
);

export default toolbar;
