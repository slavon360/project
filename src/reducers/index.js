import { combineReducers } from 'redux';
import currencies from './currencies';
import depositWithdraw from './depositWithdraw';

export default combineReducers({
    currencies,
    depositWithdraw,
})
