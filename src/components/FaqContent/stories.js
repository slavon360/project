import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import FaqContent from './';

const question = {
  checked: false,
  questionTitle: 'Some question',
  answer: 'some answer',
};

const qstUnchecked = [
  { ...question },
  { ...question, questionTitle: 'What`s your age?', answer: '27' },
  { ...question, questionTitle: 'question 2', answer: 'answer' },
];

const qstChecked = [
  { ...question },
  { ...question, questionTitle: 'What`s your age?', answer: '27', checked: true },
  { ...question, questionTitle: 'question 2', answer: 'answer' },
];

const showAnswer = action('showAnswer');
const questionClass = 'FAQQuestionWrp';
storiesOf('FAQ', module)
  .add('unchecked', () => (<FaqContent questions={qstUnchecked} showAnswer={showAnswer} questionClass={questionClass} />))
  .add('checked', () => (<FaqContent questions={qstChecked} showAnswer={showAnswer} questionClass={questionClass} />));
