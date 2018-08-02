import React, { Component } from 'react';
import LoginBackground from '../../components/Login/LoginBackground';
import DynamicForm from '../../components/Login/DynamicForm';
// import LoginForm from '../../components/Login/LoginForm';
// import SmsAuth from '../../components/Login/SmsAuth';
// import SmsAuthError from '../../components/Login/SmsAuthError';
// import GoogleAuth from '../../components/Login/GoogleAuth';
// import GoogleAuthError from '../../components/Login/GoogleAuthError';
import GoogleAuthSecret from '../../components/Login/GoogleAuthSecret';
import classes from './Login.css';
import backgroundImg from '../../../assets/images/backgrounds/background_login.jpg';

class Login extends Component {
  state = {
    usersData: {
      email: '',
      password: '',
      smsCode: '',
      smsCodeWrong: false,
      googleAuthCode: '',
      googleAuthCodeWrong: true,
      googleAuthSecretCode: '',
    },
  }

  setUsersData = (event, dataKey) => {
    const updUsersData = { ...this.state.usersData };
    updUsersData[dataKey] = event.target.value;
    this.setState({ usersData: updUsersData });
  }

  render() {
    global.console.log(this.state);
    return (<div className={classes.LoginWrp}>
      <LoginBackground
        head="Welcome to "
        title="Bithela"
        text="Login to access your account"
        backgroundImage={backgroundImg}
      />
      <DynamicForm
        setUsersData={this.setUsersData}
        usersData={this.state.usersData}
      >
        <GoogleAuthSecret
          usersData={this.state.usersData}
          setUsersData={this.setUsersData}
        />
      </DynamicForm>
    </div>);
  }
}

export default Login;
