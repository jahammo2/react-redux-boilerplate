import { createStore } from 'redux';

import reducers from './reducers';

export function configureStore() {
  return createStore(reducers);
}
