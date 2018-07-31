import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Input from '../../UI/Input';
import Button from '../../UI/Button';
import classes from './SmsAuth.css';

const smsAuth = props => (
  <form className={classes.SmsFormWrp} >
    <h2>SMS Authentification</h2>
    <Input
      changeValue={event => props.setUsersData(event, 'smsCode')}
      value={props.usersData.smsCode}
      wrpClasses={cx('SmsInputWrp', { SmsInputWrpRaised: props.usersData.smsCode }).split(' ')}
      elementType={'input'}
      elementConfig={{ placeholder: 'Enter your SMS code', type: 'text', label: 'Enter your SMS code' }}
      optionalLabels={{ second: props.usersData.smsCodeWrong ? 'Wrong code' : null }}
    />
    <div className={classes.Footer}>
      <div className={classes.Tip}>
        <div className={classes.NotOnBithela}><a href="/bithela/sms-auth">Resend SMS code</a></div>
      </div>
      <Button
        btnClasses={['LoginButton']}
        elementConfig={{ 'before-content': 'Submit' }}
      >
        <a
          href="/bithela/sms-auth-error"
          className={classes.LoginBtnInnerWrp}
        >
          Submit
        </a>
      </Button>
    </div>
  </form>
);

export default smsAuth;

smsAuth.propTypes = {
  usersData: PropTypes.shape({
    email: PropTypes.string,
    password: PropTypes.string,
    smsCode: PropTypes.string,
  }),
  setUsersData: PropTypes.func,
};
