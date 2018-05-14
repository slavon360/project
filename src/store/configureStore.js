import { applyMiddleware, createStore, compose } from 'redux';
import thunk from 'redux-thunk';
import reducers from '../reducers';

const initStore = () => {
  /* eslint-disable no-underscore-dangle */
  const composeEnhancers =
    process.env.NODE_ENV !== 'production' &&
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        name: 'BitHela',
      }) : compose;
  /* eslint-enable no-underscore-dangle */

  const store = createStore(
    reducers,
    composeEnhancers(
      applyMiddleware(
        thunk,
      ),
    ),
  );
  return store;
};

export default initStore();
