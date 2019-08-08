import { IAllTasks } from './Task';

// 初期の全タスクのstateを宣言しておく場所
export const initialState: IAllTasks = {
    addTask: {
        name: '',
        area: 0,
        progress: 0 
    },
    area0Tasks: [
    ],
    area1Tasks: [
    ],
    area2Tasks: [
    ],
    area3Tasks: [
    ]
}