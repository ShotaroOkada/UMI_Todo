import * as React from 'react'
import Progress from './Progress';
import { useSelector } from 'react-redux';
import IState from 'src/states';
import { ITasks, IProgressesTasks } from 'src/states/Task';

export default function ProgressArea() {
    const allTasks = useSelector<IState, ITasks>(state => state.tasks)
    const areaName = useSelector<IState, string>(state => state.display.areaName)
    const progressTasks: IProgressesTasks = allTasks[areaName]
    return(
    <>
     {Object.entries(progressTasks).map(([progressName, tasks]) => {
        return <Progress key={progressName}  progressName={progressName} tasks={tasks}/>
      })
     }

    </>
    )
}