import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import classes from './InteractiveBlock.css';

const interactiveBlock = (props) => {
    let body;
    props.rows && (body = props.rows.map((row, index) => {
      return (<div key={index} className={classes.Row}>
                {row.map((cell, index) => {
                  let texts = cell.type === 'text' ? cell.text.split('|').map((item, index) => {
                    return <div className={classes.Text} key={index}>{item}</div>
                  }) : null
                  return (<div key={index} className={classes.Cell}>
                            {cell.type === 'icon' ? <img src={require(`../../../assets/images/icons/${cell.icon}`)} /> : null}
                            {cell.type === 'button' ? <button>{cell.text}</button> : null}
                            {texts}
                          </div>)
                })}
              </div>)
    }))
    return (
      <div className={[classes.InteractiveBlockWrp, classes[props.wrpClass]].join(' ')}>
        <div className={classes.Header}>{props.header}</div>
        <div className={classes.BodyWrp}>
          {body}
        </div>
      </div>
    )
}

export default interactiveBlock;

interactiveBlock.propTypes = {

}
