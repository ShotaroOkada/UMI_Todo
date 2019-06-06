import IOneTask from 'src/states/oneTask';
import ChangeTaskQuantityActionType from './ChangeTaskQuantityActionType';
import { IAddTaskAction, IDeleteTaskAction } from './ChangeTaskQuantityAction';

export function addTask(addTasks: IOneTask[]): IAddTaskAction {
    return {
        type: ChangeTaskQuantityActionType.TASK_ADD,
        addTasks
    }
}

export function deleteTask(taskId: number): IDeleteTaskAction {
    return {
        type: ChangeTaskQuantityActionType.TASK_DELETE,
        taskId
    }
}