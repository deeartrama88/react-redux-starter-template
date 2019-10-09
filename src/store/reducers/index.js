import { combineReducers } from 'redux';
import counterReducer from './counterReducer';
import testItemsReducer from "./testItemsReducer";

const rootReducer = combineReducers({
   counterReducer,
   testItemsReducer
});

export default rootReducer;
