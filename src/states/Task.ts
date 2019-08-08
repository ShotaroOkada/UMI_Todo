export interface IOneTask {
    name: string,
    area: number,
    progress: number
} 

export interface IAllTasks {
    addTask: IOneTask,
    area0Tasks: IOneTask[],
    area1Tasks: IOneTask[],
    area2Tasks: IOneTask[],
    area3Tasks: IOneTask[]
}