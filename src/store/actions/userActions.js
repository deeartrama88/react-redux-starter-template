import {
   LOGIN_LOADING,
   LOGIN_FAIL,
   LOGIN_SUCCESS,
   REGISTRATION_LOADING,
   REGISTRATION_SUCCESSFUL
} from './constants';

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

export const registration = (creds, setSubmitting, setErrors, props) => dispatch => {
   dispatch({ type: REGISTRATION_LOADING, payload: true });
   console.log(props);
   setTimeout(() => {
      dispatch({ type: REGISTRATION_SUCCESSFUL, paylaod: creds });
      dispatch({ type: REGISTRATION_LOADING, payload: false });
      setSubmitting(false);
      if (props.callback) props.callback();
      // if errors from server - set them
      // const errors = {};
      // errors.serverError = 'something gone wrong on server';
      // setErrors(errors);
   }, 2000);
};