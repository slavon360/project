import React from 'react';
import PropTypes from 'prop-types';
import Button from '../UI/Button';
import Input from '../UI/Input';
import classes from './BankAccount.css';

const bankAccount = props => {

    return (
      <div className={classes.BankAccountWrp}>
        <h2 className={classes.Title}>Bank account</h2>
        <div className={classes.Note}>{props.bankAccount.note}</div>
        <div className={classes.InputsContent}>
          <Input elementConfig={{placeholder: 'Account Name'}} wrpClasses={['BankAccountName']} value={props.bankAccount.accountName} />
          <Input elementConfig={{placeholder: 'BSB'}} wrpClasses={['BSB']} value={props.bankAccount.bsb} />
          <Input elementConfig={{placeholder: 'Account Number'}} wrpClasses={['BankAccountNumber']} value={props.bankAccount.accountNumber} />
          <Input elementConfig={{placeholder: 'Account Nickname'}} wrpClasses={['BankAccountNickname']} value={props.bankAccount.accountNickname} />
          <Button btnClasses={['BankVerification']}>Start Verification</Button>
        </div>
      </div>
    )
}

export default bankAccount;

bankAccount.propTypes = {
  bankAccount: PropTypes.shape({
    accountName: PropTypes.string,
    bsb: PropTypes.string,
    accountNumber: PropTypes.string,
    accountNickname: PropTypes.string
  })
}
