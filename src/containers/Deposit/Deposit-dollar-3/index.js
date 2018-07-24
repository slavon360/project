import React, { Component } from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames/bind';
import { transactions } from '../../../../dumpData.json';
import Transactions from '../../../components/Transactions';
import DepositWithdrawDollar3 from '../../../components/DepositWithdrawComponent/DepositWithdrawDollar-3';
import * as actionTypes from '../../../actions/actionTypes';
import * as actions from '../../../actions';
import classes from './Deposit-dollar-3.css';

const cx = classNames.bind(classes);

class Deposit extends Component {
  state = {
    transactions,
    mobileView: null,
    expandedTransactions: false,
  };

  componentWillMount() {
    this.props.depositWithdrawSwitch(actionTypes.DEPOSIT);
    this.props.buildInteractiveView();
    this.updateDimensions();
  }

  componentDidMount() {
    window.addEventListener('resize', this.updateDimensions);
  }

  componentWillUnmount = () => {
    window.removeEventListener('resize', this.updateDimensions);
  }

  updateDimensions = () => {
    if (window.innerWidth < 768 && !this.state.mobileView) this.setState({ mobileView: true });
    if (window.innerWidth >= 768 && this.state.mobileView) this.setState({ mobileView: false });
  }

  showMore = (transaction) => {
    let updTransactions = [...this.state.transactions];
    updTransactions = updTransactions.map(trans => ({
      ...trans,
      checked: trans.id === transaction.id && !trans.checked,
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

  viewAll = () => {
    this.setState(prevState => ({ expandedTransactions: !prevState.expandedTransactions }));
  }
  render() {
    return (
      <div className={classes.DepositWrp}>
        <DepositWithdrawDollar3
          data={this.props.depositData}
          hideShowCurrencyDropdown={this.props.hideShowCurrencyDropdown}
          hideCurrencyDropdown={this.props.hideCurrencyDropdown}
          selectCurrency={this.selectCurrency}
          changeInputsValue={this.props.changeInputsValue}
          copyAddress={this.props.copyAddress}
        />
        <div
          className={
            cx(classes.TableWrp, { TableWrpExpanded: this.state.expandedTransactions })
          }
        >
          <Transactions
            propNames={['status', 'currency', 'amount', 'date']}
            moreInfo={['address', 'xid']}
            headData={[{ title: 'History' }]}
            bodyData={this.state.transactions}
            showMore={this.showMore}
            viewAll={this.viewAll}
            viewAllText={this.state.mobileView ? 'See more' : null}
            expanded={this.state.expandedTransactions}
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
