import React, { Component } from 'react';
import { connect } from 'react-redux';
import Transactions from '../../components/Transactions';
import DepositWithdraw from '../../components/DepositWithdrawComponent';
import InputsBlock from '../../components/InputsBlock';
import * as actionTypes from '../../store/actions/actionTypes';
import * as actions from '../../store/actions';
import classes from './Withdraw.css';

class Withdraw extends Component{
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
    componentDidMount(){
      this.props.depositWithdrawSwitch(actionTypes.WITHDRAW);
    }
    showMore = (transaction) => {
      let updTransactions = [...this.state.transactions];
      updTransactions = updTransactions.map((trans) => {
        trans.checked = (trans.currency === transaction.currency && !trans.checked) ? true : false;
        return trans;
      })
      this.setState({transactions: updTransactions});
    }
    selectCurrency = () => {

    }
    render(){
      console.log(this.props.withdrawData.title)
      return (<div className={classes.WithdrawWrp}>
                <DepositWithdraw
                  data={this.props.withdrawData}
                  hideShowCurrencyDropdown={this.props.hideShowCurrencyDropdown}
                  hideCurrencyDropdown={this.props.hideCurrencyDropdown}
                  selectCurrency={this.selectCurrency}/>
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

const mapStateToProps = state => {
    return {
      withdrawData: state.depositWithdraw.currencyData
    }
}
const mapDispatchToProps = dispatch => {
    return {
      depositWithdrawSwitch: (value) => dispatch(actions.depositWithdrawSwitch(value)),
      hideShowCurrencyDropdown: () => dispatch(actions.hideShowCurrencyDropdown()),
      hideCurrencyDropdown: () => dispatch(actions.hideCurrencyDropdown())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Withdraw);
