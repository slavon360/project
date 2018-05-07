import * as actionTypes from './actionTypes';

export const depositWithdrawSwitch = value => {
    return {
        type: actionTypes.DEPOSIT_WITHDRAW_SWITCH,
        value: value
    }
}

export const hideShowCurrencyDropdown = () => {
    return {
        type: actionTypes.HIDE_SHOW_CURRENCY_DROPDOWN
    }
}

export const hideCurrencyDropdown = () => {
    return {
        type: actionTypes.HIDE_CURRENCY_DROPDOWN
    }
}
