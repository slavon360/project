import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import UserIcon from '../../UI/Icons/User';
import classes from './UserName.css';

const userName = props => (
  <Fragment>
    <div className={classes.Icon}><UserIcon styles={{ fill: '#922c58', backgroundColor: '#fff', borderRadius: '50%' }} /></div>
    <span className={classes.UserName}>{props.userName}</span>
  </Fragment>
);

export default userName;

userName.propTypes = {
  userName: PropTypes.string.isRequired,
};
