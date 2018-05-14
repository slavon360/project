import { combineReducers } from 'redux';
import currencies from './currencies';
import depositWithdraw from './depositWithdraw';
import faq from './faq';

export default combineReducers({
  currencies,
  depositWithdraw,
  faq,
});
