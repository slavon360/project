import React from 'react';
import classes from './Transactions.css';

const transactions = (props) => {
    let headData = props.headData.map((head) => <th>{head.title}</th>);
    let bodyData = props.bodyData.map((trans, index) => {
      let values = props.propNames.reduce((result, current, i) => {
                    result.push(<td>
                                  {i === 0 ? <div className={classes.Round}></div> : null}
                                  {trans[current]}
                                </td>);
                    return result;
      }, []);
      let moreInfo = props.moreInfo.reduce((result, current) => {
                    result.push(<div className={classes.MoreInfo}>
                                  <div className={classes.Key}>{current}</div>
                                  <div className={classes.Value}>{trans[current]}</div>
                                </div>)
      }, [])
      let rowClasses = trans.checked ? [classes.Row, classes.RowChecked] : [classes.Row, classes.RowUnchecked];
        return (<tr className={rowClasses} onClick={() => {props.showMore(trans)}} key={index}>
                  <div className={classes.MoreInfo}>
                    {moreInfo}
                  </div>
                  {values}
                  {props.showMore ? <td className={classes.AngleWrp}>
                                      <div className={classes.AngleIcon}>\/</div>
                                    </td> : null}
                </tr>)
    })
    return (
        <div className={classes.TableWrp}>
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
        </div>
    )
}

export default transactions;
