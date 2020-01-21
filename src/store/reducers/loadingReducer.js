import {
    REGISTRATION_LOADING,
    REGISTRATION_FAIL,
    REGISTRATION_SUCCESSFUL,
    CART_LOADING,
} from '../actions/constants';

const initState = {
    registrationLoading: false,
    cartLoading: false,
};

const loadingReducer = (state = initState, action) => {
    switch (action.type) {
        case REGISTRATION_FAIL:
            return { ...state, registrationLoading: false };
        case REGISTRATION_SUCCESSFUL:
            return { ...state, registrationLoading: false };
        case REGISTRATION_LOADING:
            return { ...state, registrationLoading: true};
        case CART_LOADING:
            return { ...state, cartLoading: action.payload};
        default:
            return state;
    }
};

export default loadingReducer;
