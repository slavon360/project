import React from 'react';
import PropTypes from 'prop-types';
import Arrow from '../UI/Arrow';
import classes from './FaqContent.css';

const faqContent = props => {
    let questions;
    props.questions && (questions = props.questions.map((qst, index) => {
      let questionClasses = qst.checked ? [classes[props.questionClass], classes.Active] :
          [classes[props.questionClass], classes.Inactive];
      return (<div key={index} className={questionClasses.join(' ')}>
                <div className={classes.Icon}><Arrow /></div>
                <div className={classes.Title} onClick={() => {props.showAnswer(qst)}}>{qst.questionTitle}</div>
                <div className={classes.Answer}>{qst.answer}</div>
              </div>)
    }))
    return(
      <div className={classes.FaqContentWrp}>
        {questions}
      </div>
    )
}

export default faqContent;

faqContent.propTypes = {
  questionClass: PropTypes.string,
  questions: PropTypes.array,
  showAnswer: PropTypes.func
}
