import IDisplay from "src/states/Display";
import ChangeDisplayActionType from 'src/actions/ChangeDisplay/ChangeDisplayActionType';
import IChangeDisplayAction from 'src/actions/ChangeDisplay/ChangeDisplayAction';

const initialState: IDisplay = {
    nowDisplay: 'area',
    whereArea: -1
}

export default function display(state: IDisplay = initialState, action: IChangeDisplayAction): IDisplay {
    switch(action.type) {
        case ChangeDisplayActionType.TO_PROGRESS:
            return {
                ...state,
                nowDisplay: 'progress',
                whereArea: action.area
            }
        case ChangeDisplayActionType.TO_AREA:
            return {
                ...state,
                nowDisplay: 'area',
                whereArea: -1
            }
        default:
            return state;
    }
}