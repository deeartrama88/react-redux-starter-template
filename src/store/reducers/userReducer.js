import { LOGIN_SUCCESS, LOGIN_FAIL } from '../actions/constants';

const initState = {
   isLogged: false
};

const userReducer = (state = initState, action) => {
   switch (action.type) {
      case LOGIN_SUCCESS:
         return { ...state, isLogged: true };
      case LOGIN_FAIL:
         return {...state, isLogged: false};
      default:
         return state;
   }
};

export default userReducer;
