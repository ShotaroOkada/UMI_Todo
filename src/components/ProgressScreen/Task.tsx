import * as React from 'react'
import { IOneTask } from 'src/states/Task';
import { IBackProgressAction, IAdvanceProgressAction } from 'src/actions/ChangeProgress/ChangeProgressAction';
import { progressNames } from 'src/states/Progress';
import { Draggable } from 'react-beautiful-dnd';

export type IProgressTaskParentProps = {
    task: IOneTask,
    dispatchAdvenceProgress: () => IAdvanceProgressAction,
    dispatchBackProgress: () => IBackProgressAction,
    taskIndex: number
}

export default function ProgressTask(props: IProgressTaskParentProps) {
    const { task, dispatchAdvenceProgress, dispatchBackProgress, taskIndex } = props;
    return (
        <Draggable draggableId={task.name} index={taskIndex}>
            {(provided) => (
                <div 
                    key={task.name} id="taskLayout"
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef}
                >
                    {task.progress !== 0 && <span id={'arrow'} onClick={dispatchBackProgress}>◀</span>}
                    {task.name}
                    {task.progress !== (progressNames.length - 1) && <span id={'arrow'} onClick={dispatchAdvenceProgress}>▶</span>}
                </div>
            )}
        </Draggable>

    )
}