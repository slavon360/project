import { combineReducers } from 'redux';
import chart from './chart';
import currencies from './currencies';
import depositWithdraw from './depositWithdraw';
import faq from './faq';

export default combineReducers({
  chart,
  currencies,
  depositWithdraw,
  faq,
});
