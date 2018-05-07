import React from 'react';
import PropTypes from 'prop-types';
import { setCurrentClasses } from '../../../shared/utility';
import classes from './Input.css';

const input = props => {
    let inputClasses = [classes.Input];
    inputClasses = props.inputClasses ? setCurrentClasses(props.inputClasses, inputClasses, classes) : null;
    let inputElement = null;

    switch (props.elementType) {
      case ('input'):
        inputElement = <input
                          className={inputClasses ? inputClasses.join(' ') : null}
                          {...props.elementConfig}
                          value={props.value}
                          onChange={props.changeValue}/>
        break;
      case ('textarea'):
        inputElement = <textarea
                          className={inputClasses ? inputClasses.join(' ') : null}
                          {...props.elementConfig}
                          value={props.value}
                          onChange={props.changeValue}/>
        break;
      case ('select'):
        inputElement = (<select
                          className={inputClasses ? inputClasses.join(' ') : null}
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
                className={inputClasses ? inputClasses.join(' ') : null}
                {...props.elementConfig}
                value={props.value}
                onChange={props.changeValue}/>

    }
    let labelClasses = [], wrpClasses = [];
    labelClasses = props.labelClasses ? setCurrentClasses(props.labelClasses, labelClasses, classes) : null;
    wrpClasses = props.wrpClasses ? setCurrentClasses(props.wrpClasses, wrpClasses, classes) : null;
      return (
          <div className={wrpClasses ? wrpClasses.join(' ') : null}>
            <label className={labelClasses ? labelClasses.join(' ') : null}>{props.elementConfig.label}</label>
            {inputElement}
          </div>
      )
};

input.propTypes = {
  labelClasses: PropTypes.array,
  wrpClasses: PropTypes.array,
  inputClasses: PropTypes.array
}

export default input;
