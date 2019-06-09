import ChangeTaskQuantityActionType from './ChangeTaskQuantityActionType';
import IOneTask from 'src/states/oneTask';

export interface IAddTaskAction {
    type: ChangeTaskQuantityActionType.TASK_ADD;
    addTask: IOneTask;
}

export interface IDeleteTaskAction {
    type :ChangeTaskQuantityActionType.TASK_DELETE;
    area: number;
    taskId: number;
}

type ChangeTaskQuantityAction = 
    | IAddTaskAction
    | IDeleteTaskAction

export default ChangeTaskQuantityAction;