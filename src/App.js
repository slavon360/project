import React, { Component } from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import Layout from './hoc/Layout';
// import Modal from './components/UI/Modal';

// import Welcome from './components/Modals/Welcome';

// import EnableSMSAuthenticator from './components/Modals/EnableSMSAuthenticator';

// import DisableSMSAuthenticator from './components/Modals/DisableSMSAuthenticator';

// import DisableGoogleAuth from './components/Modals/DisableGoogleAuth';

// import AuthenticatorSupport from './components/Modals/AuthenticatorSupport';

// import ChangePassword from './components/Modals/ChangePassword';

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
import SendRequest from './containers/SendRequest';
import Faq from './containers/FAQ';
import Profile from './containers/Profile';
import Verification from './containers/Verification';

import classes from './App.css';

class App extends Component {
  render() {
    return (
      <div className={classes.App}>
        <Layout>
          <Switch>
            <Route path="/buy-sell" component={BuySell} />
            <Route path="/terms" component={TermsOfUse} />
            <Route path="/balances" component={Balances} />
            <Route path="/deposit" component={Deposit} />
            <Route path="/bithela/deposit-dollar" component={DepositDollar} />
            <Route path="/bithela/deposit-dollar-2" component={DepositDollar2} />
            <Route path="/bithela/deposit-dollar-3" component={DepositDollar3} />
            <Route path="/withdraw" component={Withdraw} />
            <Route path="/withdraw-dollar" component={WithdrawDollar} />
            <Route path="/withdraw-dollar-2" component={WithdrawDollar2} />
            <Route path="/withdraw-dollar-3" component={WithdrawDollar3} />
            <Route path="/send-request" component={SendRequest} />
            <Route path="/help" component={Faq} />
            <Route path="/profile" component={Profile} />
            <Route path="/verification" component={Verification} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Redirect to="/buy-sell" />
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default withRouter(App);
