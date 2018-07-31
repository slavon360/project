import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Input from '../../UI/Input';
import Button from '../../UI/Button';
import Checked from '../../UI/Icons/Checked';
import classes from './RegisterForm.css';

const registerForm = props => (
  <form className={classes.RegisterFormWrp} >
    <Input
      changeValue={event => props.setUsersData(event, 'email')}
      value={props.usersData.email}
      wrpClasses={cx('RegisterInputWrp', { RegisterInputWrpRaised: props.usersData.email }).split(' ')}
      elementType={'input'}
      elementConfig={{ placeholder: 'Email', type: 'email', label: 'Email' }}
    />
    <Input
      changeValue={event => props.setUsersData(event, 'password')}
      value={props.usersData.password}
      wrpClasses={cx('RegisterInputWrp', { RegisterInputWrpRaised: props.usersData.password }).split(' ')}
      elementType={'input'}
      elementConfig={{ placeholder: 'Password', type: 'password', label: 'Password' }}
    />
    <Input
      changeValue={event => props.setUsersData(event, 'repeatPassword')}
      value={props.usersData.repeatPassword}
      wrpClasses={cx('RegisterInputWrp', { RegisterInputWrpRaised: props.usersData.repeatPassword }).split(' ')}
      elementType={'input'}
      elementConfig={{ placeholder: 'Repeat Password', type: 'password', label: 'Repeat Password' }}
    />
    <Input
      changeValue={event => props.setUsersData(event, 'terms')}
      value={props.usersData.terms}
      wrpClasses={['RegisterTermsOfUse']}
      elementType={'input'}
      optionalLabels={{ second: <span>{"I agree to Bithela's "}<a href="terms">Terms of Use</a></span>,
        third: <Checked styles={{ width: '12px', height: '10px', fill: '#fff' }} /> }}
      elementConfig={{ type: 'checkbox', id: 'terms' }}
    />
    <div className={classes.Footer}>
      <div className={classes.Tip}>
        <div className={classes.NotOnBithela}>Already Registered? <a href="/bithela/login">Login</a></div>
      </div>
      <Button
        clicked={props.registerHandler}
        btnClasses={['LoginButton']}
        elementConfig={{ 'before-content': 'Register', type: 'button' }}
      >
        <a>Register</a>
      </Button>
    </div>
  </form>
);

export default registerForm;

registerForm.propTypes = {
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
  registerHandler: PropTypes.func,
};
