import * as React from 'react'
import { IProgressesTasks } from 'src/states/Task';
import { useDispatch } from 'react-redux';
import { toProgress } from 'src/actions/Display/ActionCreator';
import { japaneseAreaNames } from 'src/states/Area';
import Task from 'src/components/UIMScreen/Task';

// čŚŞăŽă¤ăăłăăăłăăŠăĺăäťăăŞăăăăŤăă
export function dummy(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    event.stopPropagation();
}

type Props = {
    progressTasks: IProgressesTasks,
    areaName: string,
}

export default function UIM(props: Props) {
    const {progressTasks, areaName} = props
    const dispatch = useDispatch();
    const dispatchToProgress = () => dispatch(toProgress({areaName}));
    return (
        <div id={`${areaName}Area`} key={`area${areaName}`} onClick={dispatchToProgress}>
            <div id="areaName">{japaneseAreaNames[areaName].name}</div>
            {Object.entries(progressTasks).map(([progressName, tasks]) => {
               return tasks.map((task, taskIndex) => {
                    return (
                        <Task key={`${areaName}:task${taskIndex}`} task={task} taskIndex={taskIndex} progressName={progressName} areaName={areaName}/>
                    )
                })
            })
            }
        </div>
    )
}