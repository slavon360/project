import React from 'react';
import classes from './NavigationItems.css';
import NavigationItem from './NavigationItem';

const navigationItems = (props) => (
  <ul className={classes.NavigationItems}>
      <NavigationItem link="/buy-sell">Buy / Sell</NavigationItem>
      <NavigationItem link="/balances">Balances</NavigationItem>
      <NavigationItem link="/deposit">Deposit</NavigationItem>
      <NavigationItem link="/withdraw">Withdraw</NavigationItem>
      <NavigationItem link="/profile" optionalClass="PhoneOnly" >Profile</NavigationItem>
      <NavigationItem link="/verification" optionalClass="PhoneOnly" >Verification</NavigationItem>
      <NavigationItem link="/logout" optionalClass="PhoneOnly" >Logout</NavigationItem>
      <NavigationItem link="/help" optionalClass="TabletOnly" >Help</NavigationItem>
      <NavigationItem link="/about-us" optionalClass="TabletOnly" >About Us</NavigationItem>
      <NavigationItem link="/contact-us" optionalClass="TabletOnly" >Contact Us</NavigationItem>
  </ul>
);

export default navigationItems;
