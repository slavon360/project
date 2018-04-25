import React from 'react';
import classes from './NavigationItems.css';
import NavigationItem from './NavigationItem';

const navigationItems = (props) => (
  <ul className={classes.NavigationItems}>
      <NavigationItem link="/buy-sell">Buy / Sell</NavigationItem>
      <NavigationItem link="/balances">Balances</NavigationItem>
      <NavigationItem link="/deposit">Deposit</NavigationItem>
      <NavigationItem link="/withdraw">Withdraw</NavigationItem>
  </ul>
);

export default navigationItems;
