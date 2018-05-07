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

const depositShowCryptoAddress = state => {
  const updInteractiveView = {
          interactiveView: [{
                id: '01',
                elementType: 'input',
                classes: ['DepositAddress'],
                currentKey: 'address',
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
                id: '02',
                elementType: 'button',
                classes: ['CopyDepositAddressWrp'],
                elementConfig: {'before-content': 'Copy Address'},
                text: 'Copy Address'
              }]
            }
  const updSelectedCurrency = updateObject(state.currencyData.selectedCurrency, updInteractiveView);
  const updatedCurrencyData = updateObject(state.currencyData, {selectedCurrency: updSelectedCurrency});
  const updatedState = updateObject(state, {currencyData: updatedCurrencyData});
  return updatedState;
}
const depositShowCryptoAmount = state => {
  const updInteractiveView = {
            interactiveView: [{
                  id: '01',
                  elementType: 'input',
                  classes: ['DepositAddress'],
                  currentKey: 'amount',
                  elementConfig: {
                    type: 'text',
                    label: () => {
                        return `Enter Amount`;
                    }
                  },
                  value: (val) => {
                    return val;
                  }
                },
                {
                  id: '02',
                  elementType: 'button',
                  classes: ['CopyDepositAddressWrp'],
                  elementConfig: {'before-content': 'Next'},
                  text: 'Next'
                }]
  }
}

const buildInteractiveView = state => {
  let deposit = state.currencyData.deposit, currencyType = state.currencyData.selectedCurrency.currencyType,
  copiedAddress = state.currencyData.selectedCurrency.copiedAddress, amount = state.currencyData.selectedCurrency.amount;
  if (deposit && currencyType === actionTypes.CRYPTOCURRENCY && !copiedAddress) {
    return depositShowCryptoAddress(state);
  }
  if (deposit && currencyType === actionTypes.CRYPTOCURRENCY && copiedAddress ) {
    return depositShowCryptoAmount(state);
  }
}
const changeInputsValue = (state, action) => {
    console.log(action)
    const updatedValue = {[action.key]: action.value};
    const updSelectedCurrency = updateObject(state.currencyData.selectedCurrency, updatedValue);
    const updatedCurrencyData = updateObject(state.currencyData, {selectedCurrency: updSelectedCurrency});
    const updatedState = updateObject(state, {currencyData: updatedCurrencyData});
    return updatedState;
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
        return buildInteractiveView(state);
      case actionTypes.CHANGE_INPUTS_VALUE:
        return changeInputsValue(state, action);
      default: return state;
    }
}

export default reducer;
