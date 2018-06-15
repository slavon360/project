import React from 'react';
import PropTypes from 'prop-types';
import { translate } from 'react-i18next';
import classes from './UserStage.css';

const userStage = (props) => {
  const icon = props.stage.icon ? props.stage.icon : null;
  return (
    <div className={classes.UserStageWrp}>
      <div
        className={classes.Number}
        style={{ borderColor: props.stage.borderColor, color: props.stage.borderColor }}
      >
        {props.number}
      </div>
      <div className={classes.RightSide}>
        <div className={classes.Title}>{props.stage.title}</div>
        <div
          className={classes.Status}
          style={{ color: props.stage.color }}
        >
          {props.stage.verified &&
           props.t('status.verified')}
          {props.stage.isBeingVerified &&
            props.t('status.isBeingVerified')}
          {props.stage.notVerified &&
             props.t('status.notVerified')}
          {icon}
        </div>
      </div>
    </div>
  );
};

export default translate()(userStage);

userStage.propTypes = {
  stage: PropTypes.shape({
    title: PropTypes.string,
    status: PropTypes.string,
    color: PropTypes.string,
    borderColor: PropTypes.string,
  }),
};
