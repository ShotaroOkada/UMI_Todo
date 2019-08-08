import IChangeAreaAction from './ChangeAreaAction';
import ChangeAreaActionType from './ChangeAreaActionType';
import { IOneTask } from 'src/states/Task';

export default function changeArea(oneTask: IOneTask): IChangeAreaAction {
    return {
        type: ChangeAreaActionType.CHANGE_AREA,
        oneTask
    }
}