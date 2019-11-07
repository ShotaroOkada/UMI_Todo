import * as React from 'react'
import Progress from './Progress';
import { useSelector } from 'react-redux';
import IState from 'src/states';
import { ITasks } from 'src/states/Task';

export default function ProgressArea() {
    const tasks = useSelector<IState, ITasks>(state => state.tasks)
    return(
    <>
    {Object.entries(tasks).map(([_, progressTasks]) => {
      Object.entries(progressTasks).map(([progressName, tasks], progressIndex) => {
        return <Progress key={progressName} progressName={progressName} progressIndex={progressIndex} tasks={tasks}/>
      })
    })
    }
    </>
    )
}