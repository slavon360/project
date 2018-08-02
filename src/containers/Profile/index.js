import React, { Component } from 'react';
import { balances, userData } from '../../../dumpData.json';
import { propertiesExtractor } from '../../shared/utility';
import Checked from '../../components/UI/Icons/Checked';
import UserStatus from '../../components/User/UserStatus';
import UserStage from '../../components/User/UserStage';
import Balances from '../../components/Transactions';
import Modal from '../../components/UI/Modal';
import ChangePassword from '../../components/Modals/ChangePassword';
import EnableSMSAuthenticator from '../../components/Modals/EnableSMSAuthenticator';
import DisableSMSAuthenticator from '../../components/Modals/DisableSMSAuthenticator';
import DisableGoogleAuth from '../../components/Modals/DisableGoogleAuth';
import AuthenticatorSupport from '../../components/Modals/AuthenticatorSupport';
import InteractiveBlock from '../../components/InteractiveBlock';
import classes from './Profile.css';

class Profile extends Component {
  state = {
    showPhoneNumbers: false,
    activeModal: null,
    activeModalClasses: null,
    balances,
    balancesToShow: null,
    viewAll: false,
    userData,
    stages: null,
    inputsData: {
      currentPassword: '',
      newPassword: '',
      confirmNewPassword: '',
      authCode: '',
    },
  }

  componentWillMount() {
    let stages = [];
    const necessaryKeys = 'User details,Address,Bank';
    stages = propertiesExtractor(this.state.userData, necessaryKeys, [], true);
    this.setState({ balancesToShow: this.state.balances.slice(0, 3), stages });
  }

  setInputsData = (event, dataKey) => {
    const updInputsData = { ...this.state.inputsData };
    updInputsData[dataKey] = event.target.value;
    this.setState({ inputsData: updInputsData });
  }

  viewAll = () => {
    if (!this.state.viewAll) {
      this.setState({ balancesToShow: [...this.state.balances], viewAll: true });
    } else {
      this.setState({ balancesToShow: this.state.balances.slice(0, 3), viewAll: false });
    }
  }
  updateTwoFactorAuth = (index, innerIndex) => {
    const updatedAuth = this.state.userData.twoFactorAuthentication.slice();
    const currentAuth = updatedAuth[index][innerIndex];
    let activeModal = null;
    let activeModalClasses = null;
    currentAuth.checked = !updatedAuth[index][2].checked;
    if (currentAuth.kind === 'SMSAuthenticator') {
      activeModal = !currentAuth.checked ? 'EnableSMSAuthenticator' : 'DisableSMSAuthenticator';
      activeModalClasses = !currentAuth.checked ? ['EnableSMSAuthenticatorModal'] : ['DisableSMSAuthenticatorModal'];
    } else if (currentAuth.kind === 'GoogleAuthenticator') {
      activeModal = !currentAuth.checked ? 'AuthenticatorSupport' : 'DisableGoogleAuth';
      activeModalClasses = !currentAuth.checked ? ['EnableAuthSupportModal'] : ['DisableGoogleModalWrp'];
    }
    const updUserData = { ...this.state.userData };
    updUserData.twoFactorAuthentication = updatedAuth;
    this.setState({ userData: updUserData, activeModal, activeModalClasses });
  }
  changeLoginPassword = (index, i, activeModal) => {
    this.setState({ activeModal, activeModalClasses: ['ChangePasswordModal'] });
  };
  closeModal = () => {
    this.setState({ activeModal: null });
  }
  hideShowPhoneNumbers = () => {
    this.setState(prevState => ({ showPhoneNumbers: !prevState.showPhoneNumbers }));
  }
  hidePhoneNumbers = () => {
    this.setState({ showPhoneNumbers: false });
  }
  render() {
    global.console.log(this.state);
    const { activeModal, activeModalClasses, inputsData } = this.state;
    let modal = null;
    switch (activeModal) {
      case 'ChangePassword':
        modal = (<ChangePassword
          changeValue={this.setInputsData}
          inputsData={inputsData}
        />);
        break;
      case 'EnableSMSAuthenticator':
        modal = (<EnableSMSAuthenticator
          showPhoneNumbers={this.state.showPhoneNumbers}
          hideShowPhoneNumbers={this.hideShowPhoneNumbers}
          hidePhoneNumbers={this.hidePhoneNumbers}
        />);
        break;
      case 'DisableSMSAuthenticator':
        modal = <DisableSMSAuthenticator />;
        break;
      case 'AuthenticatorSupport':
        modal = <AuthenticatorSupport />;
        break;
      case 'DisableGoogleAuth':
        modal = <DisableGoogleAuth />;
        break;
      default:
        modal = null;
    }
    const stages = this.state.stages.map((stage, index) => {
      const updStage = { ...stage };
      if (stage.verified) {
        updStage.color = '#6bcc00';
        updStage.borderColor = '#6bcc00';
        updStage.icon = <Checked styles={{ width: '8px', height: '7px', fill: '#6bcc00', marginLeft: '8px' }} />;
      }
      if (stage.isBeingVerified) {
        updStage.color = '#627eea';
        updStage.borderColor = '#c6c6c6';
      }
      if (stage.notVerified) {
        updStage.color = '#83878c';
        updStage.borderColor = '#c6c6c6';
      }
      return (
        <UserStage
          key={index}
          stage={updStage}
          number={index + 1}
        />
      );
    });

    return (
      <div className={classes.ProfileWrp}>
        {modal ? <Modal
          wrpClasses={activeModalClasses}
          closeModal={this.closeModal}
          modalContent={modal}
        /> : null }
        <div className={classes.Head}>
          <div className={classes.UserStatus}>
            <UserStatus userData={this.state.userData} />
          </div>
          <div className={classes.Stages}>
            {stages}
          </div>
        </div>
        <div className={classes.Balances_InteractiveBlocks_Wrp}>
          <div className={classes.BalancesWrp}>
            <Balances
              headData={[{ title: 'Balances' }]}
              propNames={['icon', 'currency', 'bal', 'fiat']}
              bodyData={this.state.balancesToShow}
              viewAll={this.viewAll}
              viewAllText="View all Balances"
              viewAllLink="/bithela/balances"
              expanded={this.state.viewAll}
            />
          </div>
          <div className={classes.InteractiveBlocksWrp}>
            <InteractiveBlock
              header="Two-factor Authentication"
              rows={this.state.userData.twoFactorAuthentication}
              wrpClass="TwoFactorAuthentication"
              switch={this.updateTwoFactorAuth}
            />
            <InteractiveBlock
              header="Login Password"
              rows={this.state.userData.loginPassword}
              wrpClass="LoginPassword"
              switch={(index, i) => this.changeLoginPassword(index, i, 'ChangePassword')}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
