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
    <div className={classes.SecondLabel}>{props.optionalLabels.second}</div> : null;
  const thirdLabel = props.optionalLabels && props.optionalLabels.third ?
    <div className={classes.ThirdLabel}>{props.optionalLabels.third}</div> : null;
  const fourthLabel = props.optionalLabels && props.optionalLabels.fourth ?
    <div className={classes.FourthLabel}>{props.optionalLabels.fourth}</div> : null;
  const optionalBtn = props.optionalBtn ?
    (<button
      className={classes.OptionalButton}
      onClick={props.optionalBtn.action}
    >{props.optionalBtn.value}</button>) : null;
  return (
    <div className={wrpClasses ? wrpClasses.join(' ') : null}>
      <label
        htmlFor={(props.elementConfig && props.elementConfig.id) || null}
        className={labelClasses ? labelClasses.join(' ') : null}
      >
        {props.elementConfig.label}
      </label>
      {secondLabel}
      {inputElement}
      {thirdLabel}
      {fourthLabel}
      {optionalBtn}
    </div>
  );
};

input.propTypes = {
  labelClasses: PropTypes.arrayOf(PropTypes.string),
  wrpClasses: PropTypes.arrayOf(PropTypes.string),
  inputClasses: PropTypes.arrayOf(PropTypes.string),
  elementType: PropTypes.string,
  optionalBtn: PropTypes.shape({
    action: PropTypes.func.isRequired,
    value: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]),
  }),
};

export default input;
