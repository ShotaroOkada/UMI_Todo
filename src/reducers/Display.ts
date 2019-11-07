import IDisplay, { displayName } from "src/states/Display";
import DisplayAction from 'src/actions/Display/Action';
import DisplayActionType from 'src/actions/Display/ActionType';

const initialState: IDisplay = {
    screen: displayName.area,
    areaName: 'null'
}

export default function display(state: IDisplay = initialState, action: DisplayAction): IDisplay {
    switch(action.type) {
        case DisplayActionType.TO_PROGRESS:
            return {
                ...state,
                screen: displayName.progress,
                areaName: action.payload.areaName
            }
        case DisplayActionType.TO_AREA:
            return {
                ...state,
                screen: displayName.area,
                areaName: 'null'
            }
        default:
            return state;
    }
}