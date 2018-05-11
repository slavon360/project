import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/configureStore';
import App from './App';
import './index.css';
import '../public/index.html';
import App from './App';
import currenciesReducer from './store/reducers/currencies';
import depositWithdrawReducer from './store/reducers/depositWithdraw';
import faqReducer from './store/reducers/faq';

const composeEnhancers = process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null || compose;
const rootReducer = combineReducers({
      currencies: currenciesReducer,
      depositWithdraw: depositWithdrawReducer,
      faq: faqReducer
})

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

const app = (
    <Provider store={store}>
      <BrowserRouter>
        <App/>
      </BrowserRouter>
    </Provider>
)

ReactDOM.render(app, document.getElementById('root'));
