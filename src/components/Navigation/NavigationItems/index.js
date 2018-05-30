import React from 'react';
import cx from 'classnames';
import classes from './NavigationItems.css';
import Cancel from '../../UI/Icons/Cancel';
import BitcoinIcon from '../../UI/Icons/BitcoinIcon';
import WalletIcon from '../../UI/Icons/WalletIcon';
import Deposit from '../../UI/Icons/Deposit';
import Withdraw from '../../UI/Icons/Withdraw';
import UserName from '../../User/UserName';
import BalanceIndicator from '../../HeaderTools/BalanceIndicator';
import NavigationItem from './NavigationItem';

const navigationItems = () => (
  <ul className={classes.NavigationItems}>
      <div className={classes.UserName}>
        <UserName userName="John Bravo"/>
      </div>
      <div className={classes.BalanceIndicator}>
        <BalanceIndicator >2.156 <span>BTC</span> / 31 025.35 <span>AUD</span></BalanceIndicator>
      </div>
      <NavigationItem link="/buy-sell">
        <div className={cx(classes.Icon, classes.BitcoinIcon)}>
          <BitcoinIcon />
        </div>
        <span>Buy / Sell</span>
      </NavigationItem>
      <NavigationItem link="/balances">
        <div className={cx(classes.Icon, classes.WalletIcon)}>
          <WalletIcon />
        </div>
        <span>Balances</span>
      </NavigationItem>
      <NavigationItem link="/deposit">
        <div className={cx(classes.Icon, classes.DepositIcon)}>
          <Deposit />
        </div>
        <span>Deposit</span>
      </NavigationItem>
      <NavigationItem link="/withdraw">
        <div className={cx(classes.Icon, classes.WithdrawIcon)}>
          <Withdraw />
        </div>
        <span>Withdraw</span>
      </NavigationItem>
      <NavigationItem link="/profile" optionalClass="PhoneAndTablet" >Profile</NavigationItem>
      <NavigationItem link="/verification" optionalClass="PhoneAndTablet" >Verification</NavigationItem>
      <NavigationItem link="/logout" optionalClass="PhoneAndTablet" >Logout</NavigationItem>
      <NavigationItem link="/help" optionalClass="TabletOnly" >Help</NavigationItem>
      <NavigationItem link="/about-us" optionalClass="TabletOnly" >About Us</NavigationItem>
      <NavigationItem link="/contact-us" optionalClass="TabletOnly" >Contact Us</NavigationItem>
  </ul>
);

export default navigationItems;
