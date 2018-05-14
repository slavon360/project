import * as actionTypes from './actionTypes';

export const depositWithdrawSwitch = value => ({
  type: actionTypes.DEPOSIT_WITHDRAW_SWITCH,
  value,
});

export const hideShowCurrencyDropdown = () => ({
  type: actionTypes.HIDE_SHOW_CURRENCY_DROPDOWN,
});

export const hideCurrencyDropdown = () => ({
  type: actionTypes.HIDE_CURRENCY_DROPDOWN,
});

export const buildInteractiveView = () => ({
  type: actionTypes.BUILD_INTERACTIVE_VIEW,
});

export const changeInputsValue = (event, key) => ({
  type: actionTypes.CHANGE_INPUTS_VALUE,
  value: event.target.value,
  key,
});

export const copyAddress = () => ({
  type: actionTypes.COPY_ADDRESS,
});
