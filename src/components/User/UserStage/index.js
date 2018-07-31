import React from 'react';
import PropTypes from 'prop-types';
import { translate } from 'react-i18next';
import classes from './UserStage.css';

const userStage = (props) => {
  const icon = props.stage.icon ? props.stage.icon : null;
  return (
    <div className={classes.UserStageWrp}>
      {props.stage.notVerified ? <div
        className={classes.NoteOnHover}
      >Please, verify bank account to be able to withdraw more than $100</div> : null}
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
      <div className={classes.DashedArea}>
        <div className={classes.FirstDash} />
        <div className={classes.SecondDash} />
        <div className={classes.ThirdDash} />
        <div className={classes.FourthDash} />
        <div className={classes.FifthDash} />
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
