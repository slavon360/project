import React from 'react';
import Button from '../../UI/Button';
import Input from '../../UI/Input';
import classes from './DisableSMSAuthenticator.css';

const smsAuth = () => (
  <div className={classes.SMSAuthWrp}>
    <h2>Disable SMS authenticator</h2>
    <form className={classes.AuthentificationForm}>
      <div className={classes.LoginText}>Login Password</div>
      <Input wrpClasses={['LoginPasswordAuthent']} elementConfig={{ type: 'password' }} elementType="input" />
      <div className={classes.CodeTitle}>SMS Authentification code</div>
      <Input wrpClasses={['DisableSMSAuthCode']} elementConfig={{ type: 'text' }} elementType="input" />
      <Button btnClasses={['ConfirmDisableSMSAuth']} elementConfig={{ 'before-content': 'Confirm' }}>Confirm</Button>
    </form>
  </div>
);

export default smsAuth;
