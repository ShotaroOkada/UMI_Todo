import IOneTask from './oneTask';

export default interface IAllTasks {
    allTasks: {
        addTasks: IOneTask[],
        area0Tasks: IOneTask[],
        area1Tasks: IOneTask[],
        area2Tasks: IOneTask[],
        area3Tasks: IOneTask[]
    }
}