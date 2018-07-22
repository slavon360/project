import React from 'react';
import PropTypes from 'prop-types';
import classes from './DynamicForm.css';

const dynamicForm = props => (
  <div className={classes.DynamicFormWrp} >
    <div className={classes.Title}>Bithela</div>
    {props.children}
    <div className={classes.Footer}>
      © {new Date().getFullYear()} Bithela.com All Rights Reserved
    </div>
  </div>
);

export default dynamicForm;

dynamicForm.propTypes = {
  usersData: PropTypes.shape({
    email: PropTypes.string,
    password: PropTypes.string,
    repeatPassword: PropTypes.string,
    terms: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.bool,
    ]),
  }),
  setUsersData: PropTypes.func,
};
