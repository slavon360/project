import React, { Component } from 'react';
import { connect } from 'react-redux';
import { transactions } from '../../../dumpData.json';
import Transactions from '../../components/Transactions';
import DepositWithdraw from '../../components/DepositWithdrawComponent';
import * as actionTypes from '../../actions/actionTypes';
import * as actions from '../../actions';
import classes from './Withdraw.css';

class Withdraw extends Component {
  state = {
    transactions,
  }

  componentDidMount() {
    this.props.depositWithdrawSwitch(actionTypes.WITHDRAW);
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
    const updWithdrawData = { ...this.state.withdrawData };
    updWithdrawData.showDpDwn = !updWithdrawData.showDpDwn;
    global.console.log(updWithdrawData);
    this.setState({ withdrawData: updWithdrawData });
  }
  hideCurrencyDropdown = () => {
    const updWithdrawData = { ...this.state.withdrawData };
    updWithdrawData.showDpDwn = false;
    this.setState({ withdrawData: updWithdrawData });
  }
  selectCurrency = () => {

  }
  render() {
    return (
      <div className={classes.WithdrawWrp}>
        <DepositWithdraw
          data={this.props.withdrawData}
          hideShowCurrencyDropdown={this.props.hideShowCurrencyDropdown}
          hideCurrencyDropdown={this.props.hideCurrencyDropdown}
          selectCurrency={this.selectCurrency}
          changeInputsValue={this.props.changeInputsValue}
          setValueToMax={this.props.setValueToMax}
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
  withdrawData: state.depositWithdraw.currencyData,
});

const mapDispatchToProps = dispatch => ({
  depositWithdrawSwitch: value => dispatch(actions.depositWithdrawSwitch(value)),
  hideShowCurrencyDropdown: () => dispatch(actions.hideShowCurrencyDropdown()),
  hideCurrencyDropdown: () => dispatch(actions.hideCurrencyDropdown()),
  buildInteractiveView: () => dispatch(actions.buildInteractiveView()),
  changeInputsValue: (event, key) => dispatch(actions.changeInputsValue(event, key)),
  setValueToMax: (value, key) => dispatch(actions.setValueToMax(value, key)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Withdraw);
