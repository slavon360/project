import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import UserIcon from '../../UI/Icons/User';
import classes from './UserName.css';

const userName = props => (
    <Fragment>
      <div className={classes.Icon}><UserIcon /></div>
      <span className={classes.UserName}>{props.userName}</span>
    </Fragment>
);

export default userName;

userName.propTypes = {
  userName: PropTypes.string.isRequired,
}
