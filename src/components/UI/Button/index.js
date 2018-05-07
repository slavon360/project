import React from 'react';
import PropTypes from 'prop-types';
import { setCurrentClasses } from '../../../shared/utility';
import classes from './Button.css';

const button = (props) => {
    let currentClasses = [classes.Button];
    currentClasses = props.btnClasses ? setCurrentClasses(props.btnClasses, currentClasses, classes) : null;
    return (
              <button
                {...props.elementConfig}
                className={currentClasses ? currentClasses.join(' ') : null}
                onClick={props.clicked}
                onBlur={() => {window.setTimeout(props.blurred, 200)}}>
                {props.children}
              </button>
          )
};

button.propTypes = {
  onClick: PropTypes.func,
  btnClasses: PropTypes.array
}

export default button;
