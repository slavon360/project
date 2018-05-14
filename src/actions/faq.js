import * as actionTypes from './actionTypes';

export const switchCategoryQuestion = title => ({
  type: actionTypes.SWITCH_CATEGORY_QUESTION,
  title,
});
