import React from 'react';
import PropTypes from 'prop-types';
import { setCurrentClasses } from '../../../shared/utility';
import classes from './Input.css';

const input = (props) => {
  let inputClasses = [classes.Input];
  inputClasses = props.inputClasses ?
    setCurrentClasses(props.inputClasses, inputClasses, classes) : null;
  let inputElement = null;
  switch (props.elementType) {
    case ('input'):
      inputElement = (<input
        className={inputClasses ? inputClasses.join(' ') : null}
        {...props.elementConfig}
        value={props.value}
        onChange={props.changeValue}
      />);
      break;
    case ('textarea'):
      inputElement = (<textarea
        className={inputClasses ? inputClasses.join(' ') : null}
        {...props.elementConfig}
        value={props.value}
        onChange={props.changeValue}
      />);
      break;
    case ('select'):
      inputElement = (<select
        className={inputClasses ? inputClasses.join(' ') : null}
        value={props.value}
        onChange={props.changeValue}
      >
        {props.elementConfig.options.map(option => (
          <option key={option.value} value={option.value}>
            {option.displayValue}
          </option>
        ))}
      </select>);
      break;
    default:
      inputElement = (<input
        className={inputClasses ? inputClasses.join(' ') : null}
        {...props.elementConfig}
        value={props.value}
        onChange={props.changeValue}
      />);
  }
  let labelClasses = [];
  let wrpClasses = [];
  labelClasses = props.labelClasses ?
    setCurrentClasses(props.labelClasses, labelClasses, classes) : null;
  wrpClasses = props.wrpClasses ? setCurrentClasses(props.wrpClasses, wrpClasses, classes) : null;
  const secondLabel = props.optionalLabels && props.optionalLabels.second ?
    props.optionalLabels.second : null;
  const thirdLabel = props.optionalLabels && props.optionalLabels.third ?
    props.optionalLabels.third : null;
  const fourthLabel = props.optionalLabels && props.optionalLabels.fourth ?
    props.optionalLabels.fourth : null;
  return (
    <div className={wrpClasses ? wrpClasses.join(' ') : null}>
      <label htmlFor={props.elementConfig.id || null} className={labelClasses ? labelClasses.join(' ') : null}>
        {props.elementConfig.label}
      </label>
      <div className={classes.SecondLabel}>{secondLabel}</div>
      {inputElement}
      <div className={classes.ThirdLabel}>{thirdLabel}</div>
      <div className={classes.FourthLabel}>{fourthLabel}</div>
    </div>
  );
};

input.propTypes = {
  labelClasses: PropTypes.arrayOf(PropTypes.string),
  wrpClasses: PropTypes.arrayOf(PropTypes.string),
  inputClasses: PropTypes.arrayOf(PropTypes.string),
};

export default input;
