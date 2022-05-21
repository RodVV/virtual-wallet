export const USER_LOGIN = 'USER_LOGIN';

export function loginAction(email) {
  return {
    type: USER_LOGIN,
    payload: email,
  };
}
