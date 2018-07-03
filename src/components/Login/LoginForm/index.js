import React from 'react';
import Input from '../../UI/Input';
import Button from '../../UI/Button';
import classes from './LoginForm.css';

const loginForm = () => (
  <form className={classes.LoginFormWrp} >
    <Input
      wrpClasses={['LoginInputWrp']}
      elementType={'input'}
      elementConfig={{ placeholder: 'Email' }}
    />
    <Input
      wrpClasses={['LoginInputWrp']}
      elementType={'input'}
      elementConfig={{ placeholder: 'Password' }}
    />
    <div className={classes.Footer}>
      <div className={classes.Tip}>
        <div className={classes.Forgot}><a href="/forgot-password">Forgot Password?</a></div>
        <div className={classes.NotOnBithela}>Not on Bithela yet? <a href="/register">Register</a></div>
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
