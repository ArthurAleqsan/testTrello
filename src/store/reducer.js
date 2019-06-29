import { combineReducers } from 'redux';

import auth from './auth/auth.reducer';
import tasks from './tasks/tasks.reduceer';


export default combineReducers({
    auth,
    tasks,
});