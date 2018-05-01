import React, { Component } from 'react';
import Transactions from '../../components/Transactions';
import classes from './Deposit.css';

class Deposit extends Component{
    state = {
      transactions: [],
      headBody: [
        {status: 'Status', currency: 'ETH', amount: '25.365469', date: '01 Dec 2017 12:27 am'},
        {status: 'Status', currency: 'BTC', amount: '235.974', date: '01 Dec 2017 12:27 am'},
        {status: 'Status', currency: 'AUD', amount: '1205.00', date: '01 Dec 2017 12:27 am'},
        {status: 'Status', currency: 'XRP', amount: '25.365469', date: '01 Dec 2017 12:27 am'},
        {status: 'Status', currency: 'ETH', amount: '25.365469', date: '01 Dec 2017 12:27 am'},
        {status: 'Status', currency: 'ETH', amount: '25.365469', date: '01 Dec 2017 12:27 am'},
        {status: 'Status', currency: 'ETH', amount: '25.365469', date: '01 Dec 2017 12:27 am'}
      ]
    }
    render(){
      <div className={classes.DepositWrp}>
        <Transactions
          propNames={['status', 'currency', 'amount', 'date', 'address', 'xid']}
          headData={['History']}
          headBody={this.state.headBody}
          />
      </div>
    }
}

export default Deposit;
