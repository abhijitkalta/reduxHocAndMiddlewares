import { createStore, applyMiddleware } from 'redux';
import { throttle } from 'lodash';
import promise from 'redux-promise';
import { loadState, saveState } from './localStorage';
import reducers from './reducers/index';

import async from './middlewares/async';
import logger from './middlewares/addLoggingToDispatch';

const configureStore = () => {
  const persistedState = loadState();
  const middlewares = [logger, async];

  const store = createStore(reducers, persistedState, applyMiddleware(...middlewares));

  store.subscribe(throttle(() => {
    saveState(store.getState());
  }, 1000));

  return store;
};

export default configureStore;
