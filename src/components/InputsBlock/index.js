import React from 'react';
import Input from '../UI/Input';
import Button from '../UI/Button';
import { setCurrentClasses } from '../../shared/utility';
import classes from './InputsBlock.css';
import exclamationIcon from '../../../assets/images/icons/exclamation.png';

const inputsBlock = (props) => {
  const shortcut = props.data.selectedCurrency.shortcut;
  const selectedCurrency = props.data.selectedCurrency;
  const interactiveView = selectedCurrency.interactiveView;
  let interactiveContent;
  if (interactiveView) {
    interactiveContent = interactiveView.map((item) => {
      let content;
      let optionalLabels;
      let optionalBtn;
      if (item.elementType === 'input') {
        if (!props.data.deposit && item.currentKey === 'amount') {
          optionalLabels = {
            second: '24h withdraw limit: 0 / 500 USD',
            third: `Transaction Fee: ${props.data.transactionFee} ${selectedCurrency.shortcut}`,
            fourth: `You will get: 0.9 ${selectedCurrency.shortcut}`,
          };
          optionalBtn = {
            elementConfig: { type: 'button' },
            value: 'Max',
            action: () => props.setValueToMax(selectedCurrency.balance, item.currentKey),
          };
        }
        const updElemConfig = { ...item.elementConfig };
        if (updElemConfig.label) {
          updElemConfig.label = updElemConfig.label(selectedCurrency.shortcut);
        }
        if (updElemConfig.placeholder) {
          updElemConfig.placeholder = updElemConfig.placeholder(selectedCurrency.balance);
        }
        content = (<Input
          key={item.id}
          optionalBtn={optionalBtn}
          optionalLabels={optionalLabels}
          wrpClasses={item.classes}
          elementConfig={updElemConfig}
          value={item.value(selectedCurrency[item.currentKey])}
          changeValue={(event) => { props.changeInputsValue(event, item.currentKey); }}
        />);
      }
      if (item.elementType === 'button') {
        let handler;
        if (item.text === 'Copy Address') handler = props.copyAddress;
        if (item.text === 'Next') handler = props.nextStep;
        const btnWrpClasses = setCurrentClasses(item.classes, [], classes);
        content = (<div key={item.id} className={btnWrpClasses.join(' ')}>
          <Button clicked={handler} elementConfig={item.elementConfig} >{item.text}</Button>
        </div>);
      }
      return content;
    });
  }
  return (
    <form className={classes.InputsBlockWrp}>
      <div className={classes.InputsBlockHead}>
        <div className={classes.LeftSide}>
          <img src={exclamationIcon} alt="exclamation" />
        </div>
        <div className={classes.RightSide}>
          <div className={classes.Title}>Important!</div>
          <div className={classes.WarningInfo}>{props.data.warningInfo.replace('*{currency}', shortcut)}</div>
          <div className={classes.LimitInfo}>{props.data.limitInfo}</div>
        </div>
      </div>
      {interactiveContent}
    </form>
  );
};

export default inputsBlock;
