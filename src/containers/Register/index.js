import React, { Component } from 'react';
import Modal from '../../components/UI/Modal';
import ThankModal from '../../components/Modals/ThankModal';
import LoginBackground from '../../components/Login/LoginBackground';
import RegisterForm from '../../components/Register/RegisterForm';
import DynamicForm from '../../components/Login/DynamicForm';
import classes from './Register.css';
import backgroundImg from '../../../assets/images/backgrounds/background_login.jpg';

class Register extends Component {
  state = {
    showModal: false,
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

  registerHandler = () => this.setState({ showModal: true });

  closeModal = () => this.setState({ showModal: false });

  render() {
    global.console.log(this.state);
    const modal = this.state.showModal ? (<Modal
      wrpClasses={['ThankModalWrp']}
      closeModal={this.closeModal}
      modalContent={<ThankModal />}
    />) : null;
    return (<div className={classes.RegisterWrp}>
      {modal}
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
          registerHandler={this.registerHandler}
        />
      </DynamicForm>
    </div>);
  }
}

export default Register;
