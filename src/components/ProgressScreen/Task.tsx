import * as React from 'react'
import { IOneTask } from 'src/states/Task';
import { IBackProgressAction, IAdvanceProgressAction } from 'src/actions/ChangeProgress/ChangeProgressAction';
import { progressNames } from 'src/states/Progress';

export type IProgressTaskParentProps = {
    task: IOneTask,
    dispatchAdvenceProgress: () => IAdvanceProgressAction,
    dispatchBackProgress: () => IBackProgressAction
}

export default function ProgressTask(props: IProgressTaskParentProps) {
    const { task, dispatchAdvenceProgress, dispatchBackProgress } = props;
    return (
        <div key={task.name} id="taskLayout">
            {task.progress !== 0 && <span id={'arrow'} onClick={dispatchBackProgress}>◀</span>}
            {task.name}
            {task.progress !== (progressNames.length - 1) && <span id={'arrow'} onClick={dispatchAdvenceProgress}>▶</span>}
        </div>
    )
}