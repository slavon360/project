import React from 'react';
import Button from '../../UI/Button';
import Input from '../../UI/Input';
import classes from './DisableGoogleAuth.css';

const disableGoogleAuth = () => (
  <div className={classes.DisableGoogleAuthWrp}>
    <h2>Disable Google authenticator</h2>
    <form className={classes.DisableForm}>
      <div className={classes.LoginPassword}>Login Password</div>
      <Input
        wrpClasses={['LoginPasswordAuthent']}
        elementConfig={{ type: 'password' }}
        elementType="input"
      />
      <div className={classes.GoogleAuthCode}>Google Authentification code</div>
      <Input
        wrpClasses={['DisableSMSAuthCode']}
        elementConfig={{ type: 'text' }}
        elementType="input"
      />
      <Button btnClasses={['ConfirmDisableSMSAuth']} elementConfig={{ 'before-content': 'Confirm' }}>Confirm</Button>
    </form>
  </div>
);

export default disableGoogleAuth;
