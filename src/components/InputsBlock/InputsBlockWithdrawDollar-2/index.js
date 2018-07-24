import React from 'react';
import cx from 'classnames';
import Input from '../../UI/Input';
import Dropdown from '../../UI/Dropdown';
import Angle from '../../UI/Icons/NextAngle';
import classes from './InputsBlockWithdrawDollar-2.css';

const inputsBlockDollar = props => (
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
    <Input wrpClasses={['DepositAddress']} elementConfig={{ type: 'text', label: 'Enter the amount you want to withdraw' }} />
    <div className={classes.CopyDepositAddressWrp}>
      <button before-content="Next" type="button"><a>Next</a></button>
    </div>
    <div className={classes.BankArea}>
      <div className={classes.Header}>Choose your Bank to send the money to</div>
      <Dropdown
        drpWrpClasses={['CurrencyDropdownWrp', 'BanksDropdownWrp']}
        drpContainerClasses={
          cx('CurrencyContainerDpDwn BanksContainerDpDwn', { Show: props.showBanksDpDwn, Hide: !props.showBanksDpDwn }).split(' ')
        }
        dropdownButtonClasses={['DropdownButtonCurrency']}
        dropdownButtons={props.bank.list}
        hideShowDropdown={props.hideShowBanksDropdown}
        hideDropdown={props.hideBanksDropdown}
      >
        <div className={classes.SelectedCurrency}>
          <span className={classes.SelectedTitle}>{props.bank.selectedBank.title}</span>
          <span className={classes.Angle}>
            <Angle styles={{ width: '12px', height: '10px', fill: '#922c88', transform: 'rotate(90deg)' }} />
          </span>
        </div>
      </Dropdown>
      <div className={classes.SubmitWrp}>
        <div className={classes.Submit}>
          <a>Submit</a>
        </div>
      </div>
    </div>
  </div>
);

export default inputsBlockDollar;
