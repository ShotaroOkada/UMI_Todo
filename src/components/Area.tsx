import * as React from 'react'
import '../styles/Area.css'
import '../styles/index.css'
import IOneTask from 'src/states/oneTask';
import { areaNames } from 'src/states/AreaName';
import { progressLayout } from 'src/states/progressLayout';
import { useDispatch, useSelector } from 'react-redux';
import { addNewTask, deleteTask } from 'src/actions/ChangeTaskQuantity/ChangeTaskQuantityActionCreator';
import { toProgress } from 'src/actions/ChangeDisplay/ChangeDisplayActionCreator';
import IState from 'src/states';
import { progressNames } from 'src/states/progressName';

const { useState } = React;

// 親のイベントハンドラを受け付けないようにする
function dummy(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    event.stopPropagation();
}


export default function Area() {
    const dispatch = useDispatch();
    const [inputAddTask, setInputaddTask] = useState('');
    const [selectedArea, setSelectedArea] = useState(0);
    const allTasks = useSelector((state: IState) => state.allTasks)
    const areaTasks = [allTasks.area0Tasks, allTasks.area1Tasks, allTasks.area2Tasks, allTasks.area3Tasks]

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
        const areaIcons = ['☀', '🌈', '☁', '☔']
        return (
            <div key='selectAreaRatio'>
                {
                    areaIcons.map((areaIcon, index: number) => {
                        const setSelectedAreaCall = () => setSelectedArea(index);
                        return (
                          <span key={index}>
                            <input id="mouseYubi" key={index} type="radio" name="area" value={index} checked={selectedArea === index}
                                onChange={setSelectedAreaCall} />
                            <span id="mouseYubi" onClick={setSelectedAreaCall}>{areaIcon}</span>
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
                {progressNames.map((progressName, index) => {
                  return <span key={progressName} id={'progressInfo'}>
                            <span id={`progress${index}`}>
                                 ■
                            </span>
                            <span id={'progressName'}>
                                {progressName}
                            </span>
                        </span>
                        
                })}
                <div id='addTaskComponents'>
                    <input
                        type="text"
                        value={inputAddTask}
                        onChange={onInputAddTaskChange}
                    />
                    <button id="mouseYubi" onClick={submitNewTask}>+</button>
                    {selectAreaRatio()}
                </div>
            </div>
            {areaTasks.map((areaTask, areaIndex) => {
                const dispatchToProgress = () => dispatch(toProgress(areaIndex));
                const dispatchDeleteTask0 = (taskIndex: number) => dispatch(deleteTask(areaIndex, taskIndex))
                return (
                    <div id={`area${areaIndex}`} key={`area${areaIndex}`} onClick={dispatchToProgress}>
                        <div id="areaName">{areaNames[areaIndex]}</div>
                        {areaTask.length !== null &&
                            areaTask.map((task, taskIndex) => {
                                const dispatchDeleteTask = () => dispatchDeleteTask0(taskIndex)
                                return <div key={task.name} id={progressLayout[task.progress]} onClick={dummy}>
                                    {task.name} <span key={`dast${task.name}`} id={'dust'} onClick={dispatchDeleteTask}>🗑️</span>
                                </div>
                            })
                        }
                    </div>
                )
            })}
        </div>
    )
}