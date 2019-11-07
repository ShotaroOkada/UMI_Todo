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
    areaName: string,
    taskName: string,
    sourceTaskIndex: number,
    destinationTaskIndex: number,
    sourceProgressName: string,
    destinationProgressName: string
}