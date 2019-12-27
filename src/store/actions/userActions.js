import { LOGIN_LOADING, LOGIN_FAIL, LOGIN_SUCCESS } from './constants';

export const test = val => {
   console.log('test', val);
};

export const login = (creds, setSubmitting) => dispatch => {
   dispatch({ type: LOGIN_LOADING, payload: true });
   setTimeout(() => {
      dispatch({ type: LOGIN_SUCCESS, paylaod: true });
      dispatch({ type: LOGIN_LOADING, payload: false });
      setSubmitting(false);
      console.log('login success');
      return true;
   }, 1000);
};
