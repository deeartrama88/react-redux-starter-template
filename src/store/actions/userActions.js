import { LOGIN_LOADING, LOGIN_FAIL, LOGIN_SUCCESS } from './constants';

export const test = val => {
   console.log('test', val);
};

export const login = creds => dispatch => {
   // emulate request delay
   dispatch({ type: LOGIN_LOADING, payload: true });
   setTimeout(() => {
      dispatch({ type: LOGIN_SUCCESS, paylaod: true });
      dispatch({ type: LOGIN_LOADING, payload: false });
      console.log('login success');
   }, 1000);
};
