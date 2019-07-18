import IAllTasks from "src/states/AllTasks";
import ChangeTaskQuantityAction from 'src/actions/ChangeTaskQuantity/ChangeTaskQuantityAction';
import ChangeTaskQuantityActionType from 'src/actions/ChangeTaskQuantity/ChangeTaskQuantityActionType';
import IOneTask from 'src/states/oneTask';
import update from 'immutability-helper';
import ChangeProgressActionType from 'src/actions/ChangeProgress/ChangeProgressActionType';
import ChangeProgressAction from 'src/actions/ChangeProgress/ChangeProgressAction';
import {  initialState } from 'src/states/initialState';

const getAllTasksToLocalStorage = localStorage.getItem('allTasks');
const InitialState: IAllTasks = getAllTasksToLocalStorage ? JSON.parse(getAllTasksToLocalStorage) : initialState;

type AllTasksAction = ChangeTaskQuantityAction | ChangeProgressAction

function setAllTasksToLocalStrage(state: IAllTasks) {
    localStorage.setItem('allTasks', JSON.stringify(state))
}

function addNewTasks(state: IAllTasks, addTask: IOneTask): IAllTasks {
    switch (addTask.area) {
      case 0:
        const area0: IOneTask[] = state.area0Tasks;
        area0.push(addTask);
        state = update(state, {
          area0Tasks: { $set: area0 }
        }); 
        break; 
      case 1:
        const area1: IOneTask[] = state.area1Tasks;
        area1.push(addTask);
        state = update(state, {
          area1Tasks: { $set: area1 }
        }); 
        break; 
      case 2:
        const area2: IOneTask[] = state.area2Tasks;
        area2.push(addTask);
        state = update(state, {
          area2Tasks: { $set: area2 }
        }); 
        break;  
      case 3:
        const area3: IOneTask[] = state.area3Tasks;
        area3.push(addTask);
        state = update(state, {
          area3Tasks: { $set: area3 }
        });
        break; 
    }
    setAllTasksToLocalStrage(state);
    return state;
}

function deleteTask(state: IAllTasks, area: number, taskId: number) {
    switch(area) {
        case 0:
            const area0Tasks: IOneTask[] = state.area0Tasks;
            area0Tasks.splice(taskId, 1);
            state = update(state, {
                area0Tasks: { $set: area0Tasks }
            })
            break;
        case 1:
            const area1Tasks: IOneTask[] = state.area1Tasks;
            area1Tasks.splice(taskId, 1);
            state = update(state, {
                area1Tasks: { $set: area1Tasks }
            })
            break;
        case 2:
            const area2Tasks: IOneTask[] = state.area2Tasks;
            area2Tasks.splice(taskId, 1);
            state = update(state, {
                area2Tasks: { $set: area2Tasks }
            })
            break;
        case 3:
            const area3Tasks: IOneTask[] = state.area3Tasks;
            area3Tasks.splice(taskId, 1);
            state = update(state, {
                area3Tasks: { $set: area3Tasks }
            })
            break;
    }
    setAllTasksToLocalStrage(state);
    return state;
}

function advenceProgress(state: IAllTasks, area: number, taskId: number) {
    let areaTasks: IOneTask[] = [];
    switch(area) {
        case 0:
            areaTasks = state.area0Tasks;
            areaTasks.forEach((task: IOneTask, index: number) => {
                if(taskId === index && task.progress !== 4) {
                    task.progress += 1
                }
            })
            state = update(state, {
                area0Tasks: { $set: areaTasks }
            })
            break;
        case 1:
            areaTasks = state.area1Tasks;
            areaTasks.forEach((task: IOneTask, index: number) => {
                if(taskId === index && task.progress !== 4) {
                    task.progress += 1
                }
            })
            state = update(state, {
                area1Tasks: { $set: areaTasks }
            })
            break;
        case 2:
            areaTasks = state.area2Tasks;
            areaTasks.forEach((task: IOneTask, index: number) => {
                if(taskId === index && task.progress !== 4) {
                    task.progress += 1
                }
            })
            state = update(state, {
                area2Tasks: { $set: areaTasks }
            })
            break;
        case 3:
            areaTasks = state.area3Tasks;
            areaTasks.forEach((task: IOneTask, index: number) => {
                if(taskId === index && task.progress !== 4) {
                    task.progress += 1
                }
            })
            state = update(state, {
                area3Tasks: { $set: areaTasks }
            })
            break;
    }
    setAllTasksToLocalStrage(state);
    return state;
}

function backProgress(state: IAllTasks, area: number, taskId: number) {
    let areaTasks: IOneTask[] = [];
    switch(area) {
        case 0:
            areaTasks = state.area0Tasks;
            areaTasks.forEach((task: IOneTask, index: number) => {
                if(taskId === index && task.progress !== 0) {
                    task.progress -= 1
                }
            })
            state = update(state, {
                area0Tasks: { $set: areaTasks }
            })
            break;
        case 1:
            areaTasks = state.area1Tasks;
            areaTasks.forEach((task: IOneTask, index: number) => {
                if(taskId === index && task.progress !== 0) {
                    task.progress -= 1
                }
            })
            state = update(state, {
                area1Tasks: { $set: areaTasks }
            })
            break;
        case 2:
            areaTasks = state.area2Tasks;
            areaTasks.forEach((task: IOneTask, index: number) => {
                if(taskId === index && task.progress !== 0) {
                    task.progress -= 1
                }
            })
            state = update(state, {
                area2Tasks: { $set: areaTasks }
            })
            break;
        case 3:
            areaTasks = state.area3Tasks;
            areaTasks.forEach((task: IOneTask, index: number) => {
                if(taskId === index && task.progress !== 0) {
                    task.progress -= 1
                }
            })
            state = update(state, {
                area3Tasks: { $set: areaTasks }
            })
            break;
    }
    setAllTasksToLocalStrage(state);
    return state;
}

export default function allTasks(state: IAllTasks = InitialState, action: AllTasksAction): IAllTasks {
    switch (action.type) {
        case ChangeTaskQuantityActionType.TASK_ADD:
            return {
                ...addNewTasks(state, action.addTask)
            };
        case ChangeTaskQuantityActionType.TASK_DELETE:
            return {
                ...deleteTask(state, action.area, action.taskId)
            }
        case ChangeProgressActionType.PROGRESS_ADVANCE:
            return {
                ...advenceProgress(state, action.area, action.taskId)
            }
        case ChangeProgressActionType.PROGRESS_BACK:
            return {
                ...backProgress(state, action.area, action.taskId)
            }
        default:
            return state;
    }
} 