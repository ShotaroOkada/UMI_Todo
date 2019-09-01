import * as React from 'react'
import { IOneTask } from 'src/states/Task';
import { useDispatch } from 'react-redux';
import { deleteTask } from 'src/actions/ChangeTaskQuantity/ChangeTaskQuantityActionCreator';
import { areaNames } from 'src/states/Area';
import { toProgress } from 'src/actions/ChangeDisplay/ChangeDisplayActionCreator';
import Task from './Task';

// čŚŞăŽă¤ăăłăăăłăăŠăĺăäťăăŞăăăăŤăă
export function dummy(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    event.stopPropagation();
}

type IUIMParentProps = {
    tasks: IOneTask[],
    areaIndex: number
}

export default function UIM(props: IUIMParentProps) {
    const dispatch = useDispatch();
    const {tasks, areaIndex} = props
    const dispatchToProgress = () => dispatch(toProgress(areaIndex));
    const dispatchDeleteTask0 = (taskIndex: number) => dispatch(deleteTask(areaIndex, taskIndex))
    return (
        <div id={`area${areaIndex}`} key={`area${areaIndex}`} onClick={dispatchToProgress}>
            <div id="areaName">{areaNames[areaIndex]}</div>
            {tasks.length !== null &&
                tasks.map((task, taskIndex) => {
                    const dispatchDeleteTask = () => dispatchDeleteTask0(taskIndex)
                    return <Task key={`area${areaIndex}:task${taskIndex}`} task={task} taskIndex={taskIndex} dispatchDeleteTask={dispatchDeleteTask} />
                })
            }
        </div>
    )
}