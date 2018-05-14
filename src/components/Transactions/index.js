import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import NextAngle from '../UI/Icons/NextAngle';
import classes from './Transactions.css';

const transactions = (props) => {
    let headData = props.headData.map((head) => <th key={head.title}>{head.title}</th>);
    let bodyData = props.bodyData.map((trans, index) => {
      let moreInfo = props.moreInfo ? props.moreInfo.reduce((result, current) => {
                                        result.push(<div key={current} className={classes.MoreInfo}>
                                                      <div className={classes.Key}>{`${current}:`}</div>
                                                      <div className={classes.Value}>{trans[current]}</div>
                                                    </div>);
                                        return result
      }, []) : null
      let values = props.propNames.reduce((result, current, i) => {
                    result.push(<td key={current}>
                                  {i === 0 && current !== 'icon' ?
                                                <Fragment>
                                                  <div className={classes.Round}></div>
                                                  <div className={classes.MoreInfoWrp}>{moreInfo}</div>
                                                </Fragment>
                                               : null}
                                  {current !== 'icon' ? trans[current] :
                                    <img src={require(`../../../assets/images/coins/${trans[current]}`)} />}
                                </td>);
                    return result;
      }, []);
      let rowClasses = trans.checked ? [classes.Row, classes.RowChecked] : [classes.Row, classes.RowUnchecked];
      let angleClasses = trans.checked ? [classes.AngleIcon, classes.Up] : [classes.AngleIcon, classes.Down];
      let clickHandler = props.showMore ? {onClick: () => {props.showMore(trans)}} : null;
        return (<tr className={rowClasses.join(' ')} {...clickHandler} key={index}>
                  {values}
                  {props.showMore ? <td className={classes.AngleWrp}>
                                      <div className={angleClasses.join(' ')}>
                                        <NextAngle
                                          styles={{width: '14px', height: '8px', fill: '#922c88'}}/>
                                      </div>
                                    </td> : null}
                </tr>)
    })
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
            {props.viewAll ? <div className={classes.ViewAllBtn}>
                              <span onClick={props.viewAll}>
                                {!props.expanded ? `View all ${props.headData[0].title}` : 'Hide'}
                              </span>
                            </div> : null}
          </Fragment>
    )
}

export default transactions;

transactions.propTypes = {
  propNames: PropTypes.array,
  moreInfo: PropTypes.array,
  headData: PropTypes.array.isRequired,
  bodyData: PropTypes.array.isRequired,
  showMore: PropTypes.func,
  viewAll: PropTypes.func,
  expanded: PropTypes.bool
}
