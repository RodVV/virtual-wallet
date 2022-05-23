export const USER_LOGIN = 'USER_LOGIN';
export const GET_CURRENCIES = 'GET_CURRENCIES';

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
