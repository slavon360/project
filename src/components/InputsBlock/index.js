import React from 'react';
import classes from './InputsBlock.css';

const inputsBlock = (props) => {
    let shortcut = props.data.selectedCurrency.shortcut;
    return (
      <div className={classes.InputsBlockWrp}>
        <div className={classes.InputsBlockHead}>
          <div className={classes.LeftSide}>
            <img src={require('../../assets/images/icons/exclamation.png')} alt="exclamation" />
          </div>
          <div className={classes.RightSide}>
            <div className={classes.Title}>Important!</div>
            <div className={classes.WarningInfo}>{props.data.warningInfo(shortcut)}</div>
            <div className={classes.LimitInfo}>{props.data.limitInfo}</div>
          </div>
        </div>

      </div>
    )
}

export default inputsBlock;
