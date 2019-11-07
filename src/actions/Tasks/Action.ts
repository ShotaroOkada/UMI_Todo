import * as ActionCreators from './ActionCreator'
import { ActionType } from 'typesafe-actions'

type TasksAction = ActionType<typeof ActionCreators>
export default TasksAction;

export type addTaskArguments = {
    taskName: string,
    areaName: string
}

export type deleteTaskArguments = {
    areaName: string,
    progressName: string,
    taskIndex: number
}

export type changeProgressTaskArguments = {
    taskName: string,
    taskIndex: number,
    areaName: string,
    beforeProgressName: string,
    afterProgressName: string
}