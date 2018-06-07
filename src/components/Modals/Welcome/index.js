import React from 'react';
import WelcomeBackground from '../../../../assets/images/backgrounds/welcome-bg.png';
import UserIcon from '../../UI/Icons/User';
import MapIcon from '../../UI/Icons/Map';
import CityHallIcon from '../../UI/Icons/CityHall';
import Button from '../../UI/Button';
import classes from './Welcome.css';

const welcome = () => (
  <div
    className={classes.WelcomeWrp}
    style={{ backgroundImage: `url(${WelcomeBackground})` }}
  >
    <h1>Welcome to Bithela!</h1>
    <div className={classes.Notice}>
      Please ensure your verification is complete to allow for withdrawals of either fiat or
       Bitcoin. Here are a few things you need to do
    </div>
    <div className={classes.ListWrp}>
      <div className={classes.ListItem}>
        <div className={classes.IconWrp}>
          <UserIcon />
        </div>
        <div className={classes.Text}>
          Complete your user details to allow withdrawals more than $100
        </div>
      </div>
      <div className={classes.ListItem}>
        <div className={classes.IconWrp}>
          <MapIcon />
        </div>
        <div className={classes.Text}>
          Address verification is not mandatory
        </div>
      </div>
      <div className={classes.ListItem}>
        <div className={classes.IconWrp}>
          <CityHallIcon />
        </div>
        <div className={classes.Text}>
          Input your Bank account details and initiate Verification to
           allow withdrawals. If your Bank account is not verified, you’re not allowed to
            withdraw more than $100 in Fiat and more than $500 in Crypto
        </div>
      </div>
    </div>
    <Button
      elementConfig={{ 'before-content': 'Lets start!' }}
      btnClasses={['WelcomeButton']}
    >
    Lets start!
    </Button>
  </div>
);

export default welcome;
