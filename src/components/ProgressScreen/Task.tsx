import * as React from 'react'
import { Draggable, DraggableProvided } from 'react-beautiful-dnd';

export type IProgressTaskParentProps = {
    task: string,
    taskIndex: number
}

export default function Task(props: IProgressTaskParentProps) {
    const { task, taskIndex } = props;
    return (
        <Draggable draggableId={task} index={taskIndex}>
            {(provided: DraggableProvided) => (
                <div 
                    key={task} id="taskLayout"
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef}
                >
                    {task}
                </div>
            )}
        </Draggable>
    )
}