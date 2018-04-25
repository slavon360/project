import React from 'react';
import Logo from '../../Logo';
import classes from './Toolbar.css';
import NavigationItems from '../NavigationItems';
import HeaderTools from '../../HeaderTools';

const toolbar = (props) => (
    <header className={classes.Toolbar}>
        <div className={classes.Logo}>
          <Logo />
        </div>
        <nav className={classes.DesktopOnly}>
          <NavigationItems />
          <HeaderTools />
        </nav>
    </header>
);

export default toolbar;
