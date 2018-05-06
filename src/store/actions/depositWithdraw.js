import * as actionTypes from './actionTypes';

export const depositWithdrawSwitch = value => {
    return {
        type: actionTypes.DEPOSIT_WITHDRAW_SWITCH,
        value: value
    }
}
