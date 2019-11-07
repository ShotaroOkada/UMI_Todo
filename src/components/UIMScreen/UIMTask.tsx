import * as React from 'react'
import { progressLayout } from 'src/states/Progress';
import { IDeleteTaskAction } from 'src/actions/ChangeTaskQuantity/ChangeTaskQuantityAction';
import { dummy } from './UIM';

type IUIMTaskparentProps = {
    task: string,
    taskIndex: number,
    dispatchDeleteTask: () => IDeleteTaskAction
}

export default function UIMTask(props: IUIMTaskparentProps) {
    const {task, taskIndex, dispatchDeleteTask} = props;
    return(        
        <div key={task} id={progressLayout[task.progress]} onClick={dummy}>
            {task}
            <span key={`dast${taskIndex}`} id={'dust'} onClick={dispatchDeleteTask}>🧺</span>
        </div>
    )
}