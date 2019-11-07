import * as React from 'react'
import { dummy } from './UIM';
import { useDispatch } from 'react-redux';
import { deleteTask } from 'src/actions/Tasks/ActionCreator';

type Props = {
    task: string,
    taskIndex: number,
    progressName: string,
    areaName: string
}

export default function Task(props: Props) {
    const {task, taskIndex, progressName, areaName} = props;
    const dispatch = useDispatch();
    const dispatchDeleteTask = () => dispatch(deleteTask({areaName, progressName, taskIndex}))
    return(        
        <div key={taskIndex} id={`${progressName}Task`} onClick={dummy}>
            {task}
            {console.log(`fuga:${task}`)}
            <span key={`dast${taskIndex}`} id={'dust'} onClick={dispatchDeleteTask}>🧺</span>
        </div>
    )
}