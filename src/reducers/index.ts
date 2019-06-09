import { combineReducers } from "redux";
import allTasks from './AllTasks';
import display from './Display'

const rootReducer = combineReducers({
    allTasks,
    display
})

export default rootReducer;