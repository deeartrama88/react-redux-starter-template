import axios from 'axios';
import {
   TEST_ITEMS_LOAD_FAIL,
   TEST_ITEMS_LOAD_SUCCESS,
   TEST_ITEMS_LOADING,
   TEST_ITEMS_SET_SELECTED,
   TEST_ITEMS_DELETE
} from './constants';

const getTestItems = () => {
   return dispatch => {
      dispatch({ type: TEST_ITEMS_LOADING });
      axios
         .get('https://jsonplaceholder.typicode.com/todos')
         .then(res => {
            dispatch({ type: TEST_ITEMS_LOAD_SUCCESS, payload: res.data });
         })
         .catch(err => {
            dispatch({ type: TEST_ITEMS_LOAD_FAIL });
            console.log('error in fetch items', err);
         });
   };
};

export const setSelected = id => {
   return dispatch => dispatch({ type: TEST_ITEMS_SET_SELECTED, payload: id });
};

export const deleteItem = id => {
   return dispatch => dispatch({ type: TEST_ITEMS_DELETE, payload: id });
};

export default getTestItems;
