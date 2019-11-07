import { combineReducers } from "redux";
import tasks from './Tasks';
import display from './Display'

const rootReducer = combineReducers({
    tasks,
    display
})

export default rootReducer;