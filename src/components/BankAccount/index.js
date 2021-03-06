import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import Button from '../UI/Button';
import Input from '../UI/Input';
import classes from './BankAccount.css';

const bankAccount = props => (
  <div className={classes.BankAccountWrp}>
    <h2 className={classes.Title}>Bank account</h2>
    <div className={classes.Note}>{props.bankAccount.note}</div>
    <div className={classes.InputsContent}>
      <Input
        changeValue={event => props.setUsersData(event, 'accountName')}
        elementConfig={{ placeholder: 'Account Name', label: 'Account Name' }}
        wrpClasses={cx('BankAccountName UserDetailsInputWrp', { UserDetailsInputWrpRaised: props.bankAccount.accountName }).split(' ')}
        value={props.bankAccount.accountName}
      />
      <Input
        changeValue={event => props.setUsersData(event, 'bsb')}
        elementConfig={{ placeholder: 'BSB', label: 'BSB' }}
        wrpClasses={cx('BSB UserDetailsInputWrp', { UserDetailsInputWrpRaised: props.bankAccount.bsb }).split(' ')}
        value={props.bankAccount.bsb}
      />
      <Input
        changeValue={event => props.setUsersData(event, 'accountNumber')}
        elementConfig={{ placeholder: 'Account Number', label: 'Account Number' }}
        wrpClasses={cx('BankAccountNumber UserDetailsInputWrp', { UserDetailsInputWrpRaised: props.bankAccount.accountNumber }).split(' ')}
        value={props.bankAccount.accountNumber}
      />
      <Input
        changeValue={event => props.setUsersData(event, 'accountNickname')}
        elementConfig={{ placeholder: 'Account Nickname', label: 'Account Nickname' }}
        wrpClasses={cx('BankAccountNickname UserDetailsInputWrp', { UserDetailsInputWrpRaised: props.bankAccount.accountNickname }).split(' ')}
        value={props.bankAccount.accountNickname}
      />
      <Button btnClasses={['BankVerification']}>
        <div><a href="/bithela/verification-bank-2">Start Verification</a></div>
      </Button>
    </div>
  </div>
);

bankAccount.propTypes = {
  bankAccount: PropTypes.shape({
    accountName: PropTypes.string,
    bsb: PropTypes.string,
    accountNumber: PropTypes.string,
    accountNickname: PropTypes.string,
  }),
};

export default bankAccount;
