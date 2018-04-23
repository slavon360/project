import React from 'react';
import { setCurrentClasses } from '../../../shared/utility';
import classes from './Input.css';

const input = props => {
    let inputClasses = [classes.Input];
    inputClasses = setCurrentClasses(props.inputClasses, inputClasses, classes);
    let inputElement = null;

    switch (props.elementType) {
      case ('input'):
        inputElement = <input
                          className={inputClasses.join(' ')}
                          {...props.elementConfig}
                          value={props.value}
                          onChange={props.changeValue}/>
        break;
      case ('textarea'):
        inputElement = <textarea
                          className={inputClasses.join(' ')}
                          {...props.elementConfig}
                          value={props.value}
                          onChange={props.changeValue}/>
        break;
      case ('select'):
        inputElement = (<select
                          className={inputClasses.join(' ')}
                          value={props.value}
                          onChange={props.changeValue}>
                            {props.elementConfig.options.map(option => (
                              <option key={option.value} value={option.value}>
                                {option.displayValue}
                              </option>
                            ))}
                          </select>);
        break;
      default:
        inputElement = <input
                className={inputClasses.join(' ')}
                {...props.elementConfig}
                value={props.value}
                onChange={props.changeValue}/>

    }
    let labelClasses = [], wrpClasses = [];
    labelClasses = setCurrentClasses(props.labelClasses, labelClasses, classes);
    wrpClasses = setCurrentClasses(props.wrpClasses, wrpClasses, classes);
      return (
          <div className={wrpClasses.join(' ')}>
            <label className={labelClasses.join(' ')}>{props.label}</label>
            {inputElement}
          </div>
      )
};

export default input;
