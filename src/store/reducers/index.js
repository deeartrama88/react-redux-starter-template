import { combineReducers } from 'redux';
import counterReducer from './counterReducer';
import testItemsReducer from './testItemsReducer';
import userReducer from './userReducer';

const rootReducer = combineReducers({
   counterReducer,
   testItemsReducer,
   userReducer
});

export default rootReducer;
