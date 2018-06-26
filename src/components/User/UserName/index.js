import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import UserIcon from '../../UI/Icons/User';
import classes from './UserName.css';

const userName = props => (
  <Fragment>
    <div className={classes.Icon}><UserIcon styles={{ fill: '#922c58', backgroundColor: '#fff', borderRadius: '50%' }} /></div>
    <span className={classes.UserName}>
      <NavLink
        to={props.link}
        exact={props.exact}
      >{props.userName}</NavLink>
    </span>
  </Fragment>
);

export default userName;

userName.propTypes = {
  userName: PropTypes.string.isRequired,
};
