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
        let content;
        if (item.elementType === 'input'){
          let updElemConfig = {...item.elementConfig};
              updElemConfig.label = updElemConfig.label(selectedCurrency.shortcut);
          content = <Input
                      wrpClasses={item.classes}
                      key={item.id}
                      elementConfig={updElemConfig}
                      value={item.value(selectedCurrency[item.currentKey])}
                      changeValue={(event) => {props.changeInputsValue(event, item.currentKey)}} />
        }
        if (item.elementType === 'button'){
          let btnWrpClasses = setCurrentClasses(item.classes, [], classes);
          content = <div key={item.id} className={btnWrpClasses.join(' ')}>
                      <Button elementConfig={item.elementConfig} >{item.text}</Button>
                    </div>
        }
        return content;
      })
    }
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
        {interactiveContent}
      </div>
    )
}

export default inputsBlock;
