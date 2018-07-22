import React, { Component } from 'react';
import LoginBackground from '../../components/Login/LoginBackground';
import RegisterForm from '../../components/Register/RegisterForm';
import DynamicForm from '../../components/Login/DynamicForm';
import classes from './Register.css';
import backgroundImg from '../../../assets/images/backgrounds/background_login.jpg';

class Login extends Component {
  state = {
    usersData: {
      email: '',
      password: '',
      repeatPassword: '',
      terms: false,
    },
  }

  setUsersData = (event, dataKey) => {
    const updUsersData = { ...this.state.usersData };
    updUsersData[dataKey] = dataKey === 'terms' ? !updUsersData[dataKey] : event.target.value;
    this.setState({ usersData: updUsersData });
  }

  render() {
    global.console.log(this.state);
    return (<div className={classes.RegisterWrp}>
      <LoginBackground
        head="Welcome to "
        title="Bithela"
        text="Register to access your account"
        backgroundImage={backgroundImg}
      />
      <DynamicForm
        setUsersData={this.setUsersData}
        usersData={this.state.usersData}
      >
        <RegisterForm
          usersData={this.state.usersData}
          setUsersData={this.setUsersData}
        />
      </DynamicForm>
    </div>);
  }
}

export default Login;
