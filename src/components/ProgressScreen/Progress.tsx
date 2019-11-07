import * as React from 'react'
import Task from './Task';
import { Droppable } from 'react-beautiful-dnd';

type Props = {
    progressName: string
    tasks: string[]
}

export default function Progress(props: Props) {
    const { tasks, progressName } = props;
    return (
        <div id={`${progressName}Area`} key={progressName}>
            {progressName}
            <Droppable key={progressName} droppableId={progressName}>
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