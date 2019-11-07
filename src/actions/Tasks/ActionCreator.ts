import { addTaskArguments, deleteTaskArguments, changeProgressTaskArguments } from './Action';
import { createAction } from 'typesafe-actions';
import TasksActionType from './ActionType';

export const addTask = createAction(TasksActionType.ADD_TASK)<addTaskArguments>();
export const deleteTask = createAction(TasksActionType.DELETE_TASK)<deleteTaskArguments>();
export const changeProgressTask = createAction(TasksActionType.CHANGE_PROGRESS_TASK)<changeProgressTaskArguments>();