import React from 'react';
import Button from '../Button';
import { setCurrentClasses } from '../../../shared/utility';
import classes from './Dropdown.css';

const dropdown = props => {
    let drpWrpClasses = [], drpContainerClasses = [];
    drpWrpClasses = setCurrentClasses(props.drpWrpClasses, drpWrpClasses, classes);
    drpContainerClasses = setCurrentClasses(props.drpContainerClasses, drpContainerClasses, classes);
    let buttons = props.dropdownButtons.map(btn => {
        let btnClass = btn.checked ? [props.activeBtn] : [props.inactiveBtn];
        return <Button key={btn.title} btnClasses={btnClass}>{btn.title}</Button>
    })
    return (
      <div className={drpWrpClasses.join(' ')}>
        <Button
          btnClasses={props.dropdownButtonClasses}
          clicked={() => {props.hideShowDropdown(props.dropdownTitle)}}>
          {props.dropdownTitle}
        </Button>
        <div className={drpContainerClasses.join(' ')}>
          {buttons}
        </div>
      </div>
    )
}

export default dropdown;
