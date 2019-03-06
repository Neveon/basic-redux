// combineReducers, takes all reducers and combines into one object
import {combineReducers} from 'redux';
import UserReducer from './reducer-users'; //storing function in variable
import ActiveUserReducer from './reducer-active-user'; // USER_SELECTED

const allReducers = combineReducers({
    users: UserReducer,
    activeUser: ActiveUserReducer
});

export default allReducers;