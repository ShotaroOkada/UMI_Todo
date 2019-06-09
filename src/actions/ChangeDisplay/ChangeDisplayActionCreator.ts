import { IToAreaAction, IToProgressAction } from './ChangeDisplayAction';
import ChangeDisplayActionType from './ChangeDisplayActionType';

export function toArea(): IToAreaAction {
    return {
        type: ChangeDisplayActionType.TO_AREA
    }
}

export function toProgress(area: number): IToProgressAction {
    return {
        type: ChangeDisplayActionType.TO_PROGRESS,
        area
    }
}