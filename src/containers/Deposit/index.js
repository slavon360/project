import React, { Component } from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames/bind';
import { transactions } from '../../../dumpData.json';
import Transactions from '../../components/Transactions';
import DepositWithdraw from '../../components/DepositWithdrawComponent';
import * as actionTypes from '../../actions/actionTypes';
import * as actions from '../../actions';
import classes from './Deposit.css';

const cx = classNames.bind(classes);

class Deposit extends Component {
  state = {
    transactionsItemToggled: false,
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
    global.console.log(this.state);
    const {
      expandedTransactions,
      mobileView,
      transactionsItemToggled } = this.state;
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
