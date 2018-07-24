import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';
import { setCurrentClasses } from '../../../shared/utility';
import classes from './Dropdown.css';

const dropdown = (props) => {
  let drpWrpClasses = [];
  let drpContainerClasses = [];
  drpWrpClasses = setCurrentClasses(props.drpWrpClasses, drpWrpClasses, classes);
  drpContainerClasses = setCurrentClasses(props.drpContainerClasses, drpContainerClasses, classes);
  const buttons = props.dropdownButtons.map((btn, index) => {
    const btnClass = btn.checked ? [props.activeBtn] : [];
    const icon = btn.icon ? <img alt={btn.title} src={btn.icon} /> : null;
    return (<Button
      elementConfig={props.elementConfig}
      key={index}
      btnClasses={btnClass}
      clicked={() => { props.setValue(btn); }}
    >
      {icon}<span><a href={btn.link ? btn.link : null}>{btn.title}</a></span>
    </Button>);
  });
  return (
    <div className={drpWrpClasses.join(' ')}>
      <Button
        elementConfig={props.elementConfig}
        btnClasses={props.dropdownButtonClasses}
        clicked={() => { props.hideShowDropdown(props.dropdownTitle); }}
        blurred={() => { props.hideDropdown(props.dropdownTitle); }}
      >
        {props.children}
      </Button>
      <div className={drpContainerClasses.join(' ')}>
        {buttons}
      </div>
    </div>
  );
};

dropdown.propTypes = {
  elementConfig: PropTypes.shape({
    value: PropTypes.string,
    placeholder: PropTypes.string,
  }),
  dropdownButtons: PropTypes.arrayOf(PropTypes.shape({
    checked: PropTypes.bool,
    icon: PropTypes.string,
    title: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.element,
      PropTypes.number,
    ]),
  })).isRequired,
  drpWrpClasses: PropTypes.arrayOf(PropTypes.string).isRequired,
  drpContainerClasses: PropTypes.arrayOf(PropTypes.string).isRequired,
  dropdownButtonClasses: PropTypes.arrayOf(PropTypes.string).isRequired,
  hideShowDropdown: PropTypes.func,
  hideDropdown: PropTypes.func,
  setValue: PropTypes.func,
};

export default dropdown;
