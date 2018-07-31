import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Input from '../../UI/Input';
import Button from '../../UI/Button';
import classes from './GoogleAuthError.css';

const googleAuth = props => (
  <form className={classes.GoogleFormWrp} >
    <h2>Google Authentification</h2>
    <Input
      changeValue={event => props.setUsersData(event, 'googleAuthCode')}
      value={props.usersData.googleAuthCode}
      wrpClasses={cx('GoogleInputWrp', { GoogleInputWrpRaised: props.usersData.googleAuthCode }).split(' ')}
      elementType={'input'}
      elementConfig={{ placeholder: 'Enter authenticator code', type: 'password', label: 'Enter authenticator code' }}
      optionalLabels={{ second: props.usersData.googleAuthCodeWrong ? 'Wrong code' : null }}
    />
    <div className={classes.Footer}>
      <div className={classes.Tip}>
        <div className={classes.NotOnBithela}><a href="/bithela/google-auth-secret">Lost Your Google Authentification?</a></div>
      </div>
      <Button
        btnClasses={['LoginButton']}
        elementConfig={{ 'before-content': 'Submit' }}
      >
        <a
          href="/bithela/sms-auth"
          className={classes.LoginBtnInnerWrp}
        >
          Submit
        </a>
      </Button>
    </div>
  </form>
);

export default googleAuth;

googleAuth.propTypes = {
  usersData: PropTypes.shape({
    email: PropTypes.string,
    password: PropTypes.string,
    smsCode: PropTypes.string,
    googleAuthCode: PropTypes.string,
  }),
  setUsersData: PropTypes.func,
};
