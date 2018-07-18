import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import NextAngle from '../UI/Icons/NextAngle';
import classes from './Transactions.css';

import bitcoin from '../../../assets/images/coins/Bitcoin.svg';
import aion from '../../../assets/images/coins/AION.jpg';
import binanceCoin from '../../../assets/images/coins/binance-coin.svg';
import doge from '../../../assets/images/coins/doge.svg';
import ethereum from '../../../assets/images/coins/ethereum.png';
import omiseGo from '../../../assets/images/coins/omise-go.png';
import quantstamp from '../../../assets/images/coins/quantstamp-logo.jpg';
import ripple from '../../../assets/images/coins/Ripple-logo.png';

const getImage = (icon) => {
  switch (icon) {
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
};

const transactions = (props) => {
  const headData = props.headData.map(head => <th key={head.title}>{head.title}</th>);
  const bodyData = props.bodyData.map((trans, index) => {
    const moreInfo = props.moreInfo ? props.moreInfo.reduce((result, current) => {
      result.push(<div key={current} className={classes.MoreInfo}>
        <div className={classes.Key}>{`${current}:`}</div>
        <div className={classes.Value}>{trans[current]}</div>
      </div>);
      return result;
    }, []) : null;
    const values = props.propNames.reduce((result, current, i) => {
      let val;
      if (trans[current] instanceof Object) {
        val = Object.values(trans[current]).map((item, j) => <span key={j}>{item} </span>);
      } else {
        val = trans[current];
      }
      result.push(<td key={current}>
        {i === 0 && current !== 'icon' ?
          <Fragment>
            <div className={classes.Round} />
            <div className={classes.MoreInfoWrp}>{moreInfo}</div>
          </Fragment>
          : null}
        {current !== 'icon' ? val : <img src={getImage(trans[current])} alt={trans[current]} />}
      </td>);
      return result;
    }, []);
    const rowClasses = trans.checked ?
      [classes.Row, classes.RowChecked] : [classes.Row, classes.RowUnchecked];
    const angleClasses = trans.checked ?
      [classes.AngleIcon, classes.Up] : [classes.AngleIcon, classes.Down];
    const clickHandler = props.showMore ? { onClick: () => { props.showMore(trans); } } : null;
    return (<tr className={rowClasses.join(' ')} {...clickHandler} key={index}>
      {values}
      {props.showMore ? <td className={classes.AngleWrp}>
        <div className={angleClasses.join(' ')}>
          <NextAngle
            styles={{ width: '14px', height: '8px', fill: '#922c88' }}
          />
        </div>
      </td> : null}
    </tr>);
  });
  return (
    <Fragment>
      <table className={classes.Table}>
        <thead>
          <tr>
            {headData}
          </tr>
        </thead>
        <tbody>
          {bodyData}
        </tbody>
      </table>
      {props.viewAllText && !props.viewAllLink ? <div className={classes.ViewAllBtn}>
        <span
          role="button"
          tabIndex={0}
          onClick={props.viewAll}
        >
          {!props.expanded ? props.viewAllText : 'Hide'}
        </span>
      </div> : null}
      {props.viewAllLink ? <div className={classes.ViewAllBtn}>
        <NavLink
          to={props.viewAllLink}
          exact
        >{props.viewAllText}</NavLink>
      </div> : null}
    </Fragment>
  );
};

export default transactions;

transactions.propTypes = {
  propNames: PropTypes.arrayOf(PropTypes.string),
  moreInfo: PropTypes.arrayOf(PropTypes.string),
  headData: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
  })).isRequired,
  bodyData: PropTypes.arrayOf(PropTypes.shape({
    price: PropTypes.string,
    quantity: PropTypes.string,
    amount: PropTypes.string,
    date: PropTypes.oneOfType([
      PropTypes.shape({
        dayMonthYear: PropTypes.string,
        hourMinutes: PropTypes.string,
      }),
      PropTypes.string,
    ]),
  })).isRequired,
  showMore: PropTypes.func,
  viewAll: PropTypes.func,
  expanded: PropTypes.bool,
};
