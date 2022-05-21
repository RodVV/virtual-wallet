export const USER_LOGIN = 'USER_LOGIN';

export function loginAction(state) {
  return {
    type: USER_LOGIN,
    payload: state,
  };
}
