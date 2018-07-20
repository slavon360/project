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

// import Login from './containers/Login';

import TermsOfUse from './components/TermsOfUse';
import BuySell from './containers/BuySell';
import Balances from './containers/Balances';
import Deposit from './containers/Deposit';
import Withdraw from './containers/Withdraw';
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
            <Route path="/withdraw" component={Withdraw} />
            <Route path="/send-request" component={SendRequest} />
            <Route path="/help" component={Faq} />
            <Route path="/profile" component={Profile} />
            <Route path="/verification" component={Verification} />
            <Redirect to="/buy-sell" />
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default withRouter(App);
