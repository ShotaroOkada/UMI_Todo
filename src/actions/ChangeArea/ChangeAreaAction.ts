import ChangeAreaActionType from './ChangeAreaActionType';
import { IOneTask } from 'src/states/Task';

export default interface IChangeAreaAction {
    type: ChangeAreaActionType.CHANGE_AREA,
    oneTask: IOneTask
}