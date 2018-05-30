import React from 'react';
import classes from './BalanceIndicator.css';

const balanceIndicator = props => (
  <div className={classes.BalanceIndicatorWrp}>{props.children}</div>
);

export default balanceIndicator;
