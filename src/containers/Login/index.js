import React, { Component } from 'react';
import LoginBackground from '../../components/Login/LoginBackground';
import DynamicForm from '../../components/Login/DynamicForm';
import classes from './Login.css';
import backgroundImg from '../../../assets/images/backgrounds/background_login.jpg';

class Login extends Component {
  render() {
    return (<div className={classes.LoginWrp}>
      <LoginBackground
        head="Welcome to "
        title="Bithela"
        text="Login to access your account"
        backgroundImage={backgroundImg}
      />
      <DynamicForm />
    </div>);
  }
}

export default Login;
