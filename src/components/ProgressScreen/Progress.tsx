import * as React from 'react'
import Task from './Task';
import { Droppable } from 'react-beautiful-dnd';

type Props = {
    progressName: string,
    progressIndex: number,
    tasks: string[]
}

export default function Progress(props: Props) {
    const { progressName, progressIndex ,tasks } = props;
    return (
        <div id={progressName} key={progressName}>
            {progressName}
            <Droppable key={`${progressName}:${progressIndex}`} droppableId={progressIndex.toString()}>
                {(provided) => (
                    <div
                        id='dndSpace'
                        ref={provided.innerRef}
                        {...provided.droppableProps}
                    >
                        {tasks.map((task, taskIndex) => {
                                return <Task key={`${task}:${taskIndex}`} task={task} taskIndex={taskIndex} />
                        })}
                        {provided.placeholder}
                    </div>
                )}
            </Droppable>
        </div>
    )
}