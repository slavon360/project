import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../shared/utility';

const initialState = {
  coins: null,
  error: false,
  selectedCrypt: null,
};

const fetchCoins = (state, action) => (
  updateObject(state, { coins: action.coins, selectedCrypt: action.coins[0] })
);

const setCurrency = (state, action) => {
  let updatedCoins = state.coins.slice();
  let updatedSelectedCrypt = {};
  updatedCoins = updatedCoins.map((coin) => {
    const copiedCoin = { ...coin };
    coin.name === action.currencyName
      ? (copiedCoin.checked = true) && (updatedSelectedCrypt = { ...copiedCoin })
      : copiedCoin.checked = false;
    return copiedCoin;
  });
  return updateObject(state, { coins: updatedCoins, selectedCrypt: updatedSelectedCrypt });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_COINS:
      return fetchCoins(state, action);
    case actionTypes.SET_CURRENCY:
      return setCurrency(state, action);
    default: return state;
  }
};

export default reducer;
