import * as actionTypes from './actionTypes';
import axios from '../requests/axios-chart';

const addVolumeAndDateObj = (data) => {
  const updated = data.Data.map(item => ({
    ...item,
    volume: item.volumefrom,
    date: new Date(item.time * 1000),
  }));
  return updated;
};

const setHourlyData = data => ({
  hourlyData: addVolumeAndDateObj(data),
  type: actionTypes.SET_HOURLY_DATA,
});

const setWeekData = data => ({
  weekData: addVolumeAndDateObj(data),
  type: actionTypes.SET_WEEK_DATA,
});

const fetchHourlyFailed = () => ({
  type: actionTypes.FETCH_HOURLY_DATA_FAILED,
});

const fetchWeekFailed = () => ({
  type: actionTypes.FETCH_WEEK_DATA_FAILED,
});

export const fetchHourlyData = (limit, aggregate, currency) => (
  dispatch =>
    axios.get(`histohour?fsym=${currency.fsym}&tsym=${currency.tsym}&limit=${limit}&aggregate=${aggregate}`)
      .then(response => dispatch(setHourlyData(response.data)))
      .catch(err => dispatch(fetchHourlyFailed(err)))
);

export const fetchWeekData = (limit, aggregate, currency) => (
  dispatch =>
    axios.get(`histoday?fsym=${currency.fsym}&tsym=${currency.tsym}&limit=${limit}&aggregate=${aggregate}`)
      .then(response => dispatch(setWeekData(response.data)))
      .catch(err => dispatch(fetchWeekFailed(err)))
);
