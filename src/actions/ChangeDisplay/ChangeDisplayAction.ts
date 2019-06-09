import ChangeDisplayActionType from './ChangeDisplayActionType';

export interface IToAreaAction {
    type: ChangeDisplayActionType.TO_AREA
}

export interface IToProgressAction {
    type: ChangeDisplayActionType.TO_PROGRESS,
    area: number
}

type IChangeDisplayAction = 
    | IToAreaAction
    | IToProgressAction

export default IChangeDisplayAction;