import React, { Component } from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames/bind';
import { transactions } from '../../../../dumpData.json';
import Transactions from '../../../components/Transactions';
import WithdrawDollar3 from '../../../components/DepositWithdrawComponent/WithdrawDollar-3';
import * as actionTypes from '../../../actions/actionTypes';
import * as actions from '../../../actions';
import classes from './Withdraw-dollar-3.css';

const cx = classNames.bind(classes);

class Withdraw extends Component {
  state = {
    transactionsItemToggled: false,
    transactions,
    showBanksDpDwn: false,
    mobileView: null,
    expandedTransactions: false,
    bankDetails: {
      bankName: '',
      bankCode: '',
      accountNumber: '',
    },
  }

  componentWillMount() {
    this.updateDimensions();
  }

  componentDidMount() {
    this.props.depositWithdrawSwitch(actionTypes.WITHDRAW);
    this.props.buildInteractiveView();
    window.addEventListener('resize', this.updateDimensions);
  }

  componentWillUnmount = () => {
    window.removeEventListener('resize', this.updateDimensions);
  }

  setBankData = (event, dataKey) => {
    const updBankData = { ...this.state.bankDetails };
    updBankData[dataKey] = event.target.value;
    this.setState({ bankDetails: updBankData });
  }

  updateDimensions = () => {
    if (window.innerWidth < 768 && !this.state.mobileView) this.setState({ mobileView: true });
    if (window.innerWidth >= 768 && this.state.mobileView) this.setState({ mobileView: false });
  }

  showMore = (transaction) => {
    let updTransactions = [...this.state.transactions];
    let transactionsItemToggled = false;
    updTransactions = updTransactions.map((trans) => {
      const checked = trans.id === transaction.id && !trans.checked;
      transactionsItemToggled = checked ? true : transactionsItemToggled;
      return {
        ...trans,
        checked,
      };
    });
    this.setState({ transactions: updTransactions, transactionsItemToggled });
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
  viewAll = () => {
    let updTransactions = [...this.state.transactions];
    const { expandedTransactions } = this.state;
    updTransactions = updTransactions.map(trans => ({
      ...trans,
      checked: trans.checked && !expandedTransactions,
    }));
    this.setState(prevState => ({
      expandedTransactions: !prevState.expandedTransactions,
      transactions: updTransactions,
      transactionsItemToggled: false,
    }));
  }
  render() {
    const {
      expandedTransactions,
      mobileView,
      transactionsItemToggled } = this.state;
    return (
      <div className={classes.WithdrawWrp}>
        <WithdrawDollar3
          data={this.props.withdrawData}
          hideShowCurrencyDropdown={this.props.hideShowCurrencyDropdown}
          hideCurrencyDropdown={this.props.hideCurrencyDropdown}
          selectCurrency={this.selectCurrency}
          changeInputsValue={this.props.changeInputsValue}
          setValueToMax={this.props.setValueToMax}
          bankDetails={this.state.bankDetails}
          setBankData={this.setBankData}
        />
        <div
          className={
            cx(classes.TableWrp, {
              TableWrpExpanded: expandedTransactions,
              TableWrpAugmented: mobileView && transactionsItemToggled,
            })
          }
        >
          <Transactions
            augmentedTbodyHeight={
              mobileView && transactionsItemToggled && !expandedTransactions ? 260 : null
            }
            propNames={['status', 'currency', 'amount', 'date']}
            moreInfo={['address', 'xid']}
            headData={[{ title: 'History' }]}
            bodyData={this.state.transactions}
            showMore={this.showMore}
            viewAll={this.viewAll}
            viewAllText={mobileView ? 'See more' : null}
            expanded={expandedTransactions}
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
