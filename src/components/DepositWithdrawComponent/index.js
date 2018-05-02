import React from 'react';
import Dropdown from '../UI/Dropdown';
import classes from './DepositWithdrawComponent.css';

const depositWithdraw = (props) => {
    return(
      <div className={classes.DepositWithdrawWrp}>
        <h2 className={classes.Title}>{props.data.title}</h2>
        <div className={classes.DropDwnWrp}>
          <div className={classes.SelectCurrency}>{`Select ${props.data.type} Currency`}</div>
            <Dropdown />
          <div className={classes.Balance}>{`Balance: ${props.data.balance}`}</div>
        </div>
      </div>
    )
}

export default depositWithdraw;
