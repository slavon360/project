import React, { Fragment } from 'react';
import Button from '../../UI/Button';
import Input from '../../UI/Input';
import classes from './ChangePassword.css';

const changePass = props => (
  <div className={classes.ChangePasswordWrp}>
    <h2>Change Password</h2>
    <form className={classes.ChangePasswordForm}>
      {
        props.authCode ? <Input
          wrpClasses={['AuthentCode']}
          elementConfig={{ type: 'text', placeholder: 'Enter authenticator code' }}
          elementType="input"
        /> :
          (<Fragment>
            <Input
              wrpClasses={['CurrentPassword']}
              elementConfig={{ type: 'password', placeholder: 'Enter your current password' }}
              elementType="input"
            />
            <Input
              wrpClasses={['NewPassword']}
              elementConfig={{ type: 'password', placeholder: 'Enter new password' }}
              elementType="input"
            />
            <Input
              wrpClasses={['ConfirmNewPassword']}
              elementConfig={{ type: 'password', placeholder: 'Confirm new password' }}
              elementType="input"
            />
          </Fragment>
          )
      }
      <Button btnClasses={['ConfirmDisableSMSAuth']} elementConfig={{ 'before-content': 'Confirm' }}>Confirm</Button>
    </form>
  </div>
);

export default changePass;
