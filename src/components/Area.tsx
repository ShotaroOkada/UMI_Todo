import * as React from 'react'
import '../styles/Area.css'
import IOneTask from 'src/states/oneTask';
import { areaNames } from 'src/states/AreaName';
// import IAllTasks from 'src/states/AllTasks';
import { progressLayout } from 'src/states/progressLayout';
import { useDispatch, useSelector } from 'react-redux';
import { addNewTask, deleteTask } from 'src/actions/ChangeTaskQuantity/ChangeTaskQuantityActionCreator';
import { toProgress } from 'src/actions/ChangeDisplay/ChangeDisplayActionCreator';
import IState from 'src/states';


// interface IAreaState {
//     inputAddTask: string,
//     selectedArea: number
// }

// export interface IAreaConnectProps {
//     allTasks: IAllTasks
// }

// export interface IAreaDispatchProps {
//     addNewTask: (task: IOneTask) => void
//     deleteTask: (area: number, taskId: number) => void
//     toProgress: (area: number) => void
// }

// type IAreaProps = IAreaConnectProps & IAreaDispatchProps;

// export default class Area extends React.Component<IAreaProps, IAreaState> {
//     constructor(props: IAreaProps) {
//         super(props);
//         this.state = {
//             inputAddTask: '',
//             selectedArea: 0
//         };
//         this.onInputAddTaskChange = this.onInputAddTaskChange.bind(this);
//         this.submitNewTask = this.submitNewTask.bind(this);
//         this.handleChangePulldown = this.handleChangePulldown.bind(this);
//     }


//     // タスク追加フォームのイベント
//     public onInputAddTaskChange = (
//         e: React.FormEvent<HTMLInputElement>
//     ): void => {
//         this.setState({
//             inputAddTask: e.currentTarget.value
//         });
//     };

//     // プルダウンのイベント
//     public handleChangePulldown(event: React.ChangeEvent<HTMLSelectElement>) {
//         this.setState({
//             selectedArea: parseInt(event.target.value, 10)
//         });
//     }

//     // タスク追加ボタンのイベント
//     public submitNewTask() {
//         if (this.state.inputAddTask === '') {
//             return;
//         }
//         const createAddtaskObject: IOneTask = {
//             name: this.state.inputAddTask,
//             area: this.state.selectedArea,
//             progress: 0
//         }
//         this.props.addNewTask(createAddtaskObject);
//         this.setState({
//             inputAddTask: ''
//         })
//     }

//     // タスクを配置するエリアを選択するためのラジオボタン
//     public selectAreaRatio() {
//       const areaIcons: string[] = ['☀', '🌈', '☁', '☔']
//       return (
//         <div key='selectAreaRatio'>
//           {
//             areaIcons.map((areaIcon, index: number) => {
//               return(<span key={index}>  
//                   <input key={index} type="radio" name="area" value={index} checked={this.state.selectedArea === index}
//                 onChange={() => this.setState({selectedArea: index})} />
//                  {areaIcon} 
//                  &nbsp;
//                  </span>
//               )
//             })
//           }
//         </div>
//       )
//     }

//     public render() {
//         return (
//             <div id="areaContainer">
//                 <div id="addTaskArea">
//                     <div id="appTitle">Urgent Important Matrix</div>
//                     <br />
//                     <div id='addTaskComponents'>
//                         <input
//                             type="text"
//                             value={this.state.inputAddTask}
//                             onChange={this.onInputAddTaskChange}
//                         />
//                         <button onClick={this.submitNewTask}>+</button>
//                         {this.selectAreaRatio()}
//                     </div>
//                 </div>
//                 <div id="area0">
//                     <div id="title" onClick={() => this.props.toProgress(0)}>{areaNames[0]}</div>
//                     {this.props.allTasks.area0Tasks.length !== null &&
//                         this.props.allTasks.area0Tasks.map((task: IOneTask, index: number) => {
//                             return <div key={task.name} id={progressLayout[task.progress]}>
//                                 {task.name} <span key={`dast${task.name}`} onClick={() => this.props.deleteTask(0, index)}>🗑️</span>
//                             </div>
//                         })}
//                 </div>
//                 <div id="area1">
//                     <div id="title" onClick={() => this.props.toProgress(1)}>{areaNames[1]}</div>
//                     {this.props.allTasks.area1Tasks.length !== null &&
//                         this.props.allTasks.area1Tasks.map((task: IOneTask, index: number) => {
//                             return <div key={task.name} id={progressLayout[task.progress]}>
//                                 {task.name} <span key={`dast${task.name}`} onClick={() => this.props.deleteTask(1, index)}>🗑️</span>
//                             </div>
//                         })}
//                 </div>
//                 <div id="area2">
//                     <div id="title" onClick={() => this.props.toProgress(2)}>{areaNames[2]}</div>
//                     {this.props.allTasks.area2Tasks.length !== null &&
//                         this.props.allTasks.area2Tasks.map((task: IOneTask, index: number) => {
//                             return <div key={task.name} id={progressLayout[task.progress]}>
//                                 {task.name} <span key={`dast${task.name}`} onClick={() => this.props.deleteTask(2, index)}>🗑️</span>
//                             </div>
//                         })}
//                 </div>
//                 <div id="area3">
//                     <div id="title" onClick={() => this.props.toProgress(3)}>{areaNames[3]}</div>
//                     {this.props.allTasks.area3Tasks.length !== null &&
//                         this.props.allTasks.area3Tasks.map((task: IOneTask, index: number) => {
//                             return <div key={task.name} id={progressLayout[task.progress]}>
//                                 {task.name} <span key={`dast${task.name}`} onClick={() => this.props.deleteTask(3, index)}>🗑️</span>
//                             </div>
//                         })}
//                 </div>
//             </div>
//         )
//     }
// }

