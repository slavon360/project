import React from 'react';
import PropTypes from 'prop-types';
import NavLink from 'react-router-dom';
import classes from './Footer.css';
import TelegramIcon from '../../UI/Icons/Telegram';
import FacebookIcon from '../../UI/Icons/Facebook';
import TwitterIcon from '../../UI/Icons/Twitter';

const exchange = props => (
  <div className={classes.FooterWrp}>
    <div className={classes.LeftSide}>
      <div className={classes.Terms}>
        <NavLink to="/terms" exact activeClassName={classes.active}>Terms and Conditions</NavLink>
      </div>
      <div className={classes.Social}>Social</div>
      <div className={classes.Telegram}><TelegramIcon /></div>
      <div className={classes.Facebook}><FacebookIcon /></div>
      <div className={classes.Twitter}><TwitterIcon /></div>
    </div>
    <div className={classes.MiddleSide}>
      © new Date().getFullYear() Bithela.com All Rights Reserved
    </div>
    <div className={classes.RightSide}>
      <div className={classes.TrandingVolume}>Tranding Volume:</div>
      <div className={classes.ProportionBtc}>{props.proportionBtc}</div>
      <div className={classes.ProportionRth}>{props.proportionEth}</div>
    </div>
  </div>
);

export default exchange;

exchange.propTypes = {
  proportionBtc: PropTypes.string.isRequired,
  proportionEth: PropTypes.string.isRequired,
};
