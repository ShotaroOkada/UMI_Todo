import * as React from 'react'
import { IProgresses } from 'src/states/Task';
import { useDispatch } from 'react-redux';
import { toProgress } from 'src/actions/Display/ActionCreator';
import Task from './Task';

// čŚŞăŽă¤ăăłăăăłăăŠăĺăäťăăŞăăăăŤăă
export function dummy(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    event.stopPropagation();
}

type Props = {
    progressTasks: IProgresses,
    areaName: string,
}

export default function UIM(props: Props) {
    const {progressTasks, areaName} = props
    const dispatch = useDispatch();
    const dispatchToProgress = () => dispatch(toProgress);
    return (
        <div id={`${areaName}`} key={`area${areaName}`} onClick={dispatchToProgress}>
            <div id="areaName">{areaName}</div>
            {Object.entries(progressTasks).map(([progressName, tasks]) => {
                tasks.map((task, taskIndex) => {
                    return <Task key={`${areaName}:task${taskIndex}`} task={task} taskIndex={taskIndex} progressName={progressName} areaName={areaName}/>
                })
            })
            }
        </div>
    )
}