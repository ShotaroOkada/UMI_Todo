import IOneTask from 'src/states/oneTask';
import ChangeAreaActionType from './ChangeAreaActionType';


export default interface IChangeAreaAction {
    type: ChangeAreaActionType.CHANGE_AREA,
    oneTask: IOneTask
}