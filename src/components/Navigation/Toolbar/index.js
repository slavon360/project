import React from 'react';
import Logo from '../../Logo';
import classes from './Toolbar.css';
import NavigationItems from '../NavigationItems';
import HeaderTools from '../../HeaderTools';

const toolbar = () => (
  <header className={classes.Toolbar}>
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
