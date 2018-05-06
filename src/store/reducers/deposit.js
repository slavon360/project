import * as actionTypes from '../actions/actionTypes';
import { currencyData } from '../../shared/dumpData';
import { updateObject } from '../../shared/utility';

const initialState = {
    currencyData
}

const depositWithdrawSwitch = (state, action) => {
    return updateObject(state, {
                          deposit: action.value === 'deposit' ? true : false,
                          title: action.value === 'deposit' ? 'Deposit' : 'Withdraw',
                          type: action.value === 'deposit' ? 'Deposits' : 'Withdrawal'
                        })
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
      case actionTypes.DEPOSIT_WITHDRAW_SWITCH:
        return depositWithdrawSwitch(state, action);
      default: return state;
    }
}

export default reducer;
