import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import classes from './Exchange.css';
import WithdrawImg from '../../../../assets/images/backgrounds/withdraw.jpg';
import TrustImg from '../../../../assets/images/backgrounds/trust_security.jpg';
import BuySellImg from '../../../../assets/images/backgrounds/buy_sell.jpg';

const cx = classNames.bind(classes);

const getImage = (title) => {
  switch (title) {
    case 'Deposit and Withdraw':
      return WithdrawImg;
    case 'Trade Conveniently':
      return BuySellImg;
    case 'Transact Securely':
      return TrustImg;
    default: return WithdrawImg;
  }
};
const exchange = props => (
  <div className={classes.ExchangeWrp}>
    <div className={classes.Steps}>
      <h2><span>Bithela</span> Exchange</h2>
      {props.checkedTab.steps.map((step, index) => (
        <div
          role="button"
          tabIndex={0}
          className={cx(classes.Step, { Active: step.checked, Inactive: !step.checked })}
          onClick={() => props.changeImage(step)}
          key={index}
        >
          <div className={classes.Title}>{step.title}</div>
          <div className={classes.Description}>{step.description}</div>
        </div>
      ))}
    </div>
    <div className={cx(classes.InteractiveView, classes[props.checkedTab.className])}>
      <img src={getImage(props.checkedTab.checkedStep)} alt={props.checkedTab.checkedStep} />
    </div>
  </div>
);

export default exchange;

exchange.propTypes = {
  checkedTab: PropTypes.shape({
    title: PropTypes.string,
    steps: PropTypes.arrayOf(PropTypes.shape({
      title: PropTypes.string,
      description: PropTypes.string,
    })),
  }),
};
