import IOneTask from 'src/states/oneTask';
import ChangeTaskQuantityActionType from './ChangeTaskQuantityActionType';
import { IAddTaskAction, IDeleteTaskAction } from './ChangeTaskQuantityAction';

export function addNewTask(addTask: IOneTask): IAddTaskAction {
    return {
        type: ChangeTaskQuantityActionType.TASK_ADD,
        addTask
    }
}

export function deleteTask(area: number, taskId: number): IDeleteTaskAction {
    return {
        type: ChangeTaskQuantityActionType.TASK_DELETE,
        area,
        taskId
    }
}