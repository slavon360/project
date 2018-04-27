import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../../Logo';
import Telegram from '../../UI/Icons/Telegram';
import Facebook from '../../UI/Icons/Facebook';
import Twitter from '../../UI/Icons/Twitter';
import classes from './Footer.css';

const footer = (props) => (
    <footer className={classes.Footer}>
      <div className={classes.Top}>
        <div className={classes.LeftSide}>
          <div className={classes.Logo}>
            <Logo />
          </div>
          <span className={classes.NavItem}><NavLink to="/about" exact={true} activeClassName={classes.active}>About Us</NavLink></span>
          <span className={classes.NavItem}><NavLink to="/contact" exact={true} activeClassName={classes.active}>Contact Us</NavLink></span>
          <span className={[classes.NavItem, classes.NavItemHelp].join(' ')}>
            <NavLink to="/help" exact={true} activeClassName={classes.active}>HELP / Support</NavLink>
          </span>
          <span className={classes.NavItem}>
            <NavLink to="/terms" exact={true} activeClassName={classes.active}>Terms and Conditions</NavLink>
          </span>
        </div>
        <div className={classes.RightSide}>
          <span className={classes.Word}>Social</span>
          <span className={classes.SocialIconTelegram}>
            <NavLink to="" exact={true} activeClassName={classes.active}>
              <Telegram styles={{fill: '#fff', width: '12px', height: '10px'}} />
            </NavLink>
          </span>
          <span className={classes.SocialIconFacebook}>
            <NavLink to="" exact={true} activeClassName={classes.active}>
              <Facebook styles={{fill: '#fff', width: '11px', height: '11px'}} />
            </NavLink>
          </span>
          <span className={classes.SocialIconTwitter}>
            <NavLink to="" exact={true} activeClassName={classes.active}>
              <Twitter styles={{fill: '#fff', width: '12px', height: '10px'}} />
            </NavLink>
          </span>
        </div>
      </div>
      <div className={classes.Bottom}>
        <div className={classes.TradingVolume}>
          Tranding Volume: <span>BTC / USD <span className={classes.Digits}>2654.35</span></span>
          <span>ETH / USD <span className={classes.Digits}>658.47</span></span>
        </div>
      </div>
    </footer>
);

export default footer;
