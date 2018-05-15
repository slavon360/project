import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import classes from './SideBarNav.css';
let cx = classNames.bind(classes);

const sideBarNav = props => {
    let navigations;
    props.items && (navigations = props.items.map((nav) => {
          return <div
                    onClick={() => {props.checkItem(nav)}}
                    key={nav.title}
                    className={cx(props.navClass, { 'Active': nav.checked , 'Inactive': !nav.checked })}>
                    {nav.content}
                  </div>
        }))
    return(
      <div className={classes.SideBarNavWrp}>
        {navigations}
      </div>
    )
}

export default sideBarNav;

sideBarNav.propTypes = {
  navClass: PropTypes.string,
  items: PropTypes.array,
  checkItem: PropTypes.func
}
