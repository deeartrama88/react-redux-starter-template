/* tslint:disable no-small-switch */
import {
    REGISTRATION_LOADING,
    REGISTRATION_FAIL,
    REGISTRATION_SUCCESSFUL
} from '../actions/constants';

const initState = {
    registrationLoading: false,
};

const loadingReducer = (state = initState, action) => {
    switch (action.type) {
        case REGISTRATION_FAIL:
            return { ...state, registrationLoading: false };
        case REGISTRATION_SUCCESSFUL:
            return { ...state, registrationLoading: false };
        case REGISTRATION_LOADING:
            return { ...state, registrationLoading: true};
        default:
            return state;
    }
};

export default loadingReducer;
