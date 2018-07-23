import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Input from '../../UI/Input';
import Button from '../../UI/Button';
import classes from './LoginForm.css';

const loginForm = props => (
  <form className={classes.LoginFormWrp} >
    <Input
      changeValue={event => props.setUsersData(event, 'email')}
      value={props.usersData.email}
      wrpClasses={cx('LoginInputWrp', { LoginInputWrpRaised: props.usersData.email }).split(' ')}
      elementType={'input'}
      elementConfig={{ placeholder: 'Email', type: 'email', label: 'Email' }}
    />
    <Input
      changeValue={event => props.setUsersData(event, 'password')}
      value={props.usersData.password}
      wrpClasses={cx('LoginInputWrp', { LoginInputWrpRaised: props.usersData.password }).split(' ')}
      elementType={'input'}
      elementConfig={{ placeholder: 'Password', type: 'password', label: 'Password' }}
    />
    <div className={classes.Footer}>
      <div className={classes.Tip}>
        <div className={classes.Forgot}><a href="/forgot-password">Forgot Password?</a></div>
        <div className={classes.NotOnBithela}>Not on Bithela yet? <a href="register">Register</a></div>
      </div>
      <Button
        btnClasses={['LoginButton']}
        elementConfig={{ 'before-content': 'Login' }}
      >
      Login
        <div className={classes.LoginBtnInnerWrp}>
          <span className={classes.LoginBtnInner}>Login</span>
        </div>
      </Button>
    </div>
  </form>
);

export default loginForm;

loginForm.propTypes = {
  usersData: PropTypes.shape({
    email: PropTypes.string,
    password: PropTypes.string,
    repeatPassword: PropTypes.string,
    terms: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.bool,
    ]),
  }),
  setUsersData: PropTypes.func,
};
