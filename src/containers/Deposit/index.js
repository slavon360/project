import React, { Component } from 'react';
import Transactions from '../../components/Transactions';
import DepositWithdraw from '../../components/DepositWithdrawComponent';
import classes from './Deposit.css';

class Deposit extends Component{
    state = {
      depositData: {
        title: 'Deposit',
        type: 'Deposits',
        selectedCurrency: {title: 'ETH Ethereum', balance: '1.210265', icon: require('../../assets/images/coins/ethereum.png')},
        currencies: [
          {currency: 'BTC Bitcoin', balance: '1.2102', icon: require('../../assets/images/coins/Bitcoin.svg')},
          {currency: 'ETH Ethereum', balance: '0.00', icon: require('../../assets/images/coins/ethereum.png')},
          {currency: 'AUD Australian Dollar', balance: '300256.36', icon: require('../../assets/images/coins/Bitcoin.svg')},
          {currency: 'XRP Ripple', balance: '23.236547', icon: require('../../assets/images/coins/Ripple-logo.png')},
          {currency: 'AION Aion', balance: '0.00', icon: require('../../assets/images/coins/AION.jpg')},
          {currency: 'BNB Binance', balance: '300256.36', icon: require('../../assets/images/coins/binance-coin.svg')},
          {currency: 'OMG Omise Go', balance: '1.210265', icon: require('../../assets/images/coins/omise-go.png')},
          {currency: 'QSP Quantstamp', balance: '0.00', icon: require('../../assets/images/coins/quantstamp-logo.jpg')},
          {currency: 'DOGE Dogecoin', balance: '300256.36', icon: require('../../assets/images/coins/doge.svg')}
        ]
      },
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
          xid: '2833739y3844772i20394he4587',
          checked: false
        },
        {
          status: 'Status',
          currency: 'AUD',
          amount: '1205.00',
          date: '01 Dec 2017 12:27 am',
          address: 'mdfnf8644herjb3jdp',
          xid: '6635d28ca7a425249a7e0acfb3c0ec84fa731ece5067149718a3b962b1fcc3e7',
          checked: false
        },
        {
          status: 'Status',
          currency: 'XRP',
          amount: '25.365469',
          date: '01 Dec 2017 12:27 am',
          address: 'mdfnf8644herjb3jdp',
          xid: '6635d28ca7a425249a7e0acfb3c0ec84fa731ece5067149718a3b962b1fcc3e7',
          checked: false
        },
        {
          status: 'Status',
          currency: 'OMG',
          amount: '25.365469',
          date: '01 Dec 2017 12:27 am',
          address: 'mdfnf8644herjb3jdp',
          xid: '6635d28ca7a425249a7e0acfb3c0ec84fa731ece5067149718a3b962b1fcc3e7',
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
                <DepositWithdraw data={} />
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
