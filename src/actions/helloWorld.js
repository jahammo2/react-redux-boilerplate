import actionTypes from '../constants/actionTypes';

function getHelloWorld(helloWorldDetails) {
  return {
    type: actionTypes.GET_HELLO_WORLD_SUCCESS,
    payload: { helloWorldDetails }
  };
}

export {
  getHelloWorld
};
