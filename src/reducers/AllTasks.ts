// import IAllTasks from "src/states/AllTasks";
// import ChangeTaskQuantityAction from 'src/actions/ChangeTaskQuantity/ChangeTaskQuantityAction';
// import IChangeAreaAction from 'src/actions/ChangeArea/ChangeAreaAction';
// import ChangeAreaActionType from 'src/actions/ChangeArea/ChangeAreaActionType';
// import ChangeTaskQuantityActionType from 'src/actions/ChangeTaskQuantity/ChangeTaskQuantityActionType';

// const initialState: IAllTasks = {
//     allTasks: {
//         addTasks: [],
//         area0Tasks: [],
//         area1Tasks: [],
//         area2Tasks: [],
//         area3Tasks: []
//     }
// }

// type AllTasksAction = ChangeTaskQuantityAction | IChangeAreaAction

// export default function allTasks(state: IAllTasks = initialState, action: AllTasksAction): IAllTasks {
//     switch (action.type) {
//         case ChangeAreaActionType.CHANGE_AREA:
//             return {
//                 ...state,
//                 hoge: action.hoge
//             };
//         case ChangeTaskQuantityActionType.TASK_ADD:
//             return {
//                 ...state,
//                 hoge: action.hoge
//             };
//         case ChangeTaskQuantityActionType.TASK_DELETE:
//             return {
//                 ...state,
//                 hoge: action.hoge
//             };
//         default:
//             return state;

//     }
// } 