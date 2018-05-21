import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import FaqContent from './';

let question = {
  checked: false,
  questionTitle: 'Some question',
  answer: 'some answer'
}

let qstUnchecked = [
  {...question},
  {...question, questionTitle: 'What`s your age?', answer: '27'},
  {...question, questionTitle: 'question 2', answer: 'answer'},
]

let qstChecked = [
  {...question},
  {...question, questionTitle: 'What`s your age?', answer: '27', checked: true},
  {...question, questionTitle: 'question 2', answer: 'answer'},
]

let showAnswer = action('showAnswer');
let questionClass = 'FAQQuestionWrp';
storiesOf('FAQ', module)
  .add('unchecked',() => (<FaqContent questions={qstUnchecked} showAnswer={showAnswer} questionClass={questionClass} />))
  .add('checked',() => (<FaqContent questions={qstChecked} showAnswer={showAnswer} questionClass={questionClass} />))
