import ChangeProgressActionType from './ChangeProgressActionType';

export interface IAdvanceProgressAction {
    type: ChangeProgressActionType.PROGRESS_ADVANCE;
    area: number;
    taskId: number;
}

export interface IBackProgressAction {
    type: ChangeProgressActionType.PROGRESS_BACK;
    area: number;
    taskId: number;
}

type ChangeProgressAction = 
    | IAdvanceProgressAction
    | IBackProgressAction

export default ChangeProgressAction;