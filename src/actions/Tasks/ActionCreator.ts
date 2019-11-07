import { addTaskArguments, deleteTaskArguments, changeProgressTaskArguments, changeOrderTaskArguments } from './Action';
import { createAction } from 'typesafe-actions';
import TasksActionType from './ActionType';

export const addTask = createAction(TasksActionType.ADD_TASK)<addTaskArguments>();
export const deleteTask = createAction(TasksActionType.DELETE_TASK)<deleteTaskArguments>();
export const changeOrderTask = createAction(TasksActionType.CHANGE_ORDER_TASK)<changeOrderTaskArguments>();
export const changeProgressTask = createAction(TasksActionType.CHANGE_PROGRESS_TASK)<changeProgressTaskArguments>();