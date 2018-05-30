import React from 'react';
import PropTypes from 'prop-types';
import classes from './InteractiveBlock.css';
import smartphoneIcon from '../../../assets/images/icons/smartphone.svg';
import lockedIcon from '../../../assets/images/icons/locked.svg';
import searchIcon from '../../../assets/images/icons/search.svg';

const getImage = (icon) => {
  switch (icon) {
    case 'smartphone': return smartphoneIcon;
    case 'search': return searchIcon;
    case 'locked': return lockedIcon;
    default: return null;
  }
};

const interactiveBlock = props => (
  <div className={[classes.InteractiveBlockWrp, classes[props.wrpClass]].join(' ')}>
    <div className={classes.Header}>{props.header}</div>
    <div className={classes.BodyWrp}>
      {props.rows.map((row, index) => (
        <div key={index} className={classes.Row}>
          {row.map((cell, i) => {
            const texts = cell.type === 'text' ? cell.text.split('|').map((item, k) => (
              <div className={classes.Text} key={k}>{item}</div>
            )) : null;
            return (<div key={i} className={classes.Cell}>
              {cell.type === 'icon' ? <img src={getImage(cell.icon)} alt={cell.icon} /> : null}
              {cell.type === 'button' ? <button>{cell.text}</button> : null}
              {texts}
            </div>);
          })}
        </div>
      ))}
    </div>
  </div>
);

export default interactiveBlock;

interactiveBlock.propTypes = {
  wrpClass: PropTypes.string,
  header: PropTypes.string,
  rows: PropTypes.arrayOf(PropTypes.obj).isRequired,
};
