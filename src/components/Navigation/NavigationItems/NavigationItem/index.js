import React from 'react';
import { NavLink } from 'react-router-dom';
import cx from 'classnames';
import classes from './NavigationItem.css';

const navigationItem = (props) => {
          let optionalClasses = classes[props.optionalClass];
          return (
                  <li className={cx(classes.NavigationItem, { [optionalClasses]: props.optionalClass })}>
                    <NavLink
                      to={props.link}
                      exact={props.exact}
                      activeClassName={classes.active}>
                      {props.children}
                    </NavLink>
                  </li>
                )
};

export default navigationItem;
