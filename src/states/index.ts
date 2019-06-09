import IAllTasks from './AllTasks';
import IDisplay from './Display';

export default interface IState {
    allTasks: IAllTasks;
    display: IDisplay;
}