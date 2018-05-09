import React, { Component } from 'react';
import { setCurrentClasses } from '../../shared/utility';
import classes from './FileInput.css';

class FileInput extends Component{
    render(){
      let fileInputWrpClasses = this.props.wrpClasses ? setCurrentClasses(this.props.wrpClasses, [], classes) : null;
      let elementConfig = this.props.elementConfig;
      let label = elementConfig.label ? <div className={classes.Label}>{elementConfig.label}</div> : null;
      let icon = elementConfig.icon ? <div className={classes.Icon}>{elementConfig.icon}</div> : null;
      let sentences = <div className={classes.Sentence}>
                        {elementConfig.clickableSentence ? <span>{elementConfig.clickableSentence}</span> : null}
                        {elementConfig.sentence ? <span>{elementConfig.sentence}</span> : null}
                      </div>
      return(
        <div className={fileInputWrpClasses.join(' ')}>
          {label}
          {icon}
          <input type="file" />
          {sentences}
        </div>
      )
    }
}

export default FileInput;
