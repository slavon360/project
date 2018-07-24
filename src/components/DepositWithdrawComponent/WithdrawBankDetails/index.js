import React from 'react';
import cx from 'classnames';
import Input from '../../UI/Input';
import classes from './WithdrawBankDetails.css';

const withdrawBankDetails = props => (
  <div className={classes.WithdrawBankDetailsWrp}>
    <div className={classes.Head}>Enter your Bank account details to send the money to</div>
    <Input
      changeValue={event => props.setBankData(event, 'bankName')}
      wrpClasses={cx('BankDetailsInputWrp', { BankDetailsInputWrpRaised: props.bankDetails.bankName }).split(' ')}
      value={props.bankDetails.bankName}
      elementConfig={{ label: 'Bank name', placeholder: 'Bank name' }}
    />
    <Input
      changeValue={event => props.setBankData(event, 'bankCode')}
      wrpClasses={cx('BankDetailsInputWrp', { BankDetailsInputWrpRaised: props.bankDetails.bankCode }).split(' ')}
      value={props.bankDetails.bankCode}
      elementConfig={{ label: 'Bank Code', placeholder: 'Bank Code' }}
    />
    <Input
      changeValue={event => props.setBankData(event, 'accountNumber')}
      wrpClasses={cx('BankDetailsInputWrp', { BankDetailsInputWrpRaised: props.bankDetails.accountNumber }).split(' ')}
      value={props.bankDetails.accountNumber}
      elementConfig={{ label: 'Account Number', placeholder: 'Account Number' }}
    />
    <div className={classes.SubmitWrp}>
      <div className={classes.Submit}><a href="/bithela/withdraw-dollar-4">Submit</a></div>
    </div>
  </div>
);

export default withdrawBankDetails;
