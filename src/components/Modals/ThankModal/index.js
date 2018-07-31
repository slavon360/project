import React from 'react';
import LeftSideBubbles from '../../UI/Icons/Bubbles/Small';
import RightSideBubbles from '../../UI/Icons/Bubbles/Huge';
import classes from './ThankModal.css';

const thank = () => (
  <div className={classes.ThankWrp}>
    <div className={classes.LeftSideBubbles}>
      <LeftSideBubbles />
    </div>
    <div className={classes.RightSideBubbles}>
      <RightSideBubbles />
    </div>
    <h2>Thank you for registering!</h2>
    <div className={classes.Note}>Please check your email for a confirmation link</div>
  </div>
);

export default thank;
