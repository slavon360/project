import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';
import { setCurrentClasses } from '../../../shared/utility';
import classes from './Dropdown.css';

const dropdown = props => {
    let drpWrpClasses = [], drpContainerClasses = [];
    drpWrpClasses = setCurrentClasses(props.drpWrpClasses, drpWrpClasses, classes);
    drpContainerClasses = setCurrentClasses(props.drpContainerClasses, drpContainerClasses, classes);
    let buttons = props.dropdownButtons.map((btn, index) => {
        let btnClass = btn.checked ? [props.activeBtn] : [];
        let icon = btn.icon ? <img alt={btn.title} src={btn.icon} /> : null;
        return <Button
                  elementConfig={props.elementConfig}
                  key={index}
                  btnClasses={btnClass}
                  clicked={() => {props.setValue(btn)}}>
                  {icon}<span>{btn.title}</span>
                </Button>
    })
    return (
      <div className={drpWrpClasses.join(' ')}>
        <Button
          elementConfig={props.elementConfig}
          btnClasses={props.dropdownButtonClasses}
          clicked={() => {props.hideShowDropdown(props.dropdownTitle)}}
          blurred={() => {props.hideDropdown(props.dropdownTitle)}}>
          {props.children}
        </Button>
        <div className={drpContainerClasses.join(' ')}>
          {buttons}
        </div>
      </div>
    )
}

dropdown.propTypes = {
  elementConfig: PropTypes.object,
  dropdownButtons: PropTypes.array.isRequired,
  drpWrpClasses: PropTypes.array.isRequired,
  drpContainerClasses: PropTypes.array.isRequired,
  dropdownButtonClasses: PropTypes.array.isRequired,
  hideShowDropdown: PropTypes.func,
  hideDropdown: PropTypes.func,
  setValue: PropTypes.func
}

export default dropdown;
