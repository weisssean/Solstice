import {combineReducers} from 'redux';
import ajaxCallsInProgress from './ajaxStatusReducer';
import bills from './billsReducer';
import user from './userReducer';

const rootReducer = combineReducers({
  ajaxCallsInProgress,
  user,
  bills
});

export default rootReducer;
