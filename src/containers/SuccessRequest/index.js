import React from 'react';
import classes from './SuccessRequest.css';
import success from '../../../assets/images/backgrounds/success.png';

const successRequest = () => (
  <div className={classes.SuccessRequestWrp}>
    <h2>Thank you!</h2>
    <div className={classes.Send}>Request has been send</div>
    <div className={classes.ImgWrp}>
      <img src={success} alt="success" />
    </div>
  </div>
);

export default successRequest;
