import React from 'react';
import PropTypes from 'prop-types';
import classes from './LoginBackground.css';

const loginBackground = props => (
  <div
    className={classes.LoginBackgroundWrp}
    style={{ backgroundImage: `url(${props.backgroundImage}), linear-gradient(-63deg, #281e5b 0%, #1b124a 100%)` }}
  >
    <h1 className={classes.Head}>
      <span>{props.head}</span>
      <span className={classes.Title}>{props.title}</span>
    </h1>
    <div className={classes.Text}>{props.text}</div>
  </div>
);

export default loginBackground;

loginBackground.propTypes = {
  title: PropTypes.string,
  head: PropTypes.string,
  text: PropTypes.string,
  backgroundImage: PropTypes.string,
};
