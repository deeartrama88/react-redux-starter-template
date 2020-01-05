import { LOGIN_LOADING, LOGIN_FAIL, LOGIN_SUCCESS } from './constants';

export const test = val => {
   console.log('test', val);
};

export const login = (creds, setSubmitting, props) => dispatch => {
   dispatch({ type: LOGIN_LOADING, payload: true });
   setTimeout(() => {
      dispatch({ type: LOGIN_SUCCESS, paylaod: true });
      dispatch({ type: LOGIN_LOADING, payload: false });
      setSubmitting(false);
      if (props.callback) props.callback();
   }, 1000);
};
