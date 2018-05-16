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
    updTransactions = updTransactions.map((trans) => {
      const updTrans = { ...trans };
      updTrans.checked = (trans.currency === transaction.currency && !trans.checked);
      return updTrans;
    });
    this.setState({ transactions: updTransactions });
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
});

export default connect(mapStateToProps, mapDispatchToProps)(Withdraw);
