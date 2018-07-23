import React from 'react';
import { setCurrentClasses } from '../../../shared/utility';
import classes from './ListPicker.css';

const listPicker = (props) => {
  let wrpClasses = [];
  wrpClasses = props.wrpClasses ? setCurrentClasses(props.wrpClasses, wrpClasses, classes) : null;
  return (
    <div className={wrpClasses ? wrpClasses.join(' ') : null}>
      {props.list.map(item => (
        <div
          role="button"
          tabIndex={0}
          key={item}
          onClick={() => props.setValue(item)}
        ><span>{item}</span></div>
      ))}
    </div>
  );
};

export default listPicker;
