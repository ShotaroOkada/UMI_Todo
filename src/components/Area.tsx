import * as React from 'react'
import '../styles/Area.css'
import IOneTask from 'src/states/oneTask';
import { areaNames } from 'src/states/AreaName';
import { progressLayout } from 'src/states/progressLayout';
import { useDispatch, useSelector } from 'react-redux';
import { addNewTask, deleteTask } from 'src/actions/ChangeTaskQuantity/ChangeTaskQuantityActionCreator';
import { toProgress } from 'src/actions/ChangeDisplay/ChangeDisplayActionCreator';
import IState from 'src/states';

const { useState } = React;

function hoge(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
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
        const areaIcons: string[] = ['☀', '🌈', '☁', '☔']
        return (
            <div key='selectAreaRatio'>
                {
                    areaIcons.map((areaIcon, index: number) => {
                        const setSelectedAreaCall = () => setSelectedArea(index);
                        return (
                          <span key={index}>
                            <input key={index} type="radio" name="area" value={index} checked={selectedArea === index}
                                onChange={setSelectedAreaCall} />
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
                        onChange={onInputAddTaskChange}
                    />
                    <button onClick={submitNewTask}>+</button>
                    {selectAreaRatio()}
                </div>
            </div>
            {areaTasks.map((areaTask, areaIndex) => {
                const dispatchToProgress = () => dispatch(toProgress(areaIndex));
                const dispatchDeleteTask0 = (taskIndex: number) => dispatch(deleteTask(areaIndex, taskIndex))
                return (
                    <div id={`area${areaIndex}`} key={`area${areaIndex}`} onClick={dispatchToProgress}>
                        <div id="title">{areaNames[areaIndex]}</div>
                        {areaTask.length !== null &&
                            areaTask.map((task, taskIndex) => {
                                const dispatchDeleteTask = () => dispatchDeleteTask0(taskIndex)
                                return <div key={task.name} id={progressLayout[task.progress]} onClick={hoge}>
                                    {task.name} <span key={`dast${task.name}`} onClick={dispatchDeleteTask}>🗑️</span>
                                </div>
                            })
                        }
                    </div>
                )
            })}
        </div>
    )
}