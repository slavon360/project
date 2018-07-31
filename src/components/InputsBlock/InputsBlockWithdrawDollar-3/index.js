import React from 'react';
import Input from '../../UI/Input';
import exclamationImg from '../../../../assets/images/icons/exclamation.png';
import classes from './InputsBlockWithdrawDollar-3.css';

const inputsBlockDollar = () => (
  <form className={classes.InputsBlockWrp}>
    <div className={classes.InputsBlockHead}>
      <div className={classes.LeftSide}>
        <img src={exclamationImg} alt="exclamation" />
      </div>
      <div className={classes.RightSide}>
        <div className={classes.Title}>Important!</div>
        <div className={classes.WarningInfo}>Minimum withdrawal: <span>0.1 ETH</span>
          <div>Lorem ipsum Lorem ipsum Lorem ipsum</div>
        </div>
        <div className={classes.LimitInfo}>Limit 500 USD Lorem ipsum Lorem ipsum!</div>
      </div>
    </div>
    <Input wrpClasses={['DepositAddress']} elementConfig={{ type: 'text', label: 'Enter the amount you want to withdraw' }} />
    <div className={classes.CopyDepositAddressWrp}>
      <button before-content="Next" type="button"><a>Next</a></button>
    </div>
  </form>
);

export default inputsBlockDollar;
