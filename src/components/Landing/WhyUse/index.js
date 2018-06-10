import React from 'react';
import BitcoinIcon from '../../UI/Icons/BitcoinLanding';
import PadlockIcon from '../../UI/Icons/Padlock';
import TimerIcon from '../../UI/Icons/Timer';
import classes from './WhyUse.css';

const header = () => (
  <div className={classes.WhyUseWrp}>
    <h2>Why use Bithela</h2>
    <div className={classes.TabsWrp}>
      <div className={classes.Trade}>
        <div className={classes.Icon}>
          <BitcoinIcon outerRadiusStyles={{ fill: '#932c88' }} innerRadiusStyles={{ fill: '#ce41a1' }} />
        </div>
        <div className={classes.Title}>Trade Bitcoin and Ethereum easily</div>
        <div className={classes.Description}>
          Join the growing world of digital currencies using our platform
        </div>
      </div>
      <div className={classes.Trust}>
        <div className={classes.Icon}>
          <PadlockIcon topStyles={{ fill: '#ce41a1' }} bottomStyles={{ fill: '#932c88' }} />
        </div>
        <div className={classes.Title}>Trust and Security</div>
        <div className={classes.Description}>
          Avoid perennial inflation by buying into deflationary currencies
        </div>
      </div>
      <div className={classes.Buy}>
        <div className={classes.Icon}>
          <TimerIcon outerRadiusStyles={{ fill: '#932c88' }} innerRadiusStyles={{ fill: '#ce41a1' }} />
        </div>
        <div className={classes.Title}>Buy and Sell in Seconds</div>
        <div className={classes.Description}>
          Use our fast responsive platform that  helps you manage the market
        </div>
      </div>
    </div>
  </div>
);

export default header;
