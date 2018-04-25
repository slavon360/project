import React from 'react';
import classes from './TransactionsHistory.css';

const transactionsHistory = (props) => {
    let list = props.transactions.map((trans, index) => {
        return (<tr key={index}>
                  <td><div className={classes.Round}></div>{trans.date}</td>
                  <td>{trans.price}</td>
                  <td>{trans.qty}</td>
                  <td>{trans.amount}</td>
                </tr>)
    })
    return (
      <div className={classes.TransactionsHistoryWrp}>
        <h3 className={classes.History}>History</h3>
        <div className={classes.TableWrp}>
          <table className={classes.Table}>
            <thead>
              <tr>
                <th>Date</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              {list}
            </tbody>
          </table>
        </div>
      </div>
    )
}

export default transactionsHistory;
