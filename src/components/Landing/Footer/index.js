import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import classes from './Footer.css';
import TelegramIcon from '../../UI/Icons/Telegram';
import FacebookIcon from '../../UI/Icons/Facebook';
import TwitterIcon from '../../UI/Icons/Twitter';

const footer = props => (
  <div className={classes.FooterWrp}>
    <div className={classes.Footer}>
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
        <div className={classes.ProportionBtc}>
          <span className={classes.Key}>{props.proportions.proportionBtcKey}</span>
          <span className={classes.Value}>{props.proportions.proportionBtcValue}</span>
        </div>
        <div className={classes.ProportionEth}>
          <span className={classes.Key}>{props.proportions.proportionEthKey}</span>
          <span className={classes.Value}>{props.proportions.proportionEthValue}</span>
        </div>
      </div>
    </div>
  </div>
);

export default footer;

footer.propTypes = {
  proportions: PropTypes.shape({
    proportionBtcKey: PropTypes.string.isRequired,
    proportionBtcValue: PropTypes.oneOfType([
      PropTypes.string.isRequired,
      PropTypes.number.isRequired,
    ]),
    proportionEthKey: PropTypes.string.isRequired,
    proportionEthValue: PropTypes.oneOfType([
      PropTypes.string.isRequired,
      PropTypes.number.isRequired,
    ]),
  }),
};
