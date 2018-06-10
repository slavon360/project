import React from 'react';
import classes from './Exchange.css';
import WithdrawImg from '../../../../assets/images/backgrounds/withdraw.jpg';
import TrustImg from '../../../../assets/images/backgrounds/trust_security.jpg';
import BuySellImg from '../../../../assets/images/backgrounds/buy_sell.jpg';

const getImage = (title) => {
  switch (title) {
    case 'Trade Bitcoin and Ethereum easily':
      return WithdrawImg;
    case 'Trust and Security':
      return TrustImg;
    case 'Buy and Sell in Seconds':
      return BuySellImg;
    default: return WithdrawImg;
  }
};
const exchange = props => (
  <div className={classes.ExchangeWrp}>
    <div className={classes.Steps}>
      {props.checkedTab.steps.map((step, index) => (
        <div className={classes.Step} key={index}>
          <div className={classes.Title}>{step.title}</div>
          <div className={classes.Description}>{step.Description}</div>
        </div>
      ))}
    </div>
    <div className={classes.InteractiveView}>
      <img src={getImage(props.checkedTab.title)} alt={props.checkedTab.title} />
    </div>
  </div>
);

export default exchange;
