import * as actionTypes from '../actions/actionTypes';
import { faq } from '../../dumpData.json';
import { updateObject } from '../shared/utility';

const initialState = {
  faq,
};

const switchCategoryQuestion = (state, action) => {
  const selectedSection = state.faq.sections.reduce((result, current) => {
    action.title === current.title && (result = current);
    return result;
  }, null);
  const updSelectedSection = { selectedSection };
  const updFaq = updateObject(state.faq, updSelectedSection);
  return updateObject(state, updFaq);
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SWITCH_CATEGORY_QUESTION:
      return switchCategoryQuestion(state, action);
    default: return state;
  }
};

export default reducer;
