import {combineReducers} from 'redux';
import userReducers from '../reducers/user';
import newuserReducers from '../reducers/newuser';
import reposReducers from '../reducers/repos';
import followersReducers from '../reducers/followers';
import followingReducers from '../reducers/following';

const rootReducers = combineReducers({
    userReducers,
    newuserReducers,
    reposReducers,
    followersReducers,
    followingReducers


})
export default rootReducers;