import { combineReducers } from 'redux';
import counterReducer from './counterReducer';
import testItemsReducer from './testItemsReducer';
import userReducer from './userReducer';
import loadingReducer from "./loadingReducer";

const rootReducer = combineReducers({
   counterReducer,
   testItemsReducer,
   userReducer,
   loadingReducer
});

export default rootReducer;
