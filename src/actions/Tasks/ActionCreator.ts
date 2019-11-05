import { createStandardAction } from 'typesafe-actions/dist/deprecated/create-standard-action';

type addTaskArguments = {
    taskName: string,
    areaName: string
}

type deleteTaskArguments = {
    areaName: string,
    progressName: string,
    taskIndex: number
}

type changeProgressTaskArguments = {
    taskName: string,
    taskIndex: number,
    areaName: string,
    beforeProgressName: string,
    afterProgressName: string
}

export const addTask = createStandardAction(TasksActionType.ADD_TASK)<addTaskArguments>();
export const deleteTask = createStandardAction(TasksActionType.DELETE_TASK)<deleteTaskArguments>();
export const changeProgressTask = createStandardAction(TasksActionType.CHANGE_PROGRESS_TASK)<changeProgressTaskArguments>();