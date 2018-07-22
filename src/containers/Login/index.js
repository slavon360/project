import React, { Component } from 'react';
import LoginBackground from '../../components/Login/LoginBackground';
import DynamicForm from '../../components/Login/DynamicForm';
import classes from './Login.css';
import backgroundImg from '../../../assets/images/backgrounds/background_login.jpg';

class Login extends Component {
  state = {
    usersData: {
      email: '',
      password: '',
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
      />
    </div>);
  }
}

export default Login;
