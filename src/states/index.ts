import IDisplay from './Display';
import { IAllTasks } from './Task';

// 全てのstateを集約させるところ
export default interface IState {
    allTasks: IAllTasks;
    display: IDisplay;
}