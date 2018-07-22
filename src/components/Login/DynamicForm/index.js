import React from 'react';
import PropTypes from 'prop-types';
import LoginForm from '../LoginForm';
import classes from './DynamicForm.css';

const dynamicForm = props => (
  <div className={classes.DynamicFormWrp} >
    <div className={classes.Title}>Bithela</div>
    <LoginForm
      usersData={props.usersData}
      setUsersData={props.setUsersData}
    />
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
  }),
  setUsersData: PropTypes.func,
};
