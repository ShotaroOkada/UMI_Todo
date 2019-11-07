import IDisplay, { displayName } from "src/states/Display";
import DisplayAction from 'src/actions/Display/Action';
import DisplayActionType from 'src/actions/Display/ActionType';

const initialState: IDisplay = {
    displayScreen: displayName.area,
    displayAreaName: 'null'
}

export default function display(state: IDisplay = initialState, action: DisplayAction): IDisplay {
    switch(action.type) {
        case DisplayActionType.TO_PROGRESS:
            return {
                ...state,
                displayScreen: displayName.progress,
                displayAreaName: action.payload.areaName
            }
        case DisplayActionType.TO_AREA:
            return {
                ...state,
                displayScreen: displayName.area,
                displayAreaName: 'null'
            }
        default:
            return state;
    }
}