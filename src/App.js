import React, { Component } from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import Layout from './hoc/Layout';
import BuySell from './containers/BuySell';
import './App.css';

class App extends Component {

  render() {
    let routes = (
        <Switch>
          <Route path='/buy-sell' component={BuySell} />
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
