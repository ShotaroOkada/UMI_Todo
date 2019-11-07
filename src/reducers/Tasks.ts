import { ITasks } from 'src/states/Task';
import { progressNames } from 'src/states/Progress';
import TasksAction from 'src/actions/Tasks/Action';

const getAllTasksToLocalStorage = localStorage.getItem('Tasks');
const InitialState: ITasks = getAllTasksToLocalStorage ? JSON.parse(getAllTasksToLocalStorage) : {};

// localStrageに全てのタスクを保存する関数
function setTasksToLocalStrage(state: ITasks) {
    localStorage.setItem('Tasks', JSON.stringify(state))
}

export default function tasks(state: ITasks = InitialState, action: TasksAction): ITasks {
    switch (action.type) {
        case TasksActionType.ADD_TASK:
            return {
                ...state,
                [action.payload.areaName]: {
                    ...state[action.payload.areaName],
                    [progressNames[0]]: [
                        ...state[action.payload.areaName][progressNames[0]],
                        action.payload.taskName
                    ]
                }    
            };
        case TasksActionType.DELETE_TASK:
            return {
                ...state,
                [action.payload.areaName]: {
                    ...state[action.payload.areaName],
                    [action.payload.progressName]: [
                        ...state[action.payload.areaName][action.payload.progressName.slice(0, action.payload.taskIndex)]
                    ]
                }
            }
        case TasksActionType.CHANGE_PROGRESS_TASK:
            return {
                ...state,
                [action.payload.areaName]: {
                    ...state[action.payload.areaName],
                    [action.payload.beforeProgressName]: [
                        ...state[action.payload.areaName][action.payload.beforeProgressName].slice(0, action.payload.taskIndex)
                    ],
                    [action.payload.afterProgressName]: [
                        ...state[action.payload.areaName][action.payload.afterProgressName],
                        action.payload.taskName
                    ]
                }
            }
        default:
            return state;
    }
} 