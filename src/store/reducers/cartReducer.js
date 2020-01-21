import { ADD_TO_CART, REMOVE_FROM_CART } from '../actions/constants';

const initState = [];

const cartReducer = (state = initState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            return [ ...state, action.payload];
        case REMOVE_FROM_CART:
            return state.filter(item => item.id !== action.payload.id);
        default:
            return state;
    }
};

export default cartReducer;
