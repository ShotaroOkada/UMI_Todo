import { createStandardAction } from 'typesafe-actions/dist/deprecated/create-standard-action';
import { addTaskArguments, deleteTaskArguments, changeProgressTaskArguments } from './Action';

export const addTask = createStandardAction(TasksActionType.ADD_TASK)<addTaskArguments>();
export const deleteTask = createStandardAction(TasksActionType.DELETE_TASK)<deleteTaskArguments>();
export const changeProgressTask = createStandardAction(TasksActionType.CHANGE_PROGRESS_TASK)<changeProgressTaskArguments>();