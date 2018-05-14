import React, { Component } from 'react';
import Adj from '../../hoc/Adj/AdjComponent';
import Button from '../../components/UI/Button';
import classes from './Balances.css';

class Balances extends Component {
    state = {
      balances: [
        {currency: 'BTC Bitcoin', icon: 'Bitcoin.svg', bal: '1.2102', fiat: '29 100.36 AUD'},
        {currency: 'ETH Ethereum', icon: 'ethereum.png', bal: '0.00', fiat: '0.00 AUD'},
        {currency: 'AUD Australian Dollar', icon: 'Bitcoin.svg', bal: '300256.36', fiat: '300 256.36 AUD'},
        {currency: 'XRP Ripple', icon: 'Ripple-logo.png', bal: '23.236547', fiat: '455 365.00 AUD'},
        {currency: 'AION Aion', icon: 'AION.jpg', bal: '0.00', fiat: '0.00 AUD'},
        {currency: 'BNB Binance', icon: 'binance-coin.svg', bal: '300256.36', fiat: '300 256.36 AUD'},
        {currency: 'OMG Omise Go', icon: 'omise-go.png', bal: '1.210265', fiat: '29 100.36 AUD'},
        {currency: 'QSP Quantstamp', icon: 'quantstamp-logo.jpg', bal: '0.00', fiat: '0.00 AUD'},
        {currency: 'DOGE Dogecoin', icon: 'doge.svg', bal: '300256.36', fiat: '300 256.36 AUD'},
      ]
    }
    render() {
      let balances = this.state.balances.map(balance => {
        return (
                <Adj key={balance.currency}>
                  <div className={classes.CurrencyTitle}>
                    <img src={require(`../../../assets/images/coins/${balance.icon}`)} alt={balance.currency} /><span>{balance.currency}</span>
                  </div>
                  <div className={classes.BalanceValue}>{balance.bal}</div>
                  <div className={classes.FiatValue}>{balance.fiat}</div>
                  <Button btnClasses={['DepositBtn']}>Deposit</Button>
                  <Button btnClasses={['WithdrawBtn']}>Withdraw</Button>
                </Adj>
              )
      })
      return (
        <div className={classes.BalancesWrp}>
          <div className={classes.BalancesHead}>
            <h2>Balances</h2>
            <div className={classes.LimitsWrp}>
              <span className={classes.Limit}>24h Withdrawal Limit: <strong>100</strong> BTC</span>
              <span className={classes.InUse}>In Use: <strong>0</strong> BTC</span>
            </div>
          </div>
          <div className={classes.Balances}>
            <div className={classes.Head}>
              <div className={classes.Currency}>Currency</div>
              <div className={classes.Balance}>Balance</div>
              <div className={classes.Type}>Aud</div>
            </div>
            {balances}
          </div>
        </div>
      )
    }
}

export default Balances;
