import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { faq } from '../../../dumpData.json';
import SideBarNav from '../../components/SideBarNav';
import FaqContent from '../../components/FaqContent';
import classes from './FAQ.css';

class Faq extends Component {
  state = {
    selectedSection: null,
    sections: null,
  };

  componentDidMount() {
    let sections = faq.sections.map((sect) => {
      sect.content = sect.title;
      return sect;
    });
    this.setState({ selectedSection: faq.selectedSection, sections: faq.sections });
  }

  selectSection = (section) => {
    let updSections = [...this.state.sections];
    let updSelectedSection;
    updSections = updSections.map((sect) => {
      sect.checked = sect.title === section.title;
      sect.checked && (updSelectedSection = { ...sect });
      return sect;
    });

    this.setState({ selectedSection: updSelectedSection, sections: updSections });
  }

  showAnswer = (qst) => {
    let updQuestions = [...this.state.selectedSection.questions];
    const updSelectedSection = { ...this.state.selectedSection };
    updQuestions = updQuestions.map((question) => {
      question.checked = question.questionTitle === qst.questionTitle && !question.checked;
      return question;
    });
    updSelectedSection.questions = updQuestions;
    this.setState({ selectedSection: updSelectedSection });
  }

  render() {
    const questions = this.state.selectedSection ? this.state.selectedSection.questions : null;
    return (
      <div className={classes.FaqWrp}>
        <h2 className={classes.Title}>FAQ</h2>
        <div className={classes.FaqContainer}>
          <div className={classes.FaqHead}>
            <div className={classes.HaveQuestion}>Have some question?</div>
            <div className={classes.Submit} before-content="Submit Request">
              <NavLink
                to="/send-request"
                exact
              >
                Submit Request
              </NavLink>
            </div>
          </div>
          <SideBarNav
            navClass="FAQNavBtn"
            items={this.state.sections}
            checkItem={this.selectSection}
          />
          <FaqContent
            questionClass="FAQQuestionWrp"
            questions={questions}
            showAnswer={this.showAnswer}
          />
        </div>
      </div>
    );
  }
}

export default Faq;
