import React from 'react';
import classes from './WithdrawSummarise.css';

const withdrawSummarise = props => (
  <div className={classes.WithdrawSummariseWrp}>
    <div className={classes.Head}>WITHDRAW</div>
    <div className={classes.Preface}>You want to withdraw</div>
    <div className={classes.Sum}>
      <span>{props.sum.value}</span>
      <span>{props.sum.currency}</span>
    </div>
    <div className={classes.To}>to</div>
    <div className={classes.Bank}>
      <div>{props.bank.bankName}</div>
      <div>{props.bank.bankCode}</div>
      <div>{props.bank.accountNumber}</div>
    </div>
    <div className={classes.Next}><a href="/bithela/withdraw-dollar-5">Next</a></div>
  </div>
);

export default withdrawSummarise;
