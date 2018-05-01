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
      let rowClasses = trans.checked ? [classes.RowChecked] : [classes.RowUnchecked];
        return (<tr className={rowClasses} onClick={props.showMore} key={index}>
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
