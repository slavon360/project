import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Button from '../../UI/Button';
import Input from '../../UI/Input';
import classes from './ChangePassword.css';

const changePass = props => (
  <div className={classes.ChangePasswordWrp}>
    <h2>Change Password</h2>
    <form className={classes.ChangePasswordForm}>
      {
        props.authCode ? <Input
          value={props.inputsData.authCode}
          wrpClasses={['AuthentCode']}
          elementConfig={{ type: 'text', placeholder: 'Enter authenticator code' }}
          elementType="input"
        /> :
          (<Fragment>
            <Input
              changeValue={event => props.changeValue(event, 'currentPassword')}
              value={props.inputsData.currentPassword}
              wrpClasses={cx('CurrentPassword ChangePasswordInputWrp', { ChangePasswordInputWrpRaised: props.inputsData.currentPassword }).split(' ')}
              elementConfig={{ type: 'password', placeholder: 'Enter your current password', label: 'Enter your current password' }}
              elementType="input"
            />
            <Input
              changeValue={event => props.changeValue(event, 'newPassword')}
              value={props.inputsData.newPassword}
              wrpClasses={cx('NewPassword ChangePasswordInputWrp', { ChangePasswordInputWrpRaised: props.inputsData.newPassword }).split(' ')}
              elementConfig={{ type: 'password', placeholder: 'Enter new password', label: 'Enter new password' }}
              elementType="input"
            />
            <Input
              changeValue={event => props.changeValue(event, 'confirmNewPassword')}
              value={props.inputsData.confirmNewPassword}
              wrpClasses={cx('ConfirmNewPassword ChangePasswordInputWrp', { ChangePasswordInputWrpRaised: props.inputsData.confirmNewPassword }).split(' ')}
              elementConfig={{ type: 'password', placeholder: 'Confirm new password', label: 'Confirm new password' }}
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

changePass.propTypes = {
  inputsData: PropTypes.shape({
    authCode: PropTypes.string,
    currentPassword: PropTypes.string,
    newPassword: PropTypes.string,
    confirmNewPassword: PropTypes.string,
  }),
};
