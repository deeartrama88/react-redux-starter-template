/* tslint:disable no-small-switch */
import { INCREMENT, DECREMENT } from '../actions/constants';

const initState = {
   value: 0
};

const counterReducer = (state = initState, action) => {
   switch (action.type) {
      case INCREMENT:
         return { ...state, value: state.value + 1 };
      case DECREMENT:
         return { ...state, value: state.value - 1 };
      default:
         return state;
   }
};

export default counterReducer;
