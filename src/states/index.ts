import IDisplay from './Display';
import { ITasks } from './Task';


// 全てのstateを集約させるところ
export default interface IState {
    tasks: ITasks;
    display: IDisplay;
}