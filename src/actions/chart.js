import * as actionTypes from './actionTypes';
import { chartDay } from '../../dumpData.json';
import axios from '../requests/axios-chart';

const addVolumeAndDateObj = (data) => {
  const updated = data.map(item => ({
    ...item,
    volume: item.volumefrom || item.volume,
    date: new Date(item.time),
  }));
  return updated;
};

const setHourlyData = (data) => {
  global.console.log(data);
  return {
    hourlyData: addVolumeAndDateObj(data),
    type: actionTypes.SET_HOURLY_DATA,
  };
};

const setWeekData = data => ({
  weekData: addVolumeAndDateObj(data),
  type: actionTypes.SET_WEEK_DATA,
});

const fetchWeekFailed = () => ({
  type: actionTypes.FETCH_WEEK_DATA_FAILED,
});

export const fetchHourlyData = () => setHourlyData(chartDay);

export const fetchWeekData = (limit, aggregate, currency) => (
  dispatch =>
    axios.get(`histoday?fsym=${currency.fsym}&tsym=${currency.tsym}&limit=${limit}&aggregate=${aggregate}`)
      .then(response => dispatch(setWeekData(response.data)))
      .catch(err => dispatch(fetchWeekFailed(err)))
);
