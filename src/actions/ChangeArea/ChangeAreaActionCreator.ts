import IOneTask from 'src/states/oneTask';
import IChangeAreaAction from './ChangeAreaAction';
import ChangeAreaActionType from './ChangeAreaActionType';

export default function changeArea(oneTask: IOneTask): IChangeAreaAction {
    return {
        type: ChangeAreaActionType.CHANGE_AREA,
        oneTask
    }
}