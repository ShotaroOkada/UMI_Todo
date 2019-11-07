import { ITasks, initialState } from 'src/states/Task';
import { progressNames } from 'src/states/Progress';
import TasksAction from 'src/actions/Tasks/Action';
import TasksActionType from 'src/actions/Tasks/ActionType';

const getAllTasksToLocalStorage = localStorage.getItem('Tasks');
const InitialState: ITasks = getAllTasksToLocalStorage ? JSON.parse(getAllTasksToLocalStorage) : initialState;

// localStrageに全てのタスクを保存する関数
function setTasksToLocalStrage(state: ITasks) {
    localStorage.setItem('Tasks', JSON.stringify(state))
}

export default function tasks(state: ITasks = InitialState, action: TasksAction): ITasks {
    let newState: ITasks;
    switch (action.type) {
        case TasksActionType.ADD_TASK:
            newState = {
                ...state,
                [action.payload.areaName]: {
                    ...state[action.payload.areaName],
                    [progressNames[0]]: [
                        ...state[action.payload.areaName][progressNames[0]],
                        action.payload.taskName
                    ]
                }    
            };
            setTasksToLocalStrage(newState);
            return newState;
        case TasksActionType.DELETE_TASK:
            newState = {
                ...state,
                [action.payload.areaName]: {
                    ...state[action.payload.areaName],
                    [action.payload.progressName]: [
                        ...state[action.payload.areaName][action.payload.progressName].slice(0, action.payload.taskIndex),
                        ...state[action.payload.areaName][action.payload.progressName].slice(action.payload.taskIndex + 1)
                    ]
                }
            };
            setTasksToLocalStrage(newState);
            return newState;
        case TasksActionType.CHANGE_ORDER_TASK:
            const newOrderTasks = [...state[action.payload.areaName][action.payload.progressName]]
            newOrderTasks.splice(action.payload.sourceTaskIndex, 1)
            newOrderTasks.splice(action.payload.destinationTaskIndex, 0, action.payload.taskName)
            newState = {
                ...state,
                [action.payload.areaName]: {
                    ...state[action.payload.areaName],
                    [action.payload.progressName]: [
                        ...newOrderTasks
                    ]
                }
            }
            setTasksToLocalStrage(newState);
            return newState;
        case TasksActionType.CHANGE_PROGRESS_TASK:
            const newSourceTasks = [...state[action.payload.areaName][action.payload.sourceProgressName]]
            newSourceTasks.splice(action.payload.sourceTaskIndex, 1);
            const newDestinationTasks = [...state[action.payload.areaName][action.payload.destinationProgressName]]
            newDestinationTasks.splice(action.payload.destinationTaskIndex, 0, action.payload.taskName)
            newState = {
                ...state,
                [action.payload.areaName]: {
                    ...state[action.payload.areaName],
                    [action.payload.sourceProgressName]: [
                        ...newSourceTasks
                    ],
                    [action.payload.destinationProgressName]: [
                        ...newDestinationTasks
                    ]
                }
            }
            setTasksToLocalStrage(newState);
            return newState;
        default:
            return state;
    }
} 