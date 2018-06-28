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
    mobileView: null,
  };

  updateDimensions = () => {
    if (window.innerWidth < 768 && !this.state.mobileView) this.setState({ mobileView: true });
    if (window.innerWidth >= 768 && this.state.mobileView) this.setState({ mobileView: false });
  }

  componentWillMount = () => {
    this.updateDimensions();
    const sections = faq.sections.map(sect => ({
      ...sect,
      content: sect.title,
    }));
    this.setState({ selectedSection: faq.selectedSection, sections });
  }
  componentDidMount() {
    window.addEventListener('resize', this.updateDimensions);
  }
  componentWillUnmount = () => {
    window.removeEventListener('resize', this.updateDimensions);
  }

  selectSection = (section) => {
    let updSections = [...this.state.sections];
    let updSelectedSection;
    updSections = updSections.map((sect) => {
      const updSect = { ...sect };
      if (!this.state.mobileView) {
        updSect.checked = sect.title === section.title;
      }
      if (this.state.mobileView) {
        updSect.checked = (sect.title === section.title && !sect.checked);
      }
      if (sect.title === section.title) {
        updSelectedSection = { ...sect };
      }
      return updSect;
    });
    this.setState({ selectedSection: updSelectedSection, sections: updSections });
  }

  showAnswer = (qst) => {
    let updQuestions = [...this.state.selectedSection.questions];
    const updSelectedSection = { ...this.state.selectedSection };
    updQuestions = updQuestions.map(question => ({
      ...question,
      checked: question.questionTitle === qst.questionTitle && !question.checked,
    }));
    updSelectedSection.questions = updQuestions;
    this.setState({ selectedSection: updSelectedSection });
  }

  render() {
    const questions = this.state.selectedSection ? this.state.selectedSection.questions : [];
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
            mobileContent={<FaqContent
              questionClass="FAQQuestionWrp"
              questions={questions}
              showAnswer={this.showAnswer}
            />}
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