const { useState } = React;

export default function Area() {
    const dispatch = useDispatch();
    const [inputAddTask, setInputaddTask] = useState('');
    const [selectedArea, setSelectedArea] = useState(0);
    const allTasks = useSelector((state: IState) => state.allTasks)

    // タスク追加フォームのイベント
    function onInputAddTaskChange(event: React.FormEvent<HTMLInputElement>) {
        setInputaddTask(event.currentTarget.value);
    };

// タスク追加ボタンのイベント
function submitNewTask() {
    if (inputAddTask === '') {
        return;
    }
    const createAddtaskObject: IOneTask = {
        name: inputAddTask,
        area: selectedArea,
        progress: 0
    }
    dispatch(addNewTask(createAddtaskObject));
    setInputaddTask('');
}

// タスクを配置するエリアを選択するためのラジオボタン 
function selectAreaRatio() {
    const areaIcons: string[] = ['☀', '🌈', '☁', '☔']
    return (
        <div key='selectAreaRatio'>
            {
                areaIcons.map((areaIcon, index: number) => {
                    return (<span key={index}>
                        <input key={index} type="radio" name="area" value={index} checked={selectedArea === index}
                            onChange={() => setSelectedArea(index)} />
                        {areaIcon}
                        &nbsp;
                 </span>
                    )
                })
            }
        </div>
    )
}
    
    return (
        <div id="areaContainer">
            <div id="addTaskArea">
                <div id="appTitle">Urgent Important Matrix</div>
                <br />
                <div id='addTaskComponents'>
                    <input
                        type="text"
                        value={inputAddTask}
                        onChange={ onInputAddTaskChange }
                    />
                    <button onClick={submitNewTask}>+</button>
                    {selectAreaRatio()}
                </div>
            </div>
            <div id="area0">
                <div id="title" onClick={() => dispatch(toProgress(0))}>{areaNames[0]}</div>
                {allTasks.area0Tasks.length !== null &&
                    allTasks.area0Tasks.map((task: IOneTask, index: number) => {
                        return <div key={task.name} id={progressLayout[task.progress]}>
                            {task.name} <span key={`dast${task.name}`} onClick={() => dispatch(deleteTask(0, index))}>🗑️</span>
                        </div>
                    })}
            </div>
            <div id="area1">
                <div id="title" onClick={() => dispatch(toProgress(1))}>{areaNames[1]}</div>
                {allTasks.area1Tasks.length !== null &&
                    allTasks.area1Tasks.map((task: IOneTask, index: number) => {
                        return <div key={task.name} id={progressLayout[task.progress]}>
                            {task.name} <span key={`dast${task.name}`} onClick={() => dispatch(deleteTask(1, index))}>🗑️</span>
                        </div>
                    })}
            </div>
            <div id="area2">
                <div id="title" onClick={() => dispatch(toProgress(2))}>{areaNames[2]}</div>
                {allTasks.area2Tasks.length !== null &&
                    allTasks.area2Tasks.map((task: IOneTask, index: number) => {
                        return <div key={task.name} id={progressLayout[task.progress]}>
                            {task.name} <span key={`dast${task.name}`} onClick={() => dispatch(deleteTask(2, index))}>🗑️</span>
                        </div>
                    })}
            </div>
            <div id="area3">
                <div id="title" onClick={() => dispatch(toProgress(3))}>{areaNames[3]}</div>
                {allTasks.area3Tasks.length !== null &&
                    allTasks.area3Tasks.map((task: IOneTask, index: number) => {
                        return <div key={task.name} id={progressLayout[task.progress]}>
                            {task.name} <span key={`dast${task.name}`} onClick={() => dispatch(deleteTask(3, index))}>🗑️</span>
                        </div>
                    })}
            </div>
        </div>
    )
}