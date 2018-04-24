import React from 'react';
import PropTypes from 'prop-types';
import { setCurrentClasses } from '../../../shared/utility';
import classes from './Button.css';

const button = (props) => {
    let currentClasses = [classes.Button];
    currentClasses = setCurrentClasses(props.btnClasses, currentClasses, classes);
    return (
              <button
                type={props.type}
                disabled={props.disabled}
                className={currentClasses.join(' ')}
                onClick={props.clicked}
                onBlur={() => {window.setTimeout(props.blurred, 200)}}
                before-content={props.beforeContent}>
                {props.children}
              </button>
          )
};

button.propTypes = {
  onClick: PropTypes.func
}

export default button;
