import React, { Component } from 'react';
// import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import Layout from './hoc/Layout';
// import Modal from './components/UI/Modal';

// import Welcome from './components/Modals/Welcome';

// import EnableSMSAuthenticator from './components/Modals/EnableSMSAuthenticator';

// import DisableSMSAuthenticator from './components/Modals/DisableSMSAuthenticator';

// import DisableGoogleAuth from './components/Modals/DisableGoogleAuth';

// import AuthenticatorSupport from './components/Modals/AuthenticatorSupport';

// import ChangePassword from './components/Modals/ChangePassword';
// import ThankModal from './components/Modals/ThankModal';
// import Login from './containers/Login';

import WithdrawDollar5 from './containers/Withdraw/Withdraw-dollar-5';
/*
import Register from './containers/Register';
import Login from './containers/Login';

import TermsOfUse from './components/TermsOfUse';
import BuySell from './containers/BuySell';
import Balances from './containers/Balances';
import Deposit from './containers/Deposit';
import DepositDollar from './containers/Deposit/Deposit-dollar';
import DepositDollar2 from './containers/Deposit/Deposit-dollar-2';
import DepositDollar3 from './containers/Deposit/Deposit-dollar-3';
import Withdraw from './containers/Withdraw';
import WithdrawDollar from './containers/Withdraw/Withdraw-dollar';
import WithdrawDollar2 from './containers/Withdraw/Withdraw-dollar-2';
import WithdrawDollar3 from './containers/Withdraw/Withdraw-dollar-3';
import WithdrawDollar4 from './containers/Withdraw/Withdraw-dollar-4';
import WithdrawDollar5 from './containers/Withdraw/Withdraw-dollar-5';
import SendRequest from './containers/SendRequest';
import Faq from './containers/FAQ';
import Profile from './containers/Profile';
import Verification from './containers/Verification';
import SuccessRequest from './containers/SuccessRequest';
*/
import classes from './App.css';

class App extends Component {
  render() {
    return (
      <div className={classes.App}>
        <Layout>
          <WithdrawDollar5 />
        </Layout>
      </div>
    );
  }
}

export default App;
