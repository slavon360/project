import React from 'react';
import Button from '../Button';
import { setCurrentClasses } from '../../../shared/utility';
import classes from './Dropdown.css';

const dropdown = props => {
    let drpWrpClasses = [], drpContainerClasses = [];
    drpWrpClasses = setCurrentClasses(props.drpWrpClasses, drpWrpClasses, classes);
    drpContainerClasses = setCurrentClasses(props.drpContainerClasses, drpContainerClasses, classes);
    let buttons = props.dropdownButtons.map(btn => {
        let btnClass = btn.checked ? [props.activeBtn] : [];
        let icon = btn.icon ? <img alt={btn.title} src={btn.icon} /> : null;
        return <Button
                  key={btn.title}
                  btnClasses={btnClass}
                  clicked={() => {props.setValue(btn)}}>
                  {icon}<span>{btn.title}</span>
                </Button>
    })
    return (
      <div className={drpWrpClasses.join(' ')}>
        <Button
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

export default dropdown;
