import React, { Component, Fragment } from 'react';
import { balances } from '../../../dumpData.json';
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
      <Fragment key={balance.currency}>
        <div className={classes.CurrencyTitle}>
          <img
            src={this.getImage(balance.icon)}
            alt={balance.currency}
          />
          <span>{balance.currency}</span>
        </div>
        <div className={classes.BalanceValue}>{balance.bal}</div>
        <div className={classes.FiatValue}>{balance.fiat}</div>
        <Button btnClasses={['DepositBtn']}>Deposit</Button>
        <Button btnClasses={['WithdrawBtn']}>Withdraw</Button>
      </Fragment>
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
