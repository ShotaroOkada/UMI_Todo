import * as React from 'react'
import { IOneTask } from 'src/states/Task';
import { useDispatch } from 'react-redux';
import { deleteTask } from 'src/actions/ChangeTaskQuantity/ChangeTaskQuantityActionCreator';
import { areaNames } from 'src/states/Area';
import { progressLayout } from 'src/states/Progress';
import { toProgress } from 'src/actions/ChangeDisplay/ChangeDisplayActionCreator';

// čŚŞăŽă¤ăăłăăăłăăŠăĺăäťăăŞăăăăŤăă
function dummy(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
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
                    return <div key={task.name} id={progressLayout[task.progress]} onClick={dummy}>
                        {task.name}
                        <span key={`dast${taskIndex}`} id={'dust'} onClick={dispatchDeleteTask}>🧺</span>
                    </div>
                })
            }
        </div>
    )
}