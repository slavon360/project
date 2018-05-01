import React from 'react';
import classes from './Transactions.css';

const transactions = (props) => {
    let headData = props.headData.map((head) => <th>{head.title}</th>);
    let bodyData = props.bodyData.map((trans, index) => {
        return (<tr key={index}>
                  <td><div className={classes.Round}></div>{trans[props.propNames[index]]}</td>
                  <td>{trans[props.propNames[index]]}</td>
                  <td>{trans[props.propNames[index]]}</td>
                  <td>{trans[props.propNames[index]]}</td>
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
