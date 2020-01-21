import { ADD_TO_CART, CART_LOADING } from './constants';

const addToCart = (item) => dispatch => {
    dispatch({type: CART_LOADING, payload: true});
    setTimeout(() => {
        dispatch({ type: ADD_TO_CART, payload: item });
        dispatch({type: CART_LOADING, payload: false})
    }, 2000);
};

export {
    addToCart
}
