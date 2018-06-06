import React from 'react';
import LoginForm from '../LoginForm';
import classes from './DynamicForm.css';

const dynamicForm = () => (
  <div className={classes.DynamicFormWrp} >
    <div className={classes.Title}>Bithela</div>
    <LoginForm />
    <div className={classes.Footer}>© 2018 Bithela.com All Rights Reserved</div>
  </div>
);

export default dynamicForm;
