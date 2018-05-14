import React, { Component } from 'react';
import { balances, userData } from '../../../dumpData.json';
import { propertiesExtractor } from '../../shared/utility';
import Checked from '../../components/UI/Icons/Checked';
import UserStatus from '../../components/User/UserStatus';
import UserStage from '../../components/User/UserStage';
import Balances from '../../components/Transactions';
import InteractiveBlock from '../../components/InteractiveBlock';
import classes from './Profile.css';

class Profile extends Component {
  state = {
    balances,
    balancesToShow: null,
    viewAll: false,
    userData,
    stages: null,
  }

  componentWillMount() {
    let stages = [];
    const necessaryKeys = 'User details,Address,Bank';
    stages = propertiesExtractor(this.state.userData, necessaryKeys, [], true);
    this.setState({ balancesToShow: this.state.balances.slice(0, 3), stages });
  }

  viewAll = () => {
    !this.state.viewAll
      ? this.setState({ balancesToShow: [...this.state.balances], viewAll: true })
      : this.setState({ balancesToShow: this.state.balances.slice(0, 3), viewAll: false });
  }

  render() {
    const stages = this.state.stages.map((stage, index) => {
      const updStage = { ...stage };
      stage.status === 'Verified' && (updStage.color = '#6bcc00') && (updStage.borderColor = '#6bcc00')
      && (updStage.icon = <Checked styles={{ width: '8px', height: '7px', fill: '#6bcc00', marginLeft: '8px' }}/>);
      stage.status === 'Is being verified' && (updStage.color = '#627eea') && (updStage.borderColor = '#c6c6c6');
      stage.status === 'Not verified' && (updStage.color = '#83878c') && (updStage.borderColor = '#c6c6c6');
      return (
        <UserStage
          key={index}
          stage={updStage}
          number={index + 1}
        />
      );
    });

    console.log(this.state);
    return (
      <div className={classes.ProfileWrp}>
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
              expanded={this.state.viewAll}
            />
          </div>
          <div className={classes.InteractiveBlocksWrp}>
            <InteractiveBlock
              header="Two-factor Authentication"
              rows={this.state.userData.twoFactorAuthentication}
              wrpClass="TwoFactorAuthentication"
            />
            <InteractiveBlock
              header="Login Password"
              rows={this.state.userData.loginPassword}
              wrpClass="LoginPassword"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
