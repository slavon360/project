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

export const buildInteractiveView = () => {
    return {
        type: actionTypes.BUILD_INTERACTIVE_VIEW
    }
}

export const changeInputsValue = (event, key) => {
    return {
        type: actionTypes.CHANGE_INPUTS_VALUE,
        value: event.target.value,
        key: key
    }
}
