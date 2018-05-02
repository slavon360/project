import React from 'react';
import NextAngle from '../UI/Icons/NextAngle';
import Adj from '../../hoc/Adj/AdjComponent';
import classes from './Transactions.css';

const transactions = (props) => {
    let headData = props.headData.map((head) => <th key={head.title}>{head.title}</th>);
    let bodyData = props.bodyData.map((trans, index) => {
      let moreInfo = props.moreInfo ? props.moreInfo.reduce((result, current) => {
                                        result.push(<div key={current} className={classes.MoreInfo}>
                                                      <div className={classes.Key}>{current}</div>
                                                      <div className={classes.Value}>{trans[current]}</div>
                                                    </div>);
                                        return result
      }, []) : null
      let values = props.propNames.reduce((result, current, i) => {
                    result.push(<td key={current}>
                                  {i === 0 ?  <Adj>
                                                <div className={classes.Round}></div>
                                                {moreInfo}
                                              </Adj> : null}
                                  {trans[current]}
                                </td>);
                    return result;
      }, []);
      let rowClasses = trans.checked ? [classes.Row, classes.RowChecked] : [classes.Row, classes.RowUnchecked];
      let angleClasses = trans.checked ? [classes.AngleIcon, classes.Up] : [classes.AngleIcon, classes.Down];
        return (<tr className={rowClasses.join(' ')} onClick={() => {props.showMore(trans)}} key={index}>
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
    )
}

export default transactions;
