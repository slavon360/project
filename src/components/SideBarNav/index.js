import React from 'react';
import PropTypes from 'prop-types';
import classes from './SideBarNav.css';

const sideBarNav = props => {
    let navigations;
    props.items && (navigations = props.items.map((nav) => {
          let navClasses = nav.checked ? [classes[props.navClass], classes.Active] :
              [classes[props.navClass], classes.Inactive];
          return <div
                    onClick={() => {props.checkItem(nav)}}
                    key={nav.title}
                    className={navClasses.join(' ')}>
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
