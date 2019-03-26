import { combineReducers } from 'redux';
import auth from './authReducer';
import business from './businessReducer';

export default combineReducers({
    auth,
    business
});