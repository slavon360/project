import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import UserIcon from '../../UI/Icons/User';
import classes from './UserStatus.css';

const userStatus = (props) => {
    return (
      <Fragment>
        <div className={classes.UserIconWrp}>
          <UserIcon styles={{fill: '#922c88', width: '45px', height: '45px'}} />
        </div>
        <div className={classes.RightSection}>
          <div className={classes.Mail}>{props.userData.mail}</div>
          <div className={classes.ProgressWrp}>
            <div className={classes.UpperSection}>
              <div className={classes.Profile}>Profile</div>
              <div className={classes.Percents}>{props.userData.progress}%</div>
            </div>
            <div className={classes.BackLine}>
              <div className={classes.Progress} style={{width: props.userData.progress + '%'}}></div>
            </div>
          </div>
        </div>
      </Fragment>
    )
}

export default userStatus;

userStatus.propTypes = {
    userData: PropTypes.shape({
      mail: PropTypes.string,
      progress: PropTypes.number
    })
}
