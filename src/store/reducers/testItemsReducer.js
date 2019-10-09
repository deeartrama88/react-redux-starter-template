/* tslint:disable no-small-switch */
import {
    TEST_ITEMS_LOAD_FAIL,
    TEST_ITEMS_LOADING,
    TEST_ITEMS_LOAD_SUCCESS,
    TEST_ITEMS_SET_SELECTED,
    TEST_ITEMS_DELETE
} from '../actions/constants';

const initState = {
    items: [],
    loading: false
};

const testItemsReducer = (state = initState, action) => {
    switch (action.type) {
        case TEST_ITEMS_LOAD_FAIL:
            return {
                ...state,
                items: [],
                loading: false
            };
        case TEST_ITEMS_LOADING:
            return {
                ...state,
                loading: true
            };
        case TEST_ITEMS_LOAD_SUCCESS:
            return {
                ...state,
                items: action.payload,
                loading: false
            };
        case TEST_ITEMS_SET_SELECTED:
            return {
                ...state,
                items: state.items.map(item => {
                    // remove selected for all
                    if (item.selected) {
                        // eslint-disable-next-line no-param-reassign
                        item.selected = false;
                    }
                    // set selected for current
                    if (item.id === action.payload) {
                        // eslint-disable-next-line no-param-reassign
                        item.selected = true;
                    }
                    return item;
                })
            };

        case TEST_ITEMS_DELETE:
            return {
                ...state,
                items: state.items.filter(item => item.id !== action.payload)
            };

        default:
            return state;
    }
};

export default testItemsReducer;
