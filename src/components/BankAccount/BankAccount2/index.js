import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import Button from '../../UI/Button';
import Input from '../../UI/Input';
import classes from './BankAccount2.css';

const bankAccount2 = props => (
  <div className={classes.BankAccountWrp}>
    <h2 className={classes.Title}>Bank account</h2>
    <div className={classes.Note}>{props.bankAccount.note}</div>
    <div className={classes.InputsContent}>
      <Input
        changeValue={event => props.setUsersData(event, 'accountName')}
        elementConfig={{ placeholder: 'Account Name', label: 'Account Name' }}
        wrpClasses={cx('BankAccountName BankDetails2InputWrp', { BankDetails2InputWrpRaised: props.bankAccount.accountName }).split(' ')}
        value={props.bankAccount.accountName}
      />
      <Input
        changeValue={event => props.setUsersData(event, 'bsb')}
        elementConfig={{ placeholder: 'BSB', label: 'BSB' }}
        wrpClasses={cx('BSB BankDetails2InputWrp', { BankDetails2InputWrpRaised: props.bankAccount.bsb }).split(' ')}
        value={props.bankAccount.bsb}
      />
      <Input
        changeValue={event => props.setUsersData(event, 'accountNumber')}
        elementConfig={{ placeholder: 'Account Number', label: 'Account Number' }}
        wrpClasses={cx('BankAccountNumber BankDetails2InputWrp', { BankDetails2InputWrpRaised: props.bankAccount.accountNumber }).split(' ')}
        value={props.bankAccount.accountNumber}
      />
      <Input
        changeValue={event => props.setUsersData(event, 'accountNickname')}
        elementConfig={{ placeholder: 'Account Nickname', label: 'Account Nickname' }}
        wrpClasses={cx('BankAccountNickname BankDetails2InputWrp', { BankDetails2InputWrpRaised: props.bankAccount.accountNickname }).split(' ')}
        value={props.bankAccount.accountNickname}
      />
      <Button btnClasses={['BankVerification', 'BankVerificationFirst']}>
        Start Verification
      </Button>
      <Input
        changeValue={event => props.setUsersData(event, 'accountNickname2')}
        elementConfig={{ placeholder: 'Account Nickname', label: 'Account Nickname' }}
        wrpClasses={cx('BankAccountNickname BankDetails2InputWrp', { BankDetails2InputWrpRaised: props.bankAccount.accountNickname2 }).split(' ')}
        value={props.bankAccount.accountNickname2}
      />
      <Button btnClasses={['BankVerification']}>
        <div>Start Verification</div>
      </Button>
    </div>
  </div>
);

bankAccount2.propTypes = {
  bankAccount: PropTypes.shape({
    accountName: PropTypes.string,
    bsb: PropTypes.string,
    accountNumber: PropTypes.string,
    accountNickname: PropTypes.string,
  }),
};

export default bankAccount2;
