// Esse reducer será responsável por tratar as informações da pessoa usuária
import { USER_LOGIN } from '../actions/index';

const INITIAL_STATE = {
  email: '',
  password: '',
};

function userReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case USER_LOGIN:
    return { ...state, ...action.payload };
  default:
    return state;
  }
}

export default userReducer;
