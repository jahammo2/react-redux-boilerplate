import Immutable from 'immutable';
import actionTypes from '../constants/actionTypes';

const INITIAL_STATE = new Immutable.Map({
  foo: false
});

function products(state = INITIAL_STATE, action) {
  switch (action.type) {
  case actionTypes.GET_HELLO_WORLD_SUCCESS:
    return state.withMutations((map) => {
      map.set('foo', true);
    });

  default:
    return state;
  }
}

export default products;
