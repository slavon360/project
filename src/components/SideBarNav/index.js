import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import classes from './SideBarNav.css';

const cx = classNames.bind(classes);

const sideBarNav = props => (<div className={classes.SideBarNavWrp}>
    {props.items.map(nav => (<Fragment key={nav.title}>
    <div
      role="button"
      tabIndex={0}
      onClick={() => props.checkItem(nav)}
      className={cx(props.navClass, { Active: nav.checked, Inactive: !nav.checked })}
    >
      {nav.content}
    </div>
      {props.mobileContent && <div className={classes.MobileContent}>
        {props.mobileContent}</div>}
    </Fragment>
    ))}
  </div>
);

export default sideBarNav;

sideBarNav.propTypes = {
  navClass: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.obj).isRequired,
  checkItem: PropTypes.func,
};
