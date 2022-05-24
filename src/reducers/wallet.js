// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { GET_CURRENCIES, SAVE_EXPENSE } from '../actions/index';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

function wallet(state = INITIAL_STATE, action) {
  switch (action.type) {
  case GET_CURRENCIES:
    return {
      ...state,
      currencies: [...action.currencies],
    };
  case SAVE_EXPENSE:
    // console.log(state.expenses);
    return {
      ...state,
      expenses: [...state.expenses, {
        ...action.expenses,
      }],
    };
  default:
    return state;
  }
}

export default wallet;
