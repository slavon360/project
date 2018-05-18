import React, { Component } from 'react';
import { connect } from 'react-redux';
import { transactions, currencyData } from '../../../dumpData.json';
import Transactions from '../../components/Transactions';
import DepositWithdraw from '../../components/DepositWithdrawComponent';
import * as actionTypes from '../../actions/actionTypes';
import * as actions from '../../actions';
import classes from './Deposit.css';

class Deposit extends Component {
  state = {
    transactions,
    depositData: currencyData,
  };

  componentWillMount() {
    this.props.depositWithdrawSwitch(actionTypes.DEPOSIT);
    this.props.buildInteractiveView();
  }

  showMore = (transaction) => {
    let updTransactions = [...this.state.transactions];
    updTransactions = updTransactions.map(trans => ({
      ...trans,
      checked: trans.currency === transaction.currency && !trans.checked,
    }));
    this.setState({ transactions: updTransactions });
  }

  hideShowCurrencyDropdown = () => {
    const updDepositData = { ...this.state.depositData };
    updDepositData.showDpDwn = !updDepositData.showDpDwn;
    global.console.log(updDepositData);
    this.setState({ depositData: updDepositData });
  }

  hideCurrencyDropdown = () => {
    const updDepositData = { ...this.state.depositData };
    updDepositData.showDpDwn = false;
    this.setState({ depositData: updDepositData });
  }
    selectCurrency = () => {

    }
    render() {
      return (
        <div className={classes.DepositWrp}>
          <DepositWithdraw
            data={this.props.depositData}
            hideShowCurrencyDropdown={this.props.hideShowCurrencyDropdown}
            hideCurrencyDropdown={this.props.hideCurrencyDropdown}
            selectCurrency={this.selectCurrency}
            changeInputsValue={this.props.changeInputsValue}
            copyAddress={this.props.copyAddress}
          />
          <div className={classes.TableWrp}>
            <Transactions
              propNames={['status', 'currency', 'amount', 'date']}
              moreInfo={['address', 'xid']}
              headData={[{ title: 'History' }]}
              bodyData={this.state.transactions}
              showMore={this.showMore}
            />
          </div>
        </div>
      );
    }
}

const mapStateToProps = state => ({
  depositData: state.depositWithdraw.currencyData,
});

const mapDispatchToProps = dispatch => ({
  depositWithdrawSwitch: value => dispatch(actions.depositWithdrawSwitch(value)),
  hideShowCurrencyDropdown: () => dispatch(actions.hideShowCurrencyDropdown()),
  hideCurrencyDropdown: () => dispatch(actions.hideCurrencyDropdown()),
  buildInteractiveView: () => dispatch(actions.buildInteractiveView()),
  changeInputsValue: (event, key) => dispatch(actions.changeInputsValue(event, key)),
  copyAddress: () => {
    dispatch(actions.copyAddress());
    dispatch(actions.buildInteractiveView());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Deposit);
