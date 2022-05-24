export const USER_LOGIN = 'USER_LOGIN';
export const GET_CURRENCIES = 'GET_CURRENCIES';
export const SAVE_EXPENSE = 'SAVE_EXPENSE';
// export const GET_PRICE = 'GET_PRICE';

export function loginAction(email) {
  return {
    type: USER_LOGIN,
    payload: email,
  };
}

export const getCurrencies = (currencies) => ({
  type: GET_CURRENCIES,
  currencies,
});

export const saveExpense = (expense) => ({
  type: SAVE_EXPENSE,
  expenses: expense,
});

// export const getPrice = (data) => ({
//   type: GET_PRICE,
//   data,
// });

const CURRENCY_BASE_API = 'https://economia.awesomeapi.com.br/json/all';

export const getCurrencyThunk = () => async (dispatch) => {
  try {
    const fetchApi = await fetch(CURRENCY_BASE_API);
    const data = await fetchApi.json();
    const currencies = Object.keys(data).filter((currency) => currency !== 'USDT');
    dispatch(getCurrencies(currencies));
  } catch (error) {
    console.log(error);
  }
};

export async function getPrice() {
  try {
    const fetchApi = await fetch(CURRENCY_BASE_API);
    const data = await fetchApi.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
}
