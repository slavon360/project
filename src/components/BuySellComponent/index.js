import React from 'react';
import Button from '../UI/Button';
import Input from '../UI/Input';
import * as actionTypes from '../../actions/actionTypes';
import classes from './BuySellComponent.css';

const buySellComponent = (props) => {
  let buyTabClasses = ['BuyTab'], sellTabClasses = ['SellTab'];
  props.buy ? (buyTabClasses = ['BuyTab', 'BuyTabActive']) : (sellTabClasses = ['SellTab', 'SellTabActive']);

  const currenciesBtns = props.coins.map((coin) => {
    let btnCoinClasses = coin.checked ? ['BtnCoin', 'BtnCoinChecked'] : ['BtnCoin'];
    return (
      <div key={coin.name} className={classes.CoinWrp}>
        <Button
          clicked={() => { props.setCurrency(coin.name); }}
          elementConfig={{ type: 'button' }}
          btnClasses={btnCoinClasses}
        >
          <img alt={coin.name} src={require(`../../../assets/images/icons/${coin.name}.png`)}/>
          <span>{coin.name}</span>
          <div className={classes.Checked}>
            <img alt="checked" src={require('../../../assets/images/icons/checked.png')} />
          </div>
        </Button>
      </div>
    );
  });

  const firstInpClasses = props.switched ? ['AmountWrp', 'AmountWrpRight'] : ['AmountWrp', 'AmountWrpLeft'];
  const secondInpClasses = props.switched ? ['AmountWrp', 'AmountWrpLeft'] : ['AmountWrp', 'AmountWrpRight'];

  return (
    <div className={classes.BuySellComponentWrp}>
      <div className={classes.BuySellTabsWrp}>
        <Button
          btnClasses={buyTabClasses}
          clicked={() => { props.buySellSwitcher(actionTypes.BUY); }}
        >
          BUY
        </Button>
        <Button
          btnClasses={sellTabClasses}
          clicked={() => { props.buySellSwitcher(actionTypes.SELL); }}
        >
          SELL
        </Button>
      </div>
      <form className={classes.BuySellForm}>
        <p className={classes.Specify}>
          {`Specify the currency that you want to ${props.buy ? 'buy' : 'sell'}`}
        </p>
        <div className={classes.CurrenciesWrp}>
          {currenciesBtns}
        </div>
        <div className={classes.CurrentPriceWrp}>
          <span className={classes.Amount}>Amount </span>
          <span className={classes.Price}>
            {`1 ${props.selectedCrypt.name} = ${props.selectedCrypt.USD} USD`}
          </span>
        </div>
        <div className={classes.InputsWrp}>
          <Input
            wrpClasses={firstInpClasses}
            labelClasses={['AmountLabel']}
            inputClasses={['InputBuySell']}
            elementConfig={{ type: 'text', placeholder: '0.00', label: 'USD' }}
          />
          <Button
            btnClasses={['SwitchBtn']}
            clicked={props.currenciesPlaceSwitcher}
            elementConfig={{ type: 'button' }}
          >
            <img alt="switch" src={require(`../../../assets/images/icons/switch.png`)} />
          </Button>
          <Input
            wrpClasses={secondInpClasses}
            labelClasses={['AmountLabel']}
            inputClasses={['InputBuySell']}
            elementConfig={{ type: 'text', placeholder: '0.00', label: props.selectedCrypt.name }}
          />
        </div>
        <div className={classes.TransactionFee}>
          Transaction Fee: 0.1 {props.selectedCrypt.name}
        </div>
        <div className={classes.BuyBtnWrp}>
          <Button
            elementConfig={{ type: 'submit', 'before-content': (props.buy ? 'Buy ' : 'Sell ') + props.selectedCrypt.name}}
            btnClasses={['BuyBtn']}
          >
            {`${props.buy ? 'Buy' : 'Sell'} ${props.selectedCrypt.name}`}
          </Button>
        </div>
      </form>
    </div>
  );
}

export default buySellComponent;
