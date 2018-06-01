import React, { Fragment } from 'react';
import classes from './ChartHeader.css';

const chartHeader = props => (
  <Fragment>
    <div className={classes.CurrenciesShort}>
      <div className={classes.Top}>
        <span>{props.currency.fsym}</span> /
        <span>{props.currency.tsym}</span>
      </div>
      <div className={classes.Bottom}>{props.currency.fsymTitle}</div>
    </div>
    <div className={classes.LastPrice}>
      <div className={classes.Top}>Last Price</div>
      <div className={classes.Bottom}>
        <span>0.07878</span>
        <span>$ 837.45</span>
      </div>
    </div>
    <div className={classes.Change}>
      <div className={classes.Top}>24h Change</div>
      <div className={classes.Bottom}>
        <span>-0.000387</span>
        <span>-0.49%</span>
      </div>
    </div>
    <div className={classes.High}>
      <div className={classes.Top}>24h High</div>
      <div className={classes.Bottom}>0.08400</div>
    </div>
    <div className={classes.Low}>
      <div className={classes.Top}>24h Low</div>
      <div className={classes.Bottom}>0.077220</div>
    </div>
  </Fragment>
);

export default chartHeader;
