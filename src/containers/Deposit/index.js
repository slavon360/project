import React, { Component } from 'react';
import Transactions from '../../components/Transactions';
import classes from './Deposit.css';

class Deposit extends Component{
    state = {
      transactions: [
        {
          status: 'Status',
          currency: 'ETH',
          amount: '25.365469',
          date: '01 Dec 2017 12:27 am',
          address: 'mdfnf8644herjb3jdp',
          xid: '2833739y3844772i20394he3322',
          checked: false
        },
        {
          status: 'Status',
          currency: 'BTC',
          amount: '235.974',
          date: '01 Dec 2017 12:27 am',
          address: 'mdfnf8644herjb3jdp',
          xid: '2833739y3844772i20394he3322',
          checked: false
        },
        {
          status: 'Status',
          currency: 'AUD',
          amount: '1205.00',
          date: '01 Dec 2017 12:27 am',
          address: 'mdfnf8644herjb3jdp',
          xid: '2833739y3844772i20394he3322',
          checked: false
        },
        {
          status: 'Status',
          currency: 'XRP',
          amount: '25.365469',
          date: '01 Dec 2017 12:27 am',
          address: 'mdfnf8644herjb3jdp',
          xid: '2833739y3844772i20394he3322',
          checked: false
        },
        {
          status: 'Status',
          currency: 'OMG',
          amount: '25.365469',
          date: '01 Dec 2017 12:27 am',
          address: 'mdfnf8644herjb3jdp',
          xid: '2833739y3844772i20394he3322',
          checked: false
        },
        {
          status: 'Status',
          currency: 'BNB',
          amount: '25.365469',
          date: '01 Dec 2017 12:27 am',
          address: 'mdfnf8644herjb3jdp',
          xid: '2833739y3844772i20394he3322',
          checked: false
        },
        {
          status: 'Status',
          currency: 'AIO',
          amount: '25.365469',
          date: '01 Dec 2017 12:27 am',
          address: 'mdfnf8644herjb3jdp',
          xid: '2833739y3844772i20394he3322',
          checked: false
        }
      ]
    }
    showMore = (transaction) => {
      let updTransactions = [...this.state.transactions];
      updTransactions = updTransactions.map((trans) => {
        trans.checked = (trans.currency === transaction.currency && !trans.checked) ? true : false;
        return trans;
      })
      this.setState({transactions: updTransactions});
    }
    render(){
      return (<div className={classes.DepositWrp}>
                <div className={classes.TableWrp}>
                  <Transactions
                    propNames={['status', 'currency', 'amount', 'date']}
                    moreInfo={['address', 'xid']}
                    headData={[{title: 'History'}]}
                    bodyData={this.state.transactions}
                    showMore={this.showMore}
                    />
                </div>
              </div>)
    }
}

export default Deposit;
