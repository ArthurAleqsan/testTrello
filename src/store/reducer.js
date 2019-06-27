import { combineReducers } from 'redux';

import global from './global/global.reducer';
import tasks from './tasks/tasks.reduceer';


export default combineReducers({
    global,
    tasks,
});