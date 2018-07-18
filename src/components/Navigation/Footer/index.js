import React from 'react';
import { NavLink } from 'react-router-dom';
import { translate } from 'react-i18next';
import Logo from '../../Logo';
import Telegram from '../../UI/Icons/Telegram';
import Facebook from '../../UI/Icons/Facebook';
import Twitter from '../../UI/Icons/Twitter';
import classes from './Footer.css';

const footer = props => (
  <footer className={classes.Footer}>
    <div className={classes.Top}>
      <div className={classes.LeftSide}>
        <div className={classes.Logo}>
          <Logo />
        </div>
        <span className={classes.NavItem}>
          <NavLink to="/about" exact activeClassName={classes.active}>{props.t('footer.about')}</NavLink>
        </span>
        <span className={classes.NavItem}>
          <NavLink to="/contact" exact activeClassName={classes.active}>{props.t('footer.contact')}</NavLink>
        </span>
        <span className={[classes.NavItem, classes.NavItemHelp].join(' ')}>
          <NavLink to="/help" exact activeClassName={classes.active}>{props.t('footer.helpSupport')}</NavLink>
        </span>
        <span className={classes.NavItem}>
          <NavLink to="/terms" exact activeClassName={classes.active}>{props.t('footer.terms')}</NavLink>
        </span>
      </div>
      <div className={classes.RightSide}>
        <span className={classes.Word}>{props.t('footer.social')}</span>
        <span className={classes.SocialIconTelegram}>
          <NavLink to="/telegram" exact activeClassName={classes.active}>
            <Telegram styles={{ fill: '#fff', width: '12px', height: '10px' }} />
          </NavLink>
        </span>
        <span className={classes.SocialIconFacebook}>
          <NavLink to="/facebook" exact activeClassName={classes.active}>
            <Facebook styles={{ fill: '#fff', width: '11px', height: '11px' }} />
          </NavLink>
        </span>
        <span className={classes.SocialIconTwitter}>
          <NavLink to="/twitter" exact activeClassName={classes.active}>
            <Twitter styles={{ fill: '#fff', width: '12px', height: '10px' }} />
          </NavLink>
        </span>
      </div>
    </div>
    <div className={classes.Bottom}>
      <div className={classes.TradingVolume}>
        {props.t('footer.tradingVolume')} <span>BTC / USD <span className={classes.Digits}>2654.35</span></span>
        <span>ETH / USD <span className={classes.Digits}>658.47</span></span>
      </div>
    </div>
  </footer>
);

export default translate()(footer);
