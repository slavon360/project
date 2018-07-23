import React, { Component } from 'react';
import LoginBackground from '../../components/Login/LoginBackground';
import DynamicForm from '../../components/Login/DynamicForm';
import LoginForm from '../../components/Login/LoginForm';
// import SmsAuth from '../../components/Login/SmsAuth';
// import GoogleAuth from '../../components/Login/GoogleAuth';
// import GoogleAuthSecret from '../../components/Login/GoogleAuthSecret';
import classes from './Login.css';
import backgroundImg from '../../../assets/images/backgrounds/background_login.jpg';

class Login extends Component {
  state = {
    usersData: {
      email: '',
      password: '',
      smsCode: '',
      smsCodeWrong: true,
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
        <LoginForm
          usersData={this.state.usersData}
          setUsersData={this.setUsersData}
        />
      </DynamicForm>
    </div>);
  }
}

export default Login;
