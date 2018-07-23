import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Input from '../../UI/Input';
import Button from '../../UI/Button';
import classes from './GoogleAuth.css';

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
        <div className={classes.NotOnBithela}><a href="/register">Lost Your Google Authentification?</a></div>
      </div>
      <Button
        btnClasses={['LoginButton']}
        elementConfig={{ 'before-content': 'Submit' }}
      >
      Submit
        <div className={classes.LoginBtnInnerWrp}>
          <span className={classes.LoginBtnInner}>Submit</span>
        </div>
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
