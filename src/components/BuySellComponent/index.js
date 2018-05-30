import React from 'react';
import classNames from 'classnames';
import Button from '../UI/Button';
import Input from '../UI/Input';
import * as actionTypes from '../../actions/actionTypes';
import classes from './BuySellComponent.css';
import checkedIcon from '../../../assets/images/icons/checked.png';
import switchIcon from '../../../assets/images/icons/switch.png';

const buySellComponent = (props) => {
  const currenciesBtns = props.coins.map(coin => (
    <div key={coin.name} className={classes.CoinWrp}>
      <Button
        clicked={() => { props.setCurrency(coin.name); }}
        elementConfig={{ type: 'button' }}
        btnClasses={classNames('BtnCoin', { Checked: coin.checked, Unchecked: !coin.checked }).split(' ')}
      >
        <img alt={coin.name} src={require(`../../../assets/images/icons/${coin.name}.png`)}/>
        <span>{coin.name}</span>
        <div className={classes.Checked}>
          <img alt="checked" src={checkedIcon} />
        </div>
      </Button>
    </div>
  ),
  );

  return (
    <div className={classes.BuySellComponentWrp}>
      <div className={classes.BuySellTabsWrp}>
        <Button
          btnClasses={classNames('BuyTab', { BuyTabActive: props.buy }).split(' ')}
          clicked={() => { props.buySellSwitcher(actionTypes.BUY); }}
        >
          BUY
        </Button>
        <Button
          btnClasses={classNames('SellTab', { SellTabActive: !props.buy }).split(' ')}
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
            wrpClasses={classNames('AmountWrp', { AmountWrpRight: props.switched, AmountWrpLeft: !props.switched }).split(' ')}
            labelClasses={['AmountLabel']}
            inputClasses={['InputBuySell']}
            elementConfig={{ type: 'text', placeholder: '0.00', label: 'USD' }}
          />
          <Button
            btnClasses={['SwitchBtn']}
            clicked={props.currenciesPlaceSwitcher}
            elementConfig={{ type: 'button' }}
          >
            <img alt="switch" src={switchIcon} />
          </Button>
          <Input
            wrpClasses={classNames('AmountWrp', { AmountWrpRight: !props.switched, AmountWrpLeft: props.switched }).split(' ')}
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
            elementConfig={{ type: 'submit', 'before-content': (props.buy ? 'Buy ' : 'Sell ') + props.selectedCrypt.name }}
            btnClasses={['BuyBtn']}
          >
            {`${props.buy ? 'Buy' : 'Sell'} ${props.selectedCrypt.name}`}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default buySellComponent;
