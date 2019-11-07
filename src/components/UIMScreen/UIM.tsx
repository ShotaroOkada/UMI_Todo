import * as React from 'react'
import { IOneTask } from 'src/states/Task';
import { useDispatch } from 'react-redux';
import { deleteTask } from 'src/actions/ChangeTaskQuantity/ChangeTaskQuantityActionCreator';
import { areaNames } from 'src/states/Area';
import { toProgress } from 'src/actions/ChangeDisplay/ChangeDisplayActionCreator';
import UIMTask from './UIMTask';

// čŚŞăŽă¤ăăłăăăłăăŠăĺăäťăăŞăăăăŤăă
export function dummy(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    event.stopPropagation();
}

type IUIMParentProps = {
    tasks: string[],
    areaName: string,
    progressName: string
}

export default function UIM(props: IUIMParentProps) {
    const dispatch = useDispatch();
    const {tasks, areaName, progressName} = props
    const dispatchToProgress = () => dispatch(toProgress(areaName));
    const dispatchDeleteTask0 = (taskIndex: number) => dispatch(deleteTask({areaName, taskId: taskIndex}))
    return (
        <div id={`${areaName}`} key={`area${areaName}`} onClick={dispatchToProgress}>
            <div id="areaName">{areaName}</div>
            {tasks.length !== null &&
                tasks.map((task, taskIndex) => {
                    const dispatchDeleteTask = () => dispatchDeleteTask0(taskIndex)
                    return <UIMTask key={`${areaName}:task${taskIndex}`} task={task} taskIndex={taskIndex} dispatchDeleteTask={dispatchDeleteTask} />
                })
            }
        </div>
    )
}