import React, { Component } from 'react';
import { balances } from '../../../dumpData.json';
import WithdrawIcon from '../../components/UI/Icons/Withdraw';
import DepositIcon from '../../components/UI/Icons/Deposit';
import Button from '../../components/UI/Button';
import classes from './Balances.css';

import bitcoin from '../../../assets/images/coins/Bitcoin.svg';
import aion from '../../../assets/images/coins/AION.jpg';
import binanceCoin from '../../../assets/images/coins/binance-coin.svg';
import doge from '../../../assets/images/coins/doge.svg';
import ethereum from '../../../assets/images/coins/ethereum.png';
import omiseGo from '../../../assets/images/coins/omise-go.png';
import quantstamp from '../../../assets/images/coins/quantstamp-logo.jpg';
import ripple from '../../../assets/images/coins/Ripple-logo.png';


class Balances extends Component {
  state = {
    balances,
  }
  getImage = (title) => {
    switch (title) {
      case 'Bitcoin.svg':
        return bitcoin;
      case 'ethereum.png':
        return ethereum;
      case 'Ripple-logo.png':
        return ripple;
      case 'AION.jpg':
        return aion;
      case 'binance-coin.svg':
        return binanceCoin;
      case 'omise-go.png':
        return omiseGo;
      case 'quantstamp-logo.jpg':
        return quantstamp;
      case 'doge.svg':
        return doge;
      default: return bitcoin;
    }
  }
  render() {
    const balancesContent = this.state.balances.map(balance => (
      <div className={classes.BalanceRow} key={balance.currency.long}>
        <div className={classes.CurrencyTitle}>
          <img
            src={this.getImage(balance.icon)}
            alt={balance.currency.long}
          />
          <div className={classes.BalanceCurrencyWrp}>
            <span className={classes.ShortCurrencyTitle}>{balance.currency.short} </span>
            <span className={classes.LongCurrencyTitle}>{balance.currency.long}</span>
          </div>
        </div>
        <div className={classes.BalanceValueWrp}>
          <div className={classes.BalanceValue}>{balance.bal}</div>
          <div className={classes.FiatWrp}>
            <span className={classes.FiatNumber}>{balance.fiat.number} </span>
            <span className={classes.FiatTitle}>{balance.fiat.title}</span>
          </div>
        </div>
        <div className={classes.FiatValue}>
          <span className={classes.FiatNumber}>{balance.fiat.number} </span>
          <span className={classes.FiatTitle}>{balance.fiat.title}</span>
        </div>
        <div className={classes.DepositWithdrawBtnsWrp}>
          <Button btnClasses={['DepositBtn']}>
            <span className={classes.DepositBtnText}>Deposit</span>
            <span className={classes.DepositIconWrp}><DepositIcon /></span>
          </Button>
          <Button btnClasses={['WithdrawBtn']}>
            <span className={classes.WithdrawBtnText}>Withdraw</span>
            <span className={classes.WithdrawIconWrp}><WithdrawIcon /></span>
          </Button>
        </div>
      </div>
    ));
    return (
      <div className={classes.BalancesWrp}>
        <div className={classes.BalancesContainer}>
          <div className={classes.BalancesHead}>
            <h2>Balances</h2>
            <div className={classes.LimitsWrp}>
              <span className={classes.Limit}>24h Withdrawal Limit:<strong>100</strong> BTC</span>
              <span className={classes.InUse}>In Use: <strong>0</strong> BTC</span>
            </div>
          </div>
          <div className={classes.Balances}>
            <div className={classes.Head}>
              <div className={classes.Currency}>Currency</div>
              <div className={classes.Balance}>Balance</div>
              <div className={classes.Type}>Aud</div>
            </div>
            {balancesContent}
          </div>
        </div>
      </div>
    );
  }
}

export default Balances;
