import React from 'react';
import classNames from 'classnames';
import Dropdown from '../../UI/Dropdown';
import Angle from '../../UI/Icons/NextAngle';
import InputsBlockDollar2 from '../../InputsBlock/InputsBlockDollar-2';
import classes from './DepositWithdrawDollar-3.css';

const depositWithdraw = props => (
  <div className={classes.DepositWithdrawWrp}>
    <h2 className={classes.Title}>{props.data.title}</h2>
    <div className={classes.DropDwnWrp}>
      <div className={classes.SelectCurrency}>{`Select ${props.data.type} Currency`}</div>
      <Dropdown
        drpWrpClasses={['CurrencyDropdownWrp']}
        drpContainerClasses={
          classNames('CurrencyContainerDpDwn', { Show: props.data.showDpDwn, Hide: !props.data.showDpDwn }).split(' ')
        }
        dropdownButtonClasses={['DropdownButtonCurrency']}
        dropdownButtons={props.data.currencies}
        hideShowDropdown={props.hideShowCurrencyDropdown}
        hideDropdown={props.hideCurrencyDropdown}
        setValue={props.selectCurrency}
      >
        <div className={classes.SelectedCurrency}>
          <img src="/assets/aud.svg" alt="AUD" />
          <span className={classes.SelectedTitle}>AUD Australian Dollar</span>
          <span className={classes.Angle}>
            <Angle styles={{ width: '12px', height: '10px', fill: '#922c88', transform: 'rotate(90deg)' }} />
          </span>
        </div>
      </Dropdown>
      <div className={classes.Balance}>{`Balance: ${props.data.selectedCurrency.balance}`}</div>
    </div>
    <InputsBlockDollar2 />
    <div className={classes.Note}>Please, <a href="/bithela/verification">verify</a> your bank account to deposit money</div>
  </div>
);

export default depositWithdraw;
