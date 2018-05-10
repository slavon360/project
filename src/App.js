import React, { Component } from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import Layout from './hoc/Layout';
import BuySell from './containers/BuySell';
import Balances from './containers/Balances';
import Deposit from './containers/Deposit';
import Withdraw from './containers/Withdraw';
import SendRequest from './containers/SendRequest';
import Faq from './containers/FAQ';
import './App.css';

class App extends Component {

  render() {
    let routes = (
        <Switch>
          <Route path='/buy-sell' component={BuySell} />
          <Route path='/balances' component={Balances} />
          <Route path='/deposit' component={Deposit} />
          <Route path='/withdraw' component={Withdraw} />
          <Route path='/send-request' component={SendRequest} />
          <Route path='/help' component={Faq} />
          <Redirect to='/buy-sell' />
        </Switch>
    )
    return (
      <div className="App">
        <Layout>
          {routes}
        </Layout>
      </div>
    );
  }
}

export default withRouter(App);
