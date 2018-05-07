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

const depositSetCryptoAddress = state => {
  const updInteractiveView = {
          interactiveView: [{
                elementType: 'input',
                elementConfig: {
                  type: 'text',
                  label: (coin) => {
                      return `${coin} Deposit Address`;
                  }
                },
                value: (val) => {
                  return val;
                }
              },
              {
                elementType: 'button',
                elementConfig: {},
                text: 'Copy Address'
              }]
            }
  const updSelectedCurrency = updateObject(state.currencyData.selectedCurrency, updInteractiveView);
  const updatedCurrencyData = updateObject(state.currencyData, {selectedCurrency: updSelectedCurrency});
  const updatedState = updateObject(state, {currencyData: updatedCurrencyData});
  return updatedState;
}

const buildInteractiveView = state => {
  let deposit = state.currencyData.deposit, currencyType = state.currencyData.selectedCurrency.currencyType,
  address = state.currencyData.selectedCurrency.address, amount = state.currencyData.selectedCurrency.amount;
  if (deposit && currencyType === 'cryptocurrency' && address && address.length >= 34) {
    return depositSetCryptoAddress(state);
  }
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
      case actionTypes.DEPOSIT_WITHDRAW_SWITCH:
        return depositWithdrawSwitch(state, action);
      case actionTypes.HIDE_CURRENCY_DROPDOWN:
        return hideCurrencyDropdown(state);
      case actionTypes.HIDE_SHOW_CURRENCY_DROPDOWN:
        return hideShowCurrencyDropdown(state);
      case actionTypes.BUILD_INTERACTIVE_VIEW:
        return buildInteractiveView(state, action);
      default: return state;
    }
}

export default reducer;
