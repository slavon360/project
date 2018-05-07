import * as actionTypes from '../actions/actionTypes';
import { currencyData } from '../../shared/dumpData';
import { updateObject } from '../../shared/utility';

const initialState = {
    currencyData
}

const depositWithdrawSwitch = (state, action) => {
    const updCurrencyDataParams = {
      deposit: (action.value === actionTypes.DEPOSIT ? true : false),
      title: (action.value === actionTypes.DEPOSIT ? 'Deposit' : 'Withdraw'),
      type: (action.value === actionTypes.DEPOSIT ? 'Deposits' : 'Withdrawal')
    }
    const updCurrencyData = updateObject(state.currencyData, updCurrencyDataParams);
    const updatedState = { currencyData: updCurrencyData}
    return updateObject(state, updatedState);
}
const hideCurrencyDropdown = state => {
    const updShowDpDwn = { showDpDwn: false };
    const updCurrencyData = updateObject(state.currencyData, updShowDpDwn);
    const updatedState = { currencyData: updCurrencyData };
    return updateObject(state, updatedState);
}
const hideShowCurrencyDropdown = state => {
  const updShowDpDwn = { showDpDwn: (state.currencyData.showDpDwn ? false : true)};
  const updCurrencyData = updateObject(state.currencyData, updShowDpDwn);
  const updatedState = { currencyData: updCurrencyData };
  return updateObject(state, updatedState);
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
      case actionTypes.DEPOSIT_WITHDRAW_SWITCH:
        return depositWithdrawSwitch(state, action);
      case actionTypes.HIDE_CURRENCY_DROPDOWN:
        return hideCurrencyDropdown(state);
      case actionTypes.HIDE_SHOW_CURRENCY_DROPDOWN:
        return hideShowCurrencyDropdown(state);
      default: return state;
    }
}

export default reducer;
