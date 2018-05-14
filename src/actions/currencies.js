import * as actionTypes from './actionTypes';
import { objectIntoArray, addObjectName } from '../shared/utility';
import axios from '../requests/axios-coin-prices';

const setCoinsPrices = (coins) => {
  const updatedCoins = objectIntoArray(coins, null, addObjectName);
  console.log(updatedCoins);
  return {
    coins: updatedCoins,
    type: actionTypes.FETCH_COINS,
  };
};

const fetchCoinsFailed = () => ({
  type: actionTypes.FETCH_COINS_FAILED,
});

export const setCurrency = currencyName => ({
  type: actionTypes.SET_CURRENCY,
  currencyName,
});

export const fetchCoinsPrices = () => (
  dispatch =>
    axios.get()
      .then(response => dispatch(setCoinsPrices(response.data)))
      .catch(err => dispatch(fetchCoinsFailed(err)))
);
