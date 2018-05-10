import * as actionTypes from './actionTypes';

export const switchCategoryQuestion = title => {
    return {
        type: actionTypes.SWITCH_CATEGORY_QUESTION,
        title: title
    }
}
