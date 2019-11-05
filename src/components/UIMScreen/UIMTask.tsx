import * as React from 'react'
import { IOneTask } from 'src/states/Task';
import { progressLayout } from 'src/states/Progress';
import { IDeleteTaskAction } from 'src/actions/ChangeTaskQuantity/ChangeTaskQuantityAction';
import { dummy } from './UIM';

type IUIMTaskparentProps = {
    task: IOneTask,
    taskIndex: number,
    dispatchDeleteTask: () => IDeleteTaskAction
}

export default function UIMTask(props: IUIMTaskparentProps) {
    const {task, taskIndex, dispatchDeleteTask} = props;
    return(        
        <div key={task.name} id={progressLayout[task.progress]} onClick={dummy}>
            {task.name}
            <span key={`dast${taskIndex}`} id={'dust'} onClick={dispatchDeleteTask}>🧺</span>
        </div>
    )
}