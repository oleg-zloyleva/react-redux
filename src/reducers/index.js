import {combineReducers} from "redux";

import tasksReducer from './tasksReducer';
import searchTask from './filterTasks';

export default combineReducers({
    tasksReducer,
    searchTask
})