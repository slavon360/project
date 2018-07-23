import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Input from '../../UI/Input';
import Button from '../../UI/Button';
import classes from './GoogleAuthSecret.css';

const googleAuthSecret = props => (
  <form className={classes.GoogleFormWrp} >
    <h2>Google Authentification</h2>
    <Input
      changeValue={event => props.setUsersData(event, 'googleAuthSecretCode')}
      value={props.usersData.googleAuthSecretCode}
      wrpClasses={cx('GoogleInputWrp', { GoogleInputWrpRaised: props.usersData.googleAuthSecretCode }).split(' ')}
      elementType={'input'}
      elementConfig={{ placeholder: 'Please enter your Secret Code', type: 'password', label: 'Please enter your Secret Code' }}
    />
    <div className={classes.Footer}>
      <div className={classes.Tip}>
        <div className={classes.NotOnBithela}><a href="/register">Back</a></div>
      </div>
      <Button
        btnClasses={['LoginButton']}
        elementConfig={{ 'before-content': 'Send' }}
      >
      Send
        <div className={classes.LoginBtnInnerWrp}>
          <span className={classes.LoginBtnInner}>Send</span>
        </div>
      </Button>
    </div>
  </form>
);

export default googleAuthSecret;

googleAuthSecret.propTypes = {
  usersData: PropTypes.shape({
    email: PropTypes.string,
    password: PropTypes.string,
    smsCode: PropTypes.string,
    googleAuthSecretCode: PropTypes.string,
  }),
  setUsersData: PropTypes.func,
};
