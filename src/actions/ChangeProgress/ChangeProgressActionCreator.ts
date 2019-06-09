import { IAdvanceProgressAction, IBackProgressAction } from './ChangeProgressAction';
import ChangeProgressActionType from './ChangeProgressActionType';

export function advanceProgress(area: number, taskId: number): IAdvanceProgressAction {
    return {
        type: ChangeProgressActionType.PROGRESS_ADVANCE,
        area,
        taskId
    }
}

export function backProgress(area: number, taskId: number): IBackProgressAction {
    return {
        type: ChangeProgressActionType.PROGRESS_BACK,
        area,
        taskId
    }
}