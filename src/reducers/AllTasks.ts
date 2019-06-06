import IAllTasks from "src/states/AllTasks";
import ChangeTaskQuantityAction from 'src/actions/ChangeTaskQuantity/ChangeTaskQuantityAction';
import IChangeAreaAction from 'src/actions/ChangeArea/ChangeAreaAction';
import ChangeAreaActionType from 'src/actions/ChangeArea/ChangeAreaActionType';
import ChangeTaskQuantityActionType from 'src/actions/ChangeTaskQuantity/ChangeTaskQuantityActionType';
import IOneTask from 'src/states/oneTask';
import update from 'immutability-helper';

const initialState: IAllTasks = {
    addTasks: [],
    area0Tasks: [],
    area1Tasks: [],
    area2Tasks: [],
    area3Tasks: []
}

type AllTasksAction = ChangeTaskQuantityAction | IChangeAreaAction

function addNewTasks(state: IAllTasks, addTask: IOneTask): IAllTasks {
    const addTasks: IOneTask[] = state.addTasks;
    addTasks.push(addTask);
    state = update(state, {
        addTasks: { $set: addTasks }
    });
    return state;
}

export default function allTasks(state: IAllTasks = initialState, action: AllTasksAction): IAllTasks {
    switch (action.type) {
        case ChangeAreaActionType.CHANGE_AREA:
            return {
                ...state
            }
        case ChangeTaskQuantityActionType.TASK_ADD:
            return {
                ...addNewTasks(state, action.addTask)
            };
        default:
            return state;

    }
} 