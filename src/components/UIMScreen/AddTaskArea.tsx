import * as React from 'react'
import { progressNames } from 'src/states/Progress';
import { useDispatch } from 'react-redux';
import { addNewTask } from 'src/actions/ChangeTaskQuantity/ChangeTaskQuantityActionCreator';
import { IAddTask } from 'src/actions/ChangeTaskQuantity/ChangeTaskQuantityAction';
import { areaNames } from 'src/states/Area';

const { useState } = React;

export default function AddTask() {

    const dispatch = useDispatch();
    const [inputAddTask, setInputaddTask] = useState('');
    const [selectedArea, setSelectedArea] = useState('');
    
    // タスク追加フォームのイベント
    function onInputAddTaskChange(event: React.FormEvent<HTMLInputElement>) {
        setInputaddTask(event.currentTarget.value);
    };

    // タスク追加ボタンのイベント
    function submitNewTask() {
        if (inputAddTask === '') {
            return;
        }
        const addTaskObject: IAddTask = {
            name: inputAddTask,
            areaName: selectedArea,
        }
        dispatch(addNewTask(addTaskObject));
        setInputaddTask('');
    }

    // タスクを配置するエリアを選択するためのラジオボタン 
    function selectAreaRatio() {
        const areaIcons = ['☀', '🌈', '☁', '☔']
        return (
            <div key='selectAreaRatio'>
                {
                    areaIcons.map((areaIcon, index: number) => {
                        const setSelectedAreaCall = () => setSelectedArea(areaNames[index]);
                        return (
                            <span key={index}>
                                <input id="mouseYubi" key={index} type="radio" name="area" value={index} checked={selectedArea === areaNames[index]}
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
    )
}