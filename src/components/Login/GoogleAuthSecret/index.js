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
        <div className={classes.NotOnBithela}><a href="/bithela/google-auth">Back</a></div>
      </div>
      <Button
        btnClasses={['LoginButton']}
      >
        <a
          className={classes.LoginBtnInnerWrp}
        >
          Submit
        </a>
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
