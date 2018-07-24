import React from 'react';
import Input from '../../UI/Input';
import classes from './InputsBlockDollar-2.css';

const inputsBlockDollar = () => (
  <div className={classes.InputsBlockWrp}>
    <div className={classes.InputsBlockHead}>
      <div className={classes.LeftSide}>
        <img src="assets/exclamation.png" alt="exclamation" />
      </div>
      <div className={classes.RightSide}>
        <div className={classes.Title}>Important!</div>
        <div className={classes.WarningInfo}>Minimum withdrawal: <span>0.1 ETH</span>
          <div>Lorem ipsum Lorem ipsum Lorem ipsum</div>
        </div>
        <div className={classes.LimitInfo}>Limit 500 USD Lorem ipsum Lorem ipsum!</div>
      </div>
    </div>
    <Input wrpClasses={['DepositAddress']} elementConfig={{ type: 'text', label: 'Enter Amount' }} />
    <div className={classes.CopyDepositAddressWrp}>
      <button before-content="Next" type="button">Next</button>
    </div>
  </div>
);

export default inputsBlockDollar;
