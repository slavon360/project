import React from 'react';
import Input from '../UI/Input';
import Button from '../UI/Button';
import { setCurrentClasses } from '../../shared/utility';
import classes from './InputsBlock.css';

const inputsBlock = (props) => {
    let shortcut = props.data.selectedCurrency.shortcut;
    let selectedCurrency = props.data.selectedCurrency;
    let interactiveView = selectedCurrency.interactiveView;
    let interactiveContent;
    if (interactiveView){
      interactiveContent = interactiveView.map((item) => {
        let content, optionalLabels;
        if (item.elementType === 'input'){
          !props.data.deposit && item.currentKey === 'amount' && (optionalLabels = {
            second: '24h withdraw limit: 0 / 500 USD',
            third: `Transaction Fee: ${props.data.transactionFee} ${selectedCurrency.shortcut}`,
            fourth: `You will get: 0.9 ${selectedCurrency.shortcut}`
          })
          console.log(optionalLabels)
          let updElemConfig = {...item.elementConfig};
              updElemConfig.label && (updElemConfig.label = updElemConfig.label(selectedCurrency.shortcut));
              updElemConfig.placeholder && (updElemConfig.placeholder = updElemConfig.placeholder(selectedCurrency.balance));
          content = <Input
                      key={item.id}
                      optionalLabels={optionalLabels}
                      wrpClasses={item.classes}
                      elementConfig={updElemConfig}
                      value={item.value(selectedCurrency[item.currentKey])}
                      changeValue={(event) => {props.changeInputsValue(event, item.currentKey)}} />
        }
        if (item.elementType === 'button'){
          let handler;
          item.text === 'Copy Address' && (handler = props.copyAddress);
          item.text === 'Next' && (handler = props.nextStep);
          let btnWrpClasses = setCurrentClasses(item.classes, [], classes);
          content = <div key={item.id} className={btnWrpClasses.join(' ')}>
                      <Button clicked={handler} elementConfig={item.elementConfig} >{item.text}</Button>
                    </div>
        }
        return content;
      })
    }
    return (
      <div className={classes.InputsBlockWrp}>
        <div className={classes.InputsBlockHead}>
          <div className={classes.LeftSide}>
            <img src={require('../../../assets/images/icons/exclamation.png')} alt="exclamation" />
          </div>
          <div className={classes.RightSide}>
            <div className={classes.Title}>Important!</div>
            <div className={classes.WarningInfo}>{props.data.warningInfo(shortcut)}</div>
            <div className={classes.LimitInfo}>{props.data.limitInfo}</div>
          </div>
        </div>
        {interactiveContent}
      </div>
    )
}

export default inputsBlock;
