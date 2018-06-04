import React from 'react';
import PropTypes from 'prop-types';
import Arrow from '../UI/Arrow';
import classes from './FaqContent.css';

const faqContent = props => (
  <div className={classes.FaqContentWrp}>
    {props.questions.map((qst, index) => {
      const questionClasses = qst.checked ? [classes[props.questionClass], classes.Active] :
        [classes[props.questionClass], classes.Inactive];
      return (<div key={index} className={questionClasses.join(' ')}>
        <div className={classes.Icon}><Arrow /></div>
        <div
          className={classes.Title}
          role="button"
          tabIndex={0}
          onClick={() => props.showAnswer(qst)}
        >{qst.questionTitle}</div>
        <div className={classes.Answer}>{qst.answer}</div>
      </div>);
    })}
  </div>
);


export default faqContent;

faqContent.propTypes = {
  questionClass: PropTypes.string,
  questions: PropTypes.arrayOf(PropTypes.shape({
    checked: PropTypes.bool,
    questionTitle: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]),
    answer: PropTypes.string,
  })).isRequired,
  showAnswer: PropTypes.func,
};
