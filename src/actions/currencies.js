import * as actionTypes from './actionTypes';
import { objectIntoArray, addObjectName } from '../shared/utility';
import axios from '../requests/axios-coin-prices';

const setCoinsPrices = coins => {
    let updatedCoins = objectIntoArray(coins, null, addObjectName);
    console.log(updatedCoins);
    return {
      coins: updatedCoins,
      type: actionTypes.FETCH_COINS
    }
}
const fetchCoinsFailed = () => {
    return {
      type: actionTypes.FETCH_COINS_FAILED
    }
}
export const setCurrency = (currencyName) => {
    return {
      type: actionTypes.SET_CURRENCY,
      currencyName: currencyName
    }
}
export const fetchCoinsPrices = () => {
      return dispatch => {
          axios.get()
                .then(response => {
                  dispatch(setCoinsPrices(response.data))
                })
                .catch(err => {
                  dispatch(fetchCoinsFailed())
                })
      }
}
