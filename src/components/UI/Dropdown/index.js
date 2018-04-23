import React from 'react';
import Button from '../Button';
import { setCurrentClasses } from '../../../shared/utility';
import classes from './Dropdown.css';

const dropdown = props => {
    let drpWrpClasses = [], drpContainer = [];
    drpWrpClasses = setCurrentClasses(props.drpWrpClasses, drpWrpClasses, classes);
    drpContainer = setCurrentClasses(props.drpContainer, drpContainer, classes);
    let buttons = props.dropdownButtons.map(btn => {
        let btnClass = btn.checked ? classes[props.activeBtn] : classes[props.inactiveBtn];
        return <Button className={btnClass.join(' ')}>{btn.title}</Button>
    })
    return (
      <div className={drpWrpClasses.join(' ')}>
        <Button clicked={}>{props.dropdownTitle}</Button>
        <div className={drpContainer.join(' ')}>
          {buttons}
        </div>
      </div>
    )
}

export default dropdown;
