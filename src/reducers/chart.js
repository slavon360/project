import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../shared/utility';

const initialState = {
  chartData: null,
  error: false,
};

const setHourlyData = (state, action) => (
  updateObject(state, { chartData: action.hourlyData, })
);

const setWeekData = (state, action) => (
  updateObject(state, { chartData: action.weekData, })
);

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_HOURLY_DATA:
      return setHourlyData(state, action);
    case actionTypes.SET_WEEK_DATA:
      return setWeekData(state, action);
    default: return state;
  }
};

export default reducer;
