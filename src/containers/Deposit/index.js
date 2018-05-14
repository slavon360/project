import React, { Component } from 'react';
import { connect } from 'react-redux';
import Transactions from '../../components/Transactions';
import DepositWithdraw from '../../components/DepositWithdrawComponent';
import * as actionTypes from '../../actions/actionTypes';
import * as actions from '../../actions';
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
      this.props.depositWithdrawSwitch(actionTypes.DEPOSIT);
      this.props.buildInteractiveView();
    }
    showMore = (transaction) => {
      let updTransactions = [...this.state.transactions];
      updTransactions = updTransactions.map((trans) => {
        trans.checked = (trans.currency === transaction.currency && !trans.checked) ? true : false;
        return trans;
      })
      this.setState({transactions: updTransactions});
    }
    hideShowCurrencyDropdown = () => {
      let updDepositData = {...this.state.depositData};
      updDepositData.showDpDwn = updDepositData.showDpDwn ? false : true;
      this.setState({depositData: updDepositData});
    }
    hideCurrencyDropdown = () => {
      let updDepositData = {...this.state.depositData};
      updDepositData.showDpDwn = false;
      this.setState({depositData: updDepositData});
    }
    selectCurrency = () => {

    }
    render(){
      return (<div className={classes.DepositWrp}>
                <DepositWithdraw
                  data={this.props.depositData}
                  hideShowCurrencyDropdown={this.props.hideShowCurrencyDropdown}
                  hideCurrencyDropdown={this.props.hideCurrencyDropdown}
                  selectCurrency={this.selectCurrency}
                  changeInputsValue={this.props.changeInputsValue}
                  copyAddress={this.props.copyAddress}/>
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
      depositData: state.depositWithdraw.currencyData
    }
}
const mapDispatchToProps = dispatch => {
    return {
      depositWithdrawSwitch: (value) => dispatch(actions.depositWithdrawSwitch(value)),
      hideShowCurrencyDropdown: () => dispatch(actions.hideShowCurrencyDropdown()),
      hideCurrencyDropdown: () => dispatch(actions.hideCurrencyDropdown()),
      buildInteractiveView: () => dispatch(actions.buildInteractiveView()),
      changeInputsValue: (event, key) => dispatch(actions.changeInputsValue(event, key)),
      copyAddress: () => {
        dispatch(actions.copyAddress());
        dispatch(actions.buildInteractiveView());
      }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Deposit);
