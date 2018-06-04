import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { setCurrentClasses } from '../../shared/utility';
import classes from './FileInput.css';

class FileInput extends Component {
  render() {
    const fileInputWrpClasses = this.props.wrpClasses ?
      setCurrentClasses(this.props.wrpClasses, [], classes) : null;
    const elementConfig = this.props.elementConfig;
    const label = elementConfig.label ?
      <div className={classes.Label}>{elementConfig.label}</div> : null;
    const icon = elementConfig.icon ?
      <div className={classes.Icon}>{elementConfig.icon}</div> : null;
    const sentences = (<div className={classes.Sentence}>
      {elementConfig.clickableSentence ? <span>{elementConfig.clickableSentence}</span> : null}
      {elementConfig.sentence ? <span>{elementConfig.sentence}</span> : null}
    </div>);
    return (
      <div className={fileInputWrpClasses.join(' ')}>
        {label}
        {icon}
        <input
          type="file"
          onChange={this.props.fileSelectedHandler}
        />
        {sentences}
      </div>
    );
  }
}

export default FileInput;

FileInput.propTypes = {
  elementConfig: PropTypes.shape({
    label: PropTypes.string,
    icon: PropTypes.element,
    clickableSentence: PropTypes.string,
    sentence: PropTypes.string,
  }),
  wrpClasses: PropTypes.arrayOf(PropTypes.string),
};
