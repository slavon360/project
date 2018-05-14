import React, { Component, Fragment } from 'react';
import { balances } from '../../../dumpData.json';
import Button from '../../components/UI/Button';
import classes from './Balances.css';

class Balances extends Component {
    state = {
      balances
    }
    render() {
      let balances = this.state.balances.map(balance => {
        return (
                <Fragment key={balance.currency}>
                  <div className={classes.CurrencyTitle}>
                    <img src={require(`../../../assets/images/coins/${balance.icon}`)} alt={balance.currency} /><span>{balance.currency}</span>
                  </div>
                  <div className={classes.BalanceValue}>{balance.bal}</div>
                  <div className={classes.FiatValue}>{balance.fiat}</div>
                  <Button btnClasses={['DepositBtn']}>Deposit</Button>
                  <Button btnClasses={['WithdrawBtn']}>Withdraw</Button>
                </Fragment>
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
