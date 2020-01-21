import { combineReducers } from 'redux';
import counterReducer from './counterReducer';
import testItemsReducer from './testItemsReducer';
import userReducer from './userReducer';
import loadingReducer from "./loadingReducer";
import cartReducer from "./cartReducer";

const rootReducer = combineReducers({
   counterReducer,
   testItemsReducer,
   userReducer,
   loadingReducer,
   cartReducer
});

export default rootReducer;
