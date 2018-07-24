import React from 'react';
import classes from './DepositDetails.css';

const depositDetails = () => (
  <div className={classes.DepositDetailsWrp}>
    <div className={classes.TopInfo}>
      <span>Deposit 1200,00 USD</span> at the following Bank.
         Here is the account Details Commonwealth Bank
    </div>
    <div className={classes.MiddleInfo}>
      <div className={classes.LeftSide}>Bank name</div>
      <div className={classes.RightSide}>
        <div className={classes.Branch}>
          <div className={classes.Title}>Branch number</div>
          <div className={classes.Value}>xxxx</div>
        </div>
        <div className={classes.Account}>
          <div className={classes.Title}>Account Number</div>
          <div className={classes.Value}>xxxx</div>
        </div>
        <div className={classes.Slip}>
          <div className={classes.Title}>Use Reference on your deposit Slip</div>
          <div className={classes.Value}>xxyzzz</div>
        </div>
      </div>
    </div>
    <div className={classes.Footer}>
      <div className={classes.Note}>UPON RECEIVING YOUR DEPOSIT,
         YOU WILL IMMEDIATELY SEE IT IN YOUR BALLANCE</div>
      <div className={classes.Submit}><a href="/bithela/deposit-dollar-3">Submit</a></div>
    </div>
  </div>
);

export default depositDetails;
